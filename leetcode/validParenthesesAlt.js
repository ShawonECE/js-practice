class Stack {
    constructor() {
        this.stack = {};
        this.top = -1;
        this.length = 0;
    }

    add(item) {
        this.top++;
        this.length++;
        this.stack[this.top] = item;
    }

    remove() {
        if (this.top >= 0) {
            const removed = this.stack[this.top];
            delete this.stack[this.top];
            this.top--;
            this.length--;
            return removed;
        }
    }
}

const isValid = (s) => {
    let stack = new Stack();
    let openings = {
        '(': 1,
        '{': 2,
        '[': 3
    };
    let closings = {
        ')': 1,
        '}': 2,
        ']': 3
    };;

    for (let char of s) {
        if (openings[char]) {
            stack.add(char);
            
        } else if (closings[char]) {
            let removed = stack.remove();
            if (openings[removed] !== closings[char]) {              
                return false;
            } 
        } else {
            return false;
        }
        
    }
    return stack.length === 0;
};


const s = '()';
console.log(isValid(s));