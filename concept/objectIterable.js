const array = [1, 2, 3];

const arrayIter = array[Symbol.iterator]();
console.log(arrayIter.next());
console.log(arrayIter.next());
console.log(arrayIter.next());
console.log(arrayIter.next());