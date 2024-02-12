class MyStack {
    constructor() {
        this.stack = [];
        this.top = - 1;
    }

    push(item) {
        this.stack.push(item);
        this.top += 1;
    }
    pop() {
        if (this.stack.length) {
            this.top -= 1;
            return this.stack.pop();
        }
    }
    get peek() {
        return this.stack[this.top];
    }
    get isEmpty() {
        return this.stack.length === 0;
    }
}

class MyQueue {
    constructor() {
        this.stackOne = new MyStack();
        this.stackTwo = new MyStack();
    }

    push(x) {
        this.stackOne.push(x);
    }
    pop() {
        let top = this.stackOne.top;
        for (let i = top; i > 0; i--) {
            this.stackTwo.push(this.stackOne.pop());
        }

        let item = this.stackOne.pop();

        top = this.stackTwo.top;
        for (let i = top; i >= 0; i--) {
            this.stackOne.push(this.stackTwo.pop());
        }

        return item;
    }
    peek() {
        return this.stackOne.stack[0];
    }
    empty() {
        return this.stackOne.isEmpty;
    }
}

const queue = new MyQueue();

queue.push('Shawon');
queue.push('Shoaib');

console.log(queue.pop());
console.log(queue);

