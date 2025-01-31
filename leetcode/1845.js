class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    get size() {
        return this.heap.length;
    }

    get isEmpty() {
        return this.size === 0;
    }

    get peek() {
        if (!this.isEmpty) {
            return this.heap[0];
        }
    }

    compare(a, b) {
        return a < b;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);

        while (index > 0 && this.compare(this.heap[index], this.heap[parentIndex])) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        let largest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[largest])) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[largest])) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }
}

class SeatManager {
    constructor(n) {
        this.n = n;
        this.available = 1;
        this.unreserved = new MinHeap();
        this.unreservedSet = new Set();
    }

    reserve() {
        if (this.unreserved.size) {
            const smallest = this.unreserved.pop();
            this.unreservedSet.delete(smallest);
            return smallest;
        }

        this.available++;
        return this.available - 1;
    }

    unreserve(num) {
        if(num < this.available && !this.unreservedSet.has(num)) {
            this.unreserved.push(num);
            this.unreservedSet.add(num);
        }
    }
}

const manager = new SeatManager(5);
console.log(manager.reserve());
console.log(manager.reserve());
// console.log('available', manager.available);
manager.unreserve(2);
// console.log(manager.unreserved.heap);
// console.log(manager.unreservedSet);
console.log(manager.reserve());
console.log(manager.reserve());
console.log(manager.reserve());
console.log(manager.reserve());
manager.unreserve(5);