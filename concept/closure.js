// const temporary = () => {
//     let count = 0;

//     const plus = () => {
//         count += 1;
//         return count;
//     };

//     return plus;
// };

// const add = temporary();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


function sum(x) {
    let num = 2;
    return () => {
        let res = num + x;
        num = num + 2;
        return res;
    } 
}

const myFunc = sum(1);
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());