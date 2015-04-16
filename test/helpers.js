
/**
 * Map helper.
 */

exports.map = function(str){
  var ret = {};

  str.match(/[a-zA-Z]+/g).forEach(function(w){
    w = w.toLowerCase();
    if (ret[w]) return ret[w] += 1;
    ret[w] = 1;
  });
  
  return ret;
};


/**
 * Reduce helper.
 */

exports.reduce = function(k, vals){
  if (!vals.length) return 1;

  return vals.reduce(function(acc, val){
    return acc + val;
  });
};

/**
 * Small result.
 */

exports.smallResult = {
  it: 3,
  under: 1,
  the: 4,
  terms: 1,
  of: 4,
  project: 2,
  gutenberg: 2,
  license: 1,
  included: 1,
  with: 2,
  this: 2,
  ebook: 2,
  adventures: 1,
  tom: 1,
  sawyer: 1,
  complete: 1,
  by: 1,
  mark: 1,
  twain: 1,
  samuel: 1,
  clemens: 1,
  no: 2,
  restrictions: 1,
  whatsoever: 1,
  you: 1,
  may: 1,
  copy: 1,
  give: 1,
  away: 1,
  or: 1,
  re: 1,
  use: 2,
  is: 1,
  for: 1,
  anyone: 1,
  anywhere: 1,
  at: 1,
  cost: 1,
  and: 1,
  almost: 1
};

/**
 * Medium result.
 */

exports.mediumResult = {
  title: 1,
  the: 6,
  adventures: 2,
  of: 5,
  tom: 2,
  sawyer: 2,
  complete: 2,
  this: 2,
  ebook: 3,
  is: 1,
  for: 1,
  use: 2,
  anyone: 1,
  anywhere: 1,
  at: 2,
  no: 2,
  cost: 1,
  and: 1,
  with: 2,
  almost: 1,
  or: 2,
  online: 1,
  www: 1,
  gutenberg: 3,
  net: 1,
  project: 2,
  by: 1,
  restrictions: 1,
  whatsoever: 1,
  you: 1,
  may: 1,
  copy: 1,
  it: 2,
  give: 1,
  away: 1,
  re: 1,
  mark: 1,
  twain: 1,
  samuel: 1,
  clemens: 1,
  under: 1,
  terms: 1,
  license: 1,
  included: 1
};

/**
 * Large result.
 */

exports.largeResult = {};
