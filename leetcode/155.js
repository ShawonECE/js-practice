class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        let min;
        if (this.stack.length) {
            min = Math.min(val, this.stack[this.stack.length - 1].min);
        } else {
            min = val;
        }
        this.stack.push({val, min});
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].val;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}