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

const highestPeak = (isWater) => {
    const rows = isWater.length;
    const cols = isWater[0].length;
    const queue = new MyQueue();
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (isWater[i][j] === 1) {
                isWater[i][j] = 0;
                queue.push([i, j, 0]);
            } else {
                isWater[i][j] = Infinity;
            }
        }
    }

    while(!queue.isEmpty) {
        const [row, col, level] = queue.pop();

        for (const move of moves) {
            const childRow = row + move[0];
            const childCol = col + move[1];

            if(childRow >= 0 && childRow < rows && childCol >= 0 && childCol < cols && isWater[childRow][childCol] !== 0 && level + 1 < isWater[childRow][childCol]) {
                isWater[childRow][childCol] = level + 1;
                queue.push([childRow, childCol, level + 1]);
            }
        }
    }

    return isWater;
};