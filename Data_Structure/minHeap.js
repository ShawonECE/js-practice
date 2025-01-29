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
        let smallest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[smallest])) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[smallest])) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(30);

console.log(minHeap.peek()); // Output: 5
console.log(minHeap.extractMin()); // Output: 5
console.log(minHeap.peek()); // Output: 10
console.log(minHeap.size()); // Output: 3
console.log(minHeap.isEmpty()); // Output: false
  