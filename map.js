const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'b', 'c'];
const myMap = new Map([[array1, 4], [array2, 3]]);

myMap.set('letters', 26);

console.log(myMap);
console.log(myMap.get(array1));
console.log(myMap.size);
console.log(myMap.has('letter'));
console.log(myMap.entries());
