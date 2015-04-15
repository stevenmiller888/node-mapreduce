
/**
 * Map helper.
 */

exports.map = function map(str){
  var ret = {};
  
  str.split(' ').forEach(function(w){
    w = w.toLowerCase();
    if (ret[w]) return ret[w] += 1;
    ret[w] = 1;
  });

  return ret;
}


/**
 * Reduce helper.
 */

exports.reduce = function(k, vals){
  if (!vals.length) return 0;

  return vals.reduce(function(acc, val){
    return acc + val;
  });
}

/**
 * Short result object.
 */

exports.shortResult = {
  execution: 2,
  in: 6,
  computer: 1,
  and: 0,
  software: 0,
  engineering: 0,
  is: 3,
  the: 9,
  process: 1,
  by: 0,
  which: 1,
  a: 3,
  or: 1,
  virtual: 0,
  machine: 1,
  performs: 0,
  instructions: 2,
  of: 3,
  program: 2,
  context: 0,
  takes: 0,
  place: 0,
  crucial: 0,
  trigger: 0,
  sequences: 0,
  simple: 0,
  actions: 1,
  on: 0,
  executing: 0,
  those: 0,
  produce: 0,
  effects: 0,
  according: 0,
  to: 0,
  semantics: 0,
  user: 0,
  may: 1,
  type: 0,
  commands: 1,
  an: 0,
  interactive: 0,
  session: 0,
  interpreter: 0,
  programs: 1,
  for: 0,
  execute: 0,
  batch: 0,
  without: 0,
  human: 0,
  interaction: 0,
  term: 0,
  run: 0,
  used: 0,
  almost: 0,
  synonymously: 0,
  this: 0,
  case: 0,
  are: 0,
  simply: 0,
  whose: 0,
  chained: 0,
  together: 0
};
