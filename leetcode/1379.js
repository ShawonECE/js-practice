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

const getTargetCopy = (original, cloned, target) => {
    const queueOriginal = new MyQueue();
    const queueCloned = new MyQueue();

    queueOriginal.enqueue(original);
    queueCloned.enqueue(cloned);

    while (!queueOriginal.isEmpty) {
        const currentOriginal = queueOriginal.dequeue();
        const currentCloned = queueCloned.dequeue();

        if (currentOriginal === target) {
            return currentCloned;
        }

        if (currentOriginal.left) {
            queueOriginal.enqueue(currentOriginal.left);
            queueCloned.enqueue(currentCloned.left);
        }
        if (currentOriginal.right) {
            queueOriginal.enqueue(currentOriginal.right);
            queueCloned.enqueue(currentCloned.right);
        }
    }
};