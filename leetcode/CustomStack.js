class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.stack.length) {
            return this.stack.pop();
        } else {
            return -1;
        }
    }

    increment(k, val) {
        for (let i = 0; i < k; i++) {
            if (this.stack.length > i) {
                this.stack[i] += val;
            } else {
                break;
            }
        }
    }
}