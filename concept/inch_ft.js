const prompt = require('prompt-sync')();
var inch = parseInt(prompt("Enter the length in inches: "));
var feet = Math.floor(inch/12);
inch = inch % 12;
console.log("The length is ", feet, "feet", inch, "inches");