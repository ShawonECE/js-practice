// class MyQueue {
//     constructor() {
//         this.queue = {};
//         this.head = 0;
//         this.tail = 0;
//     }

//     get size() {
//         return this.tail - this.head;
//     }
//     get isEmpty() {
//         return this.head === this.tail;
//     }
//     enqueue(item) {
//         this.queue[this.tail] = item;
//         this.tail++;
//     }
//     dequeue() {
//         if (!this.isEmpty) {
//             let dequeueItem = this.queue[this.head];
//             delete this.queue[this.head];
//             this.head++;
//             if (this.isEmpty) {
//                 this.head = 0;
//                 this.tail = 0;
//             }
//             return dequeueItem;
//         }
//         return null;
//     }
// }

// // leftview using bfs
// const findBottomLeftValue = (root) => {
//     const queue = new MyQueue();
//     const result = [root.val];
//     let currentLevel = 1;

//     queue.enqueue({node: root, level: 1});

//     while(!queue.isEmpty) {
//         const current = queue.dequeue();

//         if (current.node.left) {
//             queue.enqueue({node: current.node.left, level: current.level + 1});
//         }

//         if (current.node.right) {
//             queue.enqueue({node: current.node.right, level: current.level + 1});
//         }

//         if(current.level > currentLevel) {
//             result.push(current.node.val);
//             currentLevel = current.level;
//         }
//     }

//     return result[result.length - 1];
// };


// using dfs
const findBottomLeftValue = (root) => {
    let leftMost = root.val;
    let currentLevel = 1;

    const dfs = (current = root, level = 1) => {
        if(!current) {
            return;
        }

        if(level > currentLevel) {
            leftMost = current.val;
            currentLevel = level;
        }

        dfs(current.left, level + 1);
        dfs(current.right, level + 1);
    };

    dfs();
    return leftMost;
};