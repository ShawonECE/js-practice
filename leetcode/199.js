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
    get front() {
        return this.queue[this.head];
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

const rightSideView = (root) => {
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

        if(queue.isEmpty || queue.front.level > current.level) {
            result.push(current.node.val);
        }
    }

    return result;
};