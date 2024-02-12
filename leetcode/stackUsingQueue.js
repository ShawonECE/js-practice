class MyQueue {
    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    get size() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.head === this.tail;
    }
    enqueue(item) {
        this.queue[this.tail] = item;
        this.tail++;
    }
    dequeue() {
        if (!this.isEmpty) {
            let dequeueItem = this.queue[this.head];
            delete this.queue[this.head];
            this.head++;
            if (this.isEmpty) {
                this.head = 0;
                this.tail = 0;
            }
            return dequeueItem;
        }
        return null;
    }
}

class MyStack {
    constructor() {
        this.queueOne = new MyQueue();
        this.queueTwo = new MyQueue();
    }

    push(x) {
        this.queueOne.enqueue(x);
    }
    pop() {
        let head = this.queueOne.head;
        let tail = this.queueOne.tail;
        for (let i = head; i < tail - 1; i++) {
            this.queueTwo.enqueue(this.queueOne.dequeue());
        }

        let item = this.queueOne.dequeue();

        head = this.queueTwo.head;
        tail = this.queueTwo.tail;
        for (let i = head; i < tail; i++) {
            this.queueOne.enqueue(this.queueTwo.dequeue());
        }

        return item;
    }
    top() {
        return this.queueOne.queue[this.queueOne.tail - 1];
    }
    empty() {
        return this.queueOne.isEmpty;
    }
}

const stack = new MyStack();

stack.push('shawon');
stack.push('shoaib');
console.log(stack);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
console.log(stack);
console.log(stack.empty());
