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

console.log('// Here is an array of biscuits, plus one empty string');
console.log(biscuits);
console.log('');

// FIRST AND LAST
// _.last gets the last element in the array
console.log("//_.last(biscuits)");
console.log(_.last(biscuits));
console.log('');

// _.tail gets all but the first element of the array
console.log("//_.tail(biscuits)");
console.log(_.tail(biscuits));
console.log('');

// _.head returns the first element of the array
console.log('//_.head(biscuits)');
console.log(_.head(biscuits));
console.log('');

// _.initial returns all but the last element of the array
console.log("//_.initial(biscuits)");
console.log(_.initial(biscuits));
console.log('');

// _.uniq returns a new, duplicate-free array
console.log("//_.uniq(biscuits)");
console.log(_.uniq(biscuits));
console.log('');


// _.chunk splits the array into separate arrays based on the number you have
// specified
console.log('// _.chunk(biscuits,2)');
console.log(_.chunk(biscuits,2));
console.log('');

// _.compact creates a new array without the falsey values (false, null, 0, '',
// undefined)
console.log('//_.compact(biscuits)');
console.log(_.compact(biscuits));
console.log('');

// _.concat concatinates an array with another array or other values
console.log("//_.concat(biscuits, 'fig roll')");
console.log(_.concat(biscuits, ['fig roll']));
console.log('');

// _.difference creates a new array of the difference values in the original
// array compared to another
console.log("//_.difference(biscuits, ['custard cream, 'rich tea'])");
console.log(_.difference(biscuits, ['custard cream', 'rich tea']));
console.log('');

// _.indexOf returns the item from the index given as an argument
console.log("//_.indexOf(biscuits, 'shortbread')");
console.log(_.indexOf(biscuits, 'shortbread'));
console.log('');

// _.lastIndexOf returns the index of the matched value, looking from the end
// of the array to the start
console.log("//_.lastIndexOf(biscuits, 'shortbread')");
console.log(_.lastIndexOf(biscuits, 'shortbread'));
console.log('');

// _.intersection returns the unique values from all given arrays
var biscuitsCopy = ['digestive', 'custard cream', 'rich tea']
console.log("//_.intersection(biscuits, biscuitsCopy)");
console.log(_.intersection(biscuits, biscuitsCopy))
console.log('');;

// _.union returns all unique items from the combined values of several arrays
console.log("//_.union(biscuits, biscuitsCopy)");
console.log(_.union(biscuits, biscuitsCopy));
console.log('');

// _.xor creates an array of unique values that is the symmetric difference
// of the given arrays
console.log("//_.xor(biscuits, biscuitsCopy)");
console.log(_.xor(biscuits, biscuitsCopy));
console.log('');

// _.join returns a string made up of the conjoined items in the array
console.log("//_.join(biscuits, ' & ')");
console.log(_.join(biscuits, ' & '));
console.log('');

// _.nth returns an item at n position in the array
console.log("//_.nth(biscuits, 1)");
console.log(_.nth(biscuits, 1));
console.log('');


// SLICING
// _.slice creates a slice from the array from the start n to the end n
console.log("//_.slice(biscuits, 2, 5)");
console.log(_.slice(biscuits, 2, 5));
console.log('');

// _.dropRight creates a slice of the array with n elements dropped from the end
console.log('//_.dropRight(biscuits, 3');
console.log(_.dropRight(biscuits, 3));
console.log('');

// _.drop creates a slice of array with n elements dropped from the start
console.log('//_.drop(biscuits, 3');
console.log(_.drop(biscuits, 3));
console.log('');

// _.take returns a slice of the array from the start with a given number of
// items
console.log("//_.take(biscuits, 3)");
console.log(_.take(biscuits, 3));
console.log('');

// _.takeRight returns a slice of the array from the end with a given number of
// items
console.log("//_.takeRight(biscuits, 3)");
console.log(_.takeRight(biscuits, 3));
console.log('');
