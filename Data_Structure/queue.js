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

    enqueue(item) {
        this.queue[this.tail] = item;
        this.tail++;
    }
    dequeue() {
        if (this.tail > this.head) {
            let dequeueItem = this.queue[this.head];
            delete this.queue[this.head];
            this.head++;
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

const dequeuedOne = list.dequeue();

console.log(dequeuedOne);
console.log(list);
