class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const list = new Queue();
list.enqueue('Shoaib');
list.enqueue('Shawon');
list.enqueue('Nipun');
list.enqueue('Abdullah');

const dequeuedOne = list.dequeue();

console.log(dequeuedOne);
console.log(list.queue);
