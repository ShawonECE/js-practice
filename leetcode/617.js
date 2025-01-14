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

// using loop
// const mergeTrees = (root1, root2) => {
//     if (!root1) return root2;
//     if (!root2) return root1;

//     root1.val += root2.val;

//     const queue1 = new MyQueue();
//     const queue2 = new MyQueue();

//     queue1.enqueue(root1);
//     queue2.enqueue(root2);

//     while(!queue2.isEmpty) {
//         const current1 = queue1.dequeue();
//         const current2 = queue2.dequeue();

//         if (current1.left) {
//             if (current2.left) {
//                 current1.left.val += current2.left.val;

//                 queue1.enqueue(current1.left);
//                 queue2.enqueue(current2.left);
//             }
//         } else {
//             current1.left = current2.left;
//         }

//         if (current1.right) {
//             if (current2.right) {
//                 current1.right.val += current2.right.val;

//                 queue1.enqueue(current1.right);
//                 queue2.enqueue(current2.right);
//             }
//         } else {
//             current1.right = current2.right;
//         }
//     }

//     return root1;
// };

// using recursion
const mergeTrees = (root1, root2) => {
    if (!root1) return root2;
    if (!root2) return root1;
    
    root1.val += root2.val;

    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};