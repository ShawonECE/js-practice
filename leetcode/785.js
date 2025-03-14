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

const isBipartite = (graph) => {
    const n = graph.length;
    const color = Array(n).fill(-1);
    let bipartite = true;

    const bfs = (src) => {
        const queue = new MyQueue();
    
        queue.push(src);
        color[src] = 0;
    
        while(!queue.isEmpty) {
            const parent = queue.pop();
            const parentColor = color[parent];
    
            for (const child of graph[parent]) {
                if (color[child] === -1) {
                    queue.push(child);
                    color[child] = parentColor === 1 ? 0 : 1;
                } else {
                    if (color[child] === parentColor) {
                        bipartite = false;
                        break;
                    }
                }
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if(!bipartite) {
            break;
        }
        
        if (color[i] === -1) {
            bfs(i);
        }
    }

    return bipartite;
};

const graph = [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]];
console.log(isBipartite(graph));