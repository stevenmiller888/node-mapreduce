
/**
 * Dependencies.
 */

var childProcess = require('child_process');
var assert = require('assert');
var os = require('os');

/**
 * Expose `MapReduce`.
 */

module.exports = MapReduce;

/**
 * MapReduce.
 *
 * @param {Number} p (parrallelism)
 * @return {Function}
 */

function MapReduce(p){
  var numCPUs = os.cpus().length;

  if (p) {
    assert(p > 0, 'The number of CPUs must be positive');
    assert(p <= numCPUs, 'The number of CPUs must be less than or equal to the machine\'s');
  }
  
  var size = p || numCPUs;
  
  return function(text, map, reduce, cb){
    var data = text.split('\n');
    var aggregateResults = [];
    var numCompleted = 0;

    for (var i = 0; i < size; i++) {
      var worker = childProcess.fork('lib/worker.js');
      
      worker.on('message', function(msg){
        if (msg.status === 'finished') {
          aggregateResults.push(msg.partialResults);
        }
      });
      
      worker.on('exit', function(){
        numCompleted += 1;
        
        if (numCompleted === size) {
          var reducedResults = {};

          aggregateResults.forEach(function(result){
            for (var k in result) {
              if (reducedResults[k]) {
                reducedResults[k].push(result[k]);
              } else {
                reducedResults[k] = [];
              }
            }
          });
          
          for (var k in reducedResults) {
            reducedResults[k] = reduce(k, reducedResults[k]);
          }

          cb(reducedResults);
        }
      });

      worker.send({ partialData: data[i], map: map.toString() });
    }
  }
}
