
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

  it('should only allow values less than the machine\'s number of CPUs for parallelism', function(){
    try {
      MapReduce(10);
    } catch (e) {
      assert.equal(e.message, 'The number of CPUs must be less than or equal to the machine\'s');
    }
  });

  it('should return a function', function(){
    var mapReduce = MapReduce();
    assert.equal(typeof mapReduce, 'function');
  });

  it('should work when the number of lines is less than the number of CPUs', function(){
    var mapReduce = MapReduce();
    var article = fs.readFileSync('test/small.txt', { encoding: 'utf8' });
    mapReduce(article, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.smallResult);
    });
  });

  it('should work when the number of lines is equal to the number of CPUs', function(){
    var mapReduce = MapReduce();
    var article = fs.readFileSync('test/medium.txt', { encoding: 'utf8' });
    mapReduce(article, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.mediumResult);
    });
  });

  it('should work when the number of lines is greater than the number of CPUs', function(){
    var mapReduce = MapReduce();
    var article = fs.readFileSync('test/large.txt', { encoding: 'utf8' });
    mapReduce(article, helpers.map, helpers.reduce, function(res){
      assert.deepEqual(res, helpers.largeResult);
    });
  });
});
