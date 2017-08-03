'use strict';

var biscuits = [
  'custard cream',
  'bourbon',
  'shortbread',
  'digestive',
  'rich tea',
  '',
  'shortbread'
];

// **WARNING - THESE MANIPULATE THE ORIGINAL ARRAY!**

// _.reverse reverses the order of the array
console.log("//_.reverse(biscuits)");
console.log(_.reverse(biscuits));
console.log('');

// _.without creates a new array without the value passed through as an argument
console.log("//_.without(biscuits, 'shortbread')");
console.log(_.without(biscuits, 'shortbread'));
console.log('');

// _.pullAt removes elements from the array corresponding to indexes and returns
// an array
console.log("//_.pullAt(biscuits, [1, 3])");
var newBiscuitArray = _.pullAt(biscuits, [1, 3])
console.log('new pulled array', newBiscuitArray);
console.log('');

// _.fill fills the elements of array with value from start up to, but not
// including the end
console.log("//_.fill(biscuits, '***', 1, 5)");
console.log(_.fill(biscuits, '***', 1, 4));
console.log('');

// _.pull removes the given values from the array
console.log("//_.pull(biscuits, 'shortbread')");
console.log(_.pull(biscuits, '***', ''));
console.log('');

//_.pullAll removes the given values, given in another array
console.log("//_.pullAll(biscuits, ['shortbread', 'rich tea'])");
console.log(_.pullAll(biscuits, ['shortbread', 'rich tea']));
console.log('');

var niceBiscuits = [
  { biscuit: 'digestive', nice: false },
  { biscuit: 'custard cream', nice: true },
  { biscuit: 'bourbon', nice: true },
  { biscuit: 'rich tea', nice: false }
];

// _.remove removes the elements from the array that match the predicate
// function passed through as an argument and returns a separate array of those
// removed elements
console.log("//_.remove(niceBiscuits, function(o) { !o.nice })");
var nicestBiscuits = _.remove(niceBiscuits, function(biscuit) { return biscuit.nice })
console.log('new array of removed nice biscuit objects', nicestBiscuits);
console.log('');
