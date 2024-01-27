// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result = result * base;
//     }
//     return result;
// }

// console.log(power(2, 10));

// console.log('Shawon'[3]);

// const students = {
//     shawon: 25,
//     nipun: 39
// };

// const pupils = {...students};

//const array1 = [1, 2, 3, 4];
// const array2 = [1, [2, 3]];

//console.log(array1.reduce((a, b) => a * b));

// const reduce = (array, fn, start) => {
//     let current = start || array[0];
//     if(start) {
//         array.forEach(element => {
//             current = fn(current, element);
//         });
//     } else {
//         for (let i = 1; i < array.length; i++) {
//             current = fn(current, array[i]);
//         }
//     }
//     return current;
// };

// console.log(reduce(array1, (a, b) => a + b));

// students.shawon = 1;
// // students['shawon'] = 35;
// console.log(students);

// const array2 = array;
// array2.push(1);
// console.log(array);
// let value = 2;
// console.log(array2.includes([2, 3]));

// const greaterThan = n => {
//     return m => m > n;
// };
// const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// const noisy = f => {
//     return (...args) => {
//         return f(...args);
//     };
// };
// console.log(noisy(Math.min)(3, 2, 4));

// const repeat = (n, action) => {
//     for (let i = 0; i <= n; i++) {
//         action(i);
//     }
// };

// const unless = (test, then) => {
//     if (test) {
//         then();
//     };
// };

// repeat(10, i => {
//     unless(i % 2 === 0, () => console.log(i, "is even"));
// });

// const array = [[1, 5], [10, 15]];
// const test = ([from, to]) => 12 >= from && 12 < to;
// console.log(array.some(test));

// const string = 'আমি';
// console.log(string.codePointAt(1));
// console.log(array.find(item => item === 6));

// const array = [1, 2, 3, 4, 5];
// console.log(array.every(item => item > 0));

// const charScript = code => {
//     const script = scripts.find(script => script.ranges.some(([from, to]) => code >= from && code < to));
//     return script;
// };

// let empty = {};
// let square = function (n) {
//     return n * n;
// }
// console.log(Function.prototype);

// let okIterator = 'ok'[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

//const numbers = [50, 67, 3, 90, 56];
// const students = {
//     shawon: 25,
//     nipun: 39
// };

// for(let student in students) {
//     console.log(students[student]);
// }

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'a'];
// const letterSet = new Set(letters);

// console.log(letterSet.values());
// for (let letter of letterSet.values()) {
//     console.log(letter);
// }

// const shawon = {
//     uni: 'ku',
//     sub: 'ece'
// };

// const nipun = {
//     uni: 'ku',
//     sub: 'ece'
// };

// const shawon = ['ku', 'ece'];
// shawon.splice(1, 0, '170925');
// const nipun = ['ku', 'ece'];

// console.log(shawon);

const person = new Object(27);
console.log(person);
