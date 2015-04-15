
# map-reduce

> A map-reduce algorithm for Node

![]()

## Installation

    $ npm install map-reduce

## Usage

```
var MapReduce = require('map-reduce');
var mapReduce = MapReduce();

var article = [
  'Execution in computer and software engineering is the process by which a computer or a virtual machine performs the instructions of a computer program',
  'The instructions in the program trigger sequences of simple actions on the executing machine',
  'Those actions produce effects according to the semantics of the instructions in the program',
  'Programs for a computer may execute in a batch process without human interaction',
  'or a user may type commands in an interactive session of an interpreter',
  'In this case the "commands" are simply programs whose execution is chained together'
];

function map(str){
  var ret = [];

  str.split(' ').forEach(function(w){
    w = w.toLowerCase();
    if (ret[w]) return ret[w] += 1;
    ret[w] = 1;
  });

  return ret;
}

function reduce(k, vals){
  var ret = {};
  
  ret[k] = vals.reduce(function(acc, val){
    return acc + val;
  });

  return ret;
}

mapReduce(article, map, reduce, function(result){
  // ...
});
```

## License

MIT
