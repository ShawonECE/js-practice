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
    enqueue(item) {
        this.queue[this.tail] = item;
        this.tail++;
    }
    dequeue() {
        if (!this.isEmpty) {
            let dequeueItem = this.queue[this.head];
            delete this.queue[this.head];
            this.head++;
            if (this.isEmpty) {
                this.head = 0;
                this.tail = 0;
            }
            return dequeueItem;
        }
        return null;
    }
}

const bfs = (src, adjList) => {
    const visited = new Set();
    const queue = new MyQueue();
    queue.enqueue(src);
    visited.add(src);

    while(!queue.isEmpty) {
        const current = queue.dequeue();

        for (const child of adjList[current]) {
            if (!visited.has(child)) {
                queue.enqueue(child);
                visited.add(child);
            }
        }
    }

    return visited;
};

const canVisitAllRooms = (rooms) => {
    const visited = bfs(0, rooms);
    return rooms.length === visited.size;
};

const rooms = [[7,16,8,19],[10],[9,11],[3,14,16,19],[8,10,19,1,7],[13,5,10,15,4],[6,13],[14,11,12,18],[3],[17,9],[1,2,6,9],[12,2],[4],[2,13,17],[17],[],[11,15],[3,5],[15,18,5],[7,18,1]];
console.log(canVisitAllRooms(rooms));