class MyHashSet {
    constructor() {
        this.set = new Array(10**6).fill(0);
    }

    add(key) {
        this.set[key] = 1;
    }

    remove(key) {
        this.set[key] = 0;
    }

    contains(key) {
        return this.set[key] === 1;
    }
}