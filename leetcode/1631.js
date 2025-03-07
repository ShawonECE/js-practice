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
        return a[0] < b[0];
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

const minimumEffortPath = (heights) => {
    const rows = heights.length;
    const cols = heights[0].length;
    const distance = [];
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < rows; i++) {
        distance[i] = [];
        for (let j = 0; j < cols; j++) {
            distance[i][j] = Infinity;
        }
    }

    const dijkstra = (si, sj) => {
        const priorityQueue = new MinHeap();
        priorityQueue.push([0, si, sj]);
        distance[si][sj] = 0;
    
        while(!priorityQueue.isEmpty) {
            const [effort, parentRow, parentCol] = priorityQueue.pop();

            for (const move of moves) {
                const childRow = parentRow + move[0];
                const childCol = parentCol + move[1];

                if (childRow >= 0 && childRow < rows && childCol >= 0 && childCol < cols) {
                    const currentEffort = Math.max(Math.abs(heights[parentRow][parentCol] - heights[childRow][childCol]), effort);

                    if (currentEffort < distance[childRow][childCol]) {
                        distance[childRow][childCol] = currentEffort;
                        priorityQueue.push([currentEffort, childRow, childCol]);
                    }
                }
            }
        }
    };

    dijkstra(0, 0);
    return distance[rows - 1][cols - 1];
};

const heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]];
console.log(minimumEffortPath(heights));