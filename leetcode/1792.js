class Heap {
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

    compare(a, b) {
        const gainA = (a[0] + 1) / (a[1] + 1) - a[0] / a[1];
        const gainB = (b[0] + 1) / (b[1] + 1) - b[0] / b[1];

        return gainA > gainB;
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.compare(this.heap[index], this.heap[parent])) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.size && this.compare(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }
        if (right < this.size && this.compare(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

const maxAverageRatio = (classes, extraStudents) => {
    const heap = new Heap();

    for (const cls of classes) {
        heap.push(cls);
    }

    while(extraStudents) {
        const current = heap.pop();

        current[0]++;
        current[1]++;
        extraStudents--;

        heap.push(current);
    }

    let sum = 0;
    for (const cls of classes) {
        sum += cls[0] / cls[1];
    }

    return sum / classes.length;
};

const classes = [[1,2],[3,5],[2,2]], extraStudents = 2;
console.log(maxAverageRatio(classes, extraStudents));