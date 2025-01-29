class Char {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp(this.size - 1);
    }

    pop() {
        if (this.size === 0) return;
        if (this.size === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index].freq > this.heap[parent].freq) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.size && this.heap[left].freq > this.heap[largest].freq) {
            largest = left;
        }
        if (right < this.size && this.heap[right].freq > this.heap[largest].freq) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
}

const frequencySort = (s) => {
    const freqMap = new Map();

    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const heap = new MaxHeap();
    for (const [char, freq] of freqMap) {
        heap.push(new Char(char, freq));
    }

    let sorted = "";
    while(heap.size) {
        const current = heap.pop();

        for (let i = 0; i < current.freq; i++) {
            sorted += current.char;
        }
    }

    return sorted;
};