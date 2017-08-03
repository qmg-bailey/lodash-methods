'use strict';

var niceBiscuits = [
  { biscuit: 'custard cream', nice: true },
  { biscuit: 'bourbon', nice: true },
  { biscuit: 'digestive', nice: false },
  { biscuit: 'rich tea', nice: false }
];

console.log('// Here is an array of biscuit objects')
console.log(niceBiscuits)
console.log('')

// _.dropRightWhile returns a new array with the items that match the
// predicate function passed into it as an argument
// Elements are dropped until predicate returns falsey, so here the only thing
// to be dropped will be the rich tea
console.log('//_.dropRightWhile(niceBiscuits, function(o) { return !o.nice; })')
console.log(_.dropRightWhile(niceBiscuits, function(o) { return !o.nice; }))
console.log('')

// _.dropWhile returns a new array with only the items that match the
// predicate function passed into it as an argument
console.log('//_.dropWhile(niceBiscuits, function(o) { return !o.nice; })')
console.log(_.dropWhile(niceBiscuits, function(o) { return !o.nice; }))
console.log('')

// _.findIndex returns the index of the first element where the predicate
// returns truthy
console.log("//_.findIndex(niceBiscuits, function(o) { return !o.nice; }))")
console.log(_.findIndex(niceBiscuits, function(o) { return !o.nice; }))
console.log('')

// _.findLastIndex returns the index of the last element where the predicate
// returns truthy (from right to left)
console.log("//_.findLastIndex(niceBiscuits, function(o) { return !o.nice; }))")
console.log(_.findLastIndex(niceBiscuits, function(o) { return !o.nice; }))
console.log('')

// _.find returns the first element where the predicate returns truthy
console.log("//_.find(niceBiscuits, function(o) { return !o.nice; }))")
console.log(_.find(niceBiscuits, function(o) { return !o.nice; }))
console.log('')

// _.takeWhile returns a slice of the array from the start until
// predicate returns falsey
console.log("//_.takeWhile(niceBiscuits, function(b) { return !b.nice; })");
console.log(_.takeWhile(niceBiscuits, function(b) { return b.nice; }));
console.log('');

// _.takeRightWhile returns a slice of the array from the end until
// predicate returns falsey
console.log("//_.takeRightWhile(niceBiscuits, function(b) { return !b.nice; })");
console.log(_.takeRightWhile(niceBiscuits, function(b) { return !b.nice; }));
console.log('');
