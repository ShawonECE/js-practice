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

const shortestPathBinaryMatrix = (grid) => {
    if (grid[0][0] !== 0) {
        return -1;
    }
    const n = grid.length;
    // const visited = Array(n);
    const level = Array(n);
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    for (let i = 0; i < n; i++) {
        // visited[i] = Array(n);
        level[i] = Array(n);
        for (let j = 0; j < n; j++) {
            // visited[i][j] = false;
            level[i][j] = -1;
        }
    }

    const bfs = (srcRow, srcCol) => {
        const queue = new MyQueue();
    
        queue.push([srcRow, srcCol]);
        // visited[srcRow][srcCol] = true;
        level[srcRow][srcCol] = 1;
    
        while(!queue.isEmpty) {
            const [parentRow, parentCol] = queue.pop();
            const parentLevel = level[parentRow][parentCol];

            for (const move of moves) {
                const childRow = parentRow + move[0];
                const childCol = parentCol + move[1];

                if(childCol >= 0 && childRow >= 0 && childCol < n && childRow < n && grid[childRow][childCol] === 0 && level[childRow][childCol] === -1) {
                    level[childRow][childCol] = parentLevel + 1;
                    // visited[childRow][childCol] = true;
                    queue.push([childRow, childCol]);
                }
            }
        }
    };

    bfs(0, 0);

    return level[n - 1][n - 1];
};

const grid = [[1,0,0],[1,1,0],[1,1,0]];
console.log(shortestPathBinaryMatrix(grid));