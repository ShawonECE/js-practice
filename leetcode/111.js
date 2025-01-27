// dfs
// const minDepth = (root) => {
//     if (!root) {
//         return 1;
//     }
//     let res = Infinity;

//     const finder = (current = root, depth = 1) => {
//         if (!current) {
//             return;
//         }

//         if (!current.left && !current.right) {
//             res = Math.min(res, depth);
//         }

//         finder(current.left, depth + 1);
//         finder(current.right, depth + 1);
//     };

//     finder();

//     return res;
// };

// bfs
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

const minDepth = (root) => {
    if (!root) {
        return 0;
    }
    const queue = new MyQueue();
    queue.enqueue({node: root, depth: 1});

    while (!queue.isEmpty) {
        const currentNode = queue.dequeue();
        if (!currentNode.node.left && !currentNode.node.right) {
            return currentNode.depth;
        }

        if (currentNode.node.left) {
            queue.enqueue({node: currentNode.node.left, depth: currentNode.depth + 1});
        }

        if (currentNode.node.right) {
            queue.enqueue({node: currentNode.node.right, depth: currentNode.depth + 1});
        }
    }

};