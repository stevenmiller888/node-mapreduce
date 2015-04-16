
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
  if (!vals.length) return 1;

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

/**
 * Short result object.
 */

exports.longResult = {
  execution: 4,
  in: 12,
  computer: 5,
  and: 1,
  software: 1,
  engineering: 1,
  is: 6,
  the: 19,
  process: 3,
  by: 1,
  which: 2,
  a: 9,
  or: 3,
  virtual: 1,
  machine: 3,
  performs: 1,
  instructions: 5,
  of: 7,
  program: 5,
  trigger: 1,
  sequences: 1,
  simple: 1,
  actions: 3,
  on: 1,
  executing: 1,
  those: 1,
  produce: 1,
  effects: 1,
  according: 1,
  to: 1,
  semantics: 1,
  programs: 3,
  for: 1,
  may: 3,
  execute: 1,
  batch: 1,
  without: 1,
  human: 1,
  interaction: 1,
  user: 1,
  type: 1,
  commands: 3,
  an: 2,
  interactive: 1,
  session: 1,
  interpreter: 1,
  this: 1,
  case: 1,
  are: 1,
  simply: 1,
  whose: 1,
  chained: 1,
  together: 1,
  term: 1,
  run: 1,
  used: 1,
  almost: 1,
  synonymously: 1,
  context: 1,
  takes: 1,
  place: 1,
  crucial: 1
};
