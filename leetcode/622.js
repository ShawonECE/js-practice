class MyCircularQueue {
    constructor(k) {
        this.queue = {};
        this.maxSize = k;
        this.currentSize = 0;
        this.head = -1;
        this.tail = -1;
    }

    isEmpty() {
        return this.currentSize === 0;
    }
    isFull() {
        return this.currentSize === this.maxSize;
    }
    enQueue(value) {
        if (!this.isFull()) {
            if (this.currentSize === 0) {
                this.head++;
                this.tail++;
                this.queue[this.tail] = value;
            } else {
                this.tail = (this.tail + 1) % this.maxSize;
                this.queue[this.tail] = value;
            }
            this.currentSize++;
            return true;
        }

        return false;
    }
    deQueue() {
        if (!this.isEmpty()) {
            delete this.queue[this.head];
            this.currentSize--;
            this.head = (this.head + 1) % this.maxSize;
            if (this.isEmpty()) {
                this.head = -1;
                this.tail = -1;
            }
            return true;
        }

        return false;
    }
    Front() {
        if (!this.isEmpty()) {
            return this.queue[this.head];
        }

        return -1;
    }
    Rear() {
        if (!this.isEmpty()) {
            return this.queue[this.tail];
        }

        return -1;
    }
}

const q = new MyCircularQueue(2);
console.log(q.enQueue(1));
console.log(q.enQueue(2));
console.log(q.deQueue());
console.log(q.head, q.tail, q.queue);
console.log(q.enQueue(3));
console.log(q.deQueue());
console.log(q.enQueue(3));
console.log(q.deQueue());
console.log(q.enQueue(3));
console.log(q.deQueue());
console.log(q.Front());
