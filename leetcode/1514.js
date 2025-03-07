class MaxHeap {
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
        return a[0] > b[0];
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

const maxProbability = (n, edges, succProb, start_node, end_node) => {
    const logProbabilities = Array(n).fill(-Infinity);
    const adjList = Array(n);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        const probability = succProb[i];
        const [src, dest] = edges[i];

        adjList[src].push([dest, probability]);
        adjList[dest].push([src, probability]);
    }

    const dijkstra = (src) => {
        const priorityQueue = new MaxHeap();
        priorityQueue.push([0, src]);
        logProbabilities[src] = 0;
    
        while(!priorityQueue.isEmpty) {
            const [logProbability, parent] = priorityQueue.pop();

            for (const [dest, probability] of adjList[parent]) {
                const currentLogProbability = logProbability + Math.log10(probability);

                if (currentLogProbability > logProbabilities[dest]) {
                    logProbabilities[dest] = currentLogProbability;
                    priorityQueue.push([currentLogProbability, dest]);
                }
            }
        }
    };

    dijkstra(start_node);

    if(logProbabilities[end_node] === -Infinity) {
        return 0;
    }

    return 10**logProbabilities[end_node];
};

const n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2;
console.log(maxProbability(n, edges, succProb, start, end));