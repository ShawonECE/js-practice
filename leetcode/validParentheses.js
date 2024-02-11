// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

class Stack {
    constructor() {
        this.stack = [];
    }

    add(item) {
        this.stack.push(item);
    }

    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const isValid = (s) => {
    let stack = new Stack();
    let openings = ['(', '{', '['];
    let closings = [')', '}', ']'];

    for (let char of s) {
        if (openings.includes(char)) {
            stack.add(char);
        } else if (closings.includes(char)) {
            let removed = stack.remove();

            if (openings.indexOf(removed) !== closings.indexOf(char)) {
                return false;
            } 
        } else {
            return false;
        }
        
    }
    return stack.stack.length === 0;
};

const string = '[{';
console.log(isValid(string));