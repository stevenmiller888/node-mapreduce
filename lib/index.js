
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
 * @param {Number} p
 * @return {Function}
 */

function MapReduce(p){
  var numCPUs = os.cpus().length;
  if (p) assert(p > 0, 'The number of CPUs must be positive');
  var size = p || numCPUs;
  
  return function(text, map, reduce, cb){
    var data = text.split('\n');
    var aggregateResults = [];
    var length = data.length;
    var numCompleted = 0;
    var done = false;

    for (var i = 0; i < size; i++) {
      var worker = childProcess.fork(__dirname + '/worker');
      
      worker.on('message', function(msg){
        numCompleted += 1;
        aggregateResults.push(msg.partialResults);
        
        if (data.length) {
          this.send({ partialData: data.shift(), map: map.toString() });
        } else {
          this.kill();
        }
      });
      
      worker.on('exit', function(){
        if (done) return;

        if (numCompleted === length) {
          done = true;
          var reducedResults = {};
          var ret = {};
        
          aggregateResults.forEach(function(result){
            if (!Object.keys(result).length) return;
            
            for (var k in result) {
              if (reducedResults[k]) {
                reducedResults[k].push(result[k]);
              } else {
                reducedResults[k] = [1];
              }
            }
          });
        
          for (var k in reducedResults) {
            reducedResults[k] = reduce(k, reducedResults[k]);
          }
          
          Object.keys(reducedResults)
            .sort()
            .forEach(function(v, i){
              ret[v] = reducedResults[v];
            });

          cb(ret);
        }
      });
      
      worker.send({ partialData: data.shift(), map: map.toString() });
    }
  }
}