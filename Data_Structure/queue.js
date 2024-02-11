// With dequeue time complexity O(n)
// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(item) {
//         this.queue.push(item);
//     }

//     dequeue() {
//         if (this.queue.length) {
//             return this.queue.shift();
//         }
//     }
// }

// with time complexity O(1)
class Queue {
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

const list = new Queue();
list.enqueue('Shoaib');
list.enqueue('Shawon');
list.enqueue('Nipun');
list.enqueue('Abdullah');

console.log(list.queue);
console.log(list.size);
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.size);
console.log(list.isEmpty);
console.log(list);
