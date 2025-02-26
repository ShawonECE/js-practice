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
        return a.distance < b.distance;
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

const networkDelayTime = (times, n, k) => {
    const adjList = Array(n + 1);
    const distances = Array(n + 1).fill(Infinity);
    let maxTime = -Infinity;

    for (let i = 1; i <= n; i++) {
        adjList[i] = [];
    }

    for (let i = 0; i < times.length; i++) {
        const [src, destination, distance] = times[i];
        adjList[src].push({ destination, distance });
    }

    const dijkstra = (src) => {
        const priorityQueue = new MinHeap();
        priorityQueue.push({ node: src, distance: 0 });
        distances[src] = 0;

        while(!priorityQueue.isEmpty) {
            const { node: parentNode, distance: parentDistance} = priorityQueue.pop();

            for (const { destination: childNode, distance: childDistance } of adjList[parentNode]) {
                if (parentDistance + childDistance < distances[childNode]) {
                    distances[childNode] = parentDistance + childDistance;
                    priorityQueue.push({ node: childNode, distance: distances[childNode] });
                }
            }
        }
    };

    dijkstra(k);

    for (let i = 1; i <= n; i++) {
        if (distances[i] === Infinity) {
            return -1;
        } else {
            maxTime = Math.max(distances[i], maxTime);
        }
    }

    return maxTime;
};

const times = [[1,2,1]], n = 2, k = 2;
console.log(networkDelayTime(times, n, k));