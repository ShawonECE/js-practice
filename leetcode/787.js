class MyQueue {
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

const findCheapestPrice = (n, flights, src, dst, k) => {
    const adjList = Array(n).fill();
    const queue = new MyQueue();
    const distance = Array(n).fill(Infinity);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    for (const [from, to, dist] of flights) {
        adjList[from].push([to, dist]);
    }

    queue.push([src, 0, 0]);
    distance[src] = 0;

    while(!queue.isEmpty) {
        const [parentNode, parentDist, stops] = queue.pop();

        if (stops <= k) {
            for (const [childNode, childDist] of adjList[parentNode]) {
                if (parentDist + childDist < distance[childNode]) {
                    distance[childNode] = parentDist + childDist;
                    queue.push([childNode, parentDist + childDist, stops + 1]);
                }
            }
        }
    }

    if (distance[dst] === Infinity) {
        return -1;
    }

    return distance[dst];
};

const n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));