const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter a number: "));
console.log(typeof number);
var factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log("Factorial: ", factorial);