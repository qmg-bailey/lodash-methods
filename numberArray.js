'use strict';

// _.sortedIndex Uses a binary search to determine the lowest index at which
// value should be inserted into array in order to maintain its sort order
var numberSeq = [1, 2, 4, 4, 4, 4, 5]
console.log('numberSeq', numberSeq);
console.log("//_.sortedIndex(numberSeq, 3)");
console.log(_.sortedIndex(numberSeq, 3));
console.log('');

// _.sortedIndexOf sorts the array and then finds the first item matching
// the argument passed through
console.log("//_.sortedIndexOf(numberSeq, 4) ");
console.log(_.sortedIndexOf(numberSeq, 4));
console.log('');

// _.sortedUniq returns only a nice, new duplicate-free array
console.log("//_.sortedUniq(numberSeq)");
console.log(_.sortedUniq(numberSeq));
console.log('');
