'use strict';

var messyBiscuits = [
  { biscuit: 'digestive', nice: false },
  { biscuit: 'custard cream', nice: true },
  { biscuit: 'bourbon', nice: true },
  { biscuit: 'rich tea', nice: false },
  ['fig roll', 'shortbread', ['choc chip cookie']],
];

console.log('// Here is an array of biscuit objects plus another array of strings')
console.log(messyBiscuits)
console.log('')

// _.flatten flattens the array one level deep
console.log('_.flatten(messyBiscuits)')
console.log(_.flatten(messyBiscuits))
console.log('');

// _.flattenDeep flattens the array completely
console.log('_.flattenDeep(messyBiscuits)')
console.log(_.flattenDeep(messyBiscuits))
console.log('');

// _.flattenDepth flattens the array recursively n times
console.log('_.flattenDepth(messyBiscuits, 1)')
console.log(_.flattenDepth(messyBiscuits, 1));
console.log('');
