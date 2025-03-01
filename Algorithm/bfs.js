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
    push(item) {
        this.queue[this.tail] = item;
        this.tail++;
    }
    pop() {
        if (!this.isEmpty) {
            let poppedItem = this.queue[this.head];
            delete this.queue[this.head];
            this.head++;
            if (this.isEmpty) {
                this.head = 0;
                this.tail = 0;
            }
            return poppedItem;
        }
        return null;
    }
}

const bfs = (adjList, src) => {
    const n = adjList.length;
    const visited = Array(n).fill(false);
    const queue = new Queue();

    queue.push(src);
    visited[src] = true;

    while(!queue.isEmpty) {
        const parent = queue.pop();
        
        console.log(parent); // any operation

        for (const child of adjList[parent]) {
            if (!visited[child]) {
                queue.push(child);
                visited[src] = true;
            }
        }
    }
};