
# map-reduce

> A map-reduce algorithm for Node

## Installation

    $ npm install node-mapreduce

## Usage

```js
var MapReduce = require('node-mapreduce');
var mapReduce = MapReduce();

var article = 'A very long string';

function map(str){
  var ret = {};

  str.match(/[a-zA-Z]+/g).forEach(function(w){
    w = w.toLowerCase();
    if (ret[w]) return ret[w] += 1;
    ret[w] = 1;
  });
  
  return ret;
};

function reduce(k, vals){
  if (!vals.length) return 1;

  return vals.reduce(function(acc, val){
    return acc + val;
  });
};

mapReduce(article, map, reduce, function(result){
  // ...
});
```

## License

MIT
