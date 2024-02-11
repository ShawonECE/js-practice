class CircularQueue {
    constructor(capacity) {
        this.queue = {};
        this.dataSize = capacity + 1; // 1 space is for tail pointer
        this.currentSize = 0;
        this.head = 0;
        this.tail = 0;
    }

    get isEmpty() {
        return this.head === this.tail;
    }
    get isFull() {
        return this.currentSize === this.dataSize - 1;
    }
    enqueue(item) {
        if (!this.isFull) {
            this.queue[this.tail] = item;
            this.currentSize++;
            this.tail = (this.tail + 1) % this.dataSize;
        } else {
            console.log('Size exceeded');
        }
    }
    dequeue() {
        if (!this.isEmpty) {
            let dequeueItem = this.queue[this.head];
            delete this.queue[this.head];
            this.currentSize--;
            this.head = (this.head + 1) % this.dataSize;
            if (this.isEmpty) {
                this.head = 0;
                this.tail = 0;
            }
            return dequeueItem;
        }
        return null;
    }
}

const list = new CircularQueue(5);
list.enqueue('Shoaib');
list.enqueue('Shawon');
list.enqueue('Nipun');
list.enqueue('Abdullah');
list.enqueue('Java');

console.log(list.queue);
console.log(list.head, list.tail);
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.head, list.tail);

list.enqueue('JavaScript');

console.log(list.queue);
console.log(list.head, list.tail);

list.enqueue('Python');

console.log(list.queue);
console.log(list.head, list.tail);
console.log(list.dataSize);
console.log(list.currentSize);
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.queue);
console.log(list.head, list.tail);
console.log(list.currentSize);
console.log(list.isEmpty);
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.queue);
console.log(list.head, list.tail);
console.log(list.currentSize);
console.log(list.isEmpty);