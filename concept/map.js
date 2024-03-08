const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'b', 'c'];
const myMap = new Map();

myMap.set('letters', 26);
myMap.set('Shawon', 25);

console.log(myMap);
console.log(myMap.has('letters'));
console.log(...myMap.entries());
