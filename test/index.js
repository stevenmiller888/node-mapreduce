
/**
 * Dependencies.
 */

var helpers = require('./helpers');
var assert = require('assert');
var MapReduce = require('..');
var fs = require('fs');

/**
 * Articles.
 */

var small = fs.readFileSync('test/small.txt', { encoding: 'utf8' });
var medium = fs.readFileSync('test/medium.txt', { encoding: 'utf8' });
var large = fs.readFileSync('test/large.txt', { encoding: 'utf8' });

/**
 * Tests.
 */

describe('MapReduce()', function(){
  it('should be a function', function(){
    assert.equal(typeof MapReduce, 'function');
  });

  it('should allow an optional value for parallelism', function(){
    var mapReduce = MapReduce(2);
    assert(mapReduce);
  });

  it('should only allow positive values for parallelism', function(){
    try {
      MapReduce(-1);
    } catch (e) {
      assert.equal(e.message, 'The number of CPUs must be positive');
    }
  });

  it('should return a function', function(){
    var mapReduce = MapReduce();
    assert.equal(typeof mapReduce, 'function');
  });

  it('should work when the number of lines is less than the number of CPUs', function(){
    var mapReduce = MapReduce();

    mapReduce(small, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.smallResult);
    });
  });

  it('should work when the number of lines is equal to the number of CPUs', function(){
    var mapReduce = MapReduce();

    mapReduce(medium, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.mediumResult);
    });
  });

  it('should work when the number of lines is greater than the number of CPUs', function(){
    var mapReduce = MapReduce();

    mapReduce(large, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.largeResult);
    });
  });

  it('should perform well on large files with higher parallelism', function(){
    var mapReduce = MapReduce(8);

    mapReduce(large, helpers.map, helpers.reduce, function(res){
      // ...
    });
  });

  it('should perform worse on large files with lower parallelism', function(){
    var mapReduce = MapReduce(1);

    mapReduce(large, helpers.map, helpers.reduce, function(res){
      // ...
    });
  });
});
