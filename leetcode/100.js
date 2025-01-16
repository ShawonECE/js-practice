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

const values = (root) => {
    const queue = new MyQueue();
    const values = [];

    queue.enqueue(root);

    while(!queue.isEmpty) {
        const current = queue.dequeue();

        if (current) {
            values.push(current.val);

            queue.enqueue(current.left);
            queue.enqueue(current.right);
        } else {
            values.push(null);
        }
    }

    return values;
};

const isSameTree = (p, q) => {
    const values1 = values(p);
    const values2 = values(q);

    if (values1.length !== values2.length) {
        return false;
    }

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) {
            return false;
        }
    }

    return true;
};