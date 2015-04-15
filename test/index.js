
/**
 * Dependencies.
 */

var helpers = require('./helpers');
var assert = require('assert');
var MapReduce = require('..');
var fs = require('fs');

/**
 * Tests.
 */

// describe('MapReduce()', function(){
//   it('should be a function', function(){
//     assert.equal(typeof MapReduce, 'function');
//   });
//
//   it('should take an optional number of CPUs', function(){
//     var mapReduce = MapReduce(2);
//     assert(mapReduce);
//   });
//
//   it('should only allow positive values for the number of CPUs', function(){
//     try {
//       MapReduce(-1);
//     } catch (e) {
//       assert.equal(e.message, 'The number of CPUs must be positive');
//     }
//   });
//
//   it('should return a function', function(){
//     var mapReduce = MapReduce();
//     assert.equal(typeof mapReduce, 'function');
//   });
//
//   it('should work when the number of lines equals the number of CPUs', function(){
//     var mapReduce = MapReduce();
//     var article = fs.readFileSync('test/short.txt', { encoding: 'utf8' });
//     mapReduce(article, helpers.map, helpers.reduce, function(res){
//       assert.deepEqual(res, helpers.shortResult);
//     });
//   });
//
//   it('should work when the number of lines is greater than the number of CPUs', function(){
//     var mapReduce = MapReduce();
//     var article = fs.readFileSync('test/long.txt', { encoding: 'utf8' });
//     mapReduce(article, helpers.map, helpers.reduce, function(res){
//       assert.deepEqual(res, helpers.longResult);
//     });
//   });
// });

var mapReduce = MapReduce();
var article = fs.readFileSync('test/long.txt', { encoding: 'utf8' });
mapReduce(article, helpers.map, helpers.reduce, function(res){
  console.log(res);
});
