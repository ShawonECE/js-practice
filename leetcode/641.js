class MyCircularDeque {
    constructor(k) {
        this.deque = {};
        this.size = 0;
        this.maxSize = k;
        this.head = 0;
        this.tail = 1;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    insertFront(value) {
        if (this.isFull()) {
            return false;
        } else {
            this.deque[this.head] = value;
            this.head--;
            this.size++;
            return true;
        }
    }

    insertLast(value) {
        if (this.isFull()) {
            return false;
        } else {
            this.deque[this.tail] = value;
            this.tail++;
            this.size++;
            return true;
        }
    }

    deleteFront() {
        if (this.isEmpty()) {
            return false;
        } else {
            delete this.deque[this.head + 1];
            this.head++;
            this.size--;
            if (this.isEmpty()) {
                this.head = 0;
                this.tail = 1;
            }
            return true;
        }
    }

    deleteLast() {
        if (this.isEmpty()) {
            return false;
        } else {
            delete this.deque[this.tail - 1];
            this.tail--;
            this.size--;
            if (this.isEmpty()) {
                this.head = 0;
                this.tail = 1;
            }
            return true;
        }
    }

    getFront() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.deque[this.head + 1];
        }
    }

    getRear() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.deque[this.tail - 1];
        }
    }
}