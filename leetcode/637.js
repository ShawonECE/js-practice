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

const averageOfLevels = (root) => {
    if (!root) {
        return [];
    }

    const queue = new MyQueue();
    const result = [];

    queue.enqueue({node: root, level: 1});

    while(!queue.isEmpty) {
        const current = queue.dequeue();

        if (current.node.left) {
            queue.enqueue({node: current.node.left, level: current.level + 1});
        }

        if (current.node.right) {
            queue.enqueue({node: current.node.right, level: current.level + 1});
        }

        if (result[current.level - 1]) {
            result[current.level - 1].push(current.node.val);
        } else {
            if (result.length) {
                const entries = result.pop();
                const sum = entries.reduce((a, b) => a + b, 0);
                result.push(sum / entries.length);
            }
            result.push([current.node.val]);
        }
    }

    const entries = result.pop();
    const sum = entries.reduce((a, b) => a + b, 0);
    result.push(sum / entries.length);

    return result;
};