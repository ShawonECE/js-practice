class NestedIterator {
    constructor(nestedList) {
        this.stack = [];
        this.dfs(nestedList);
        this.stack.reverse();
    }

    next() {
        return this.stack.pop();
    }

    hasNext() {
        return this.stack.length > 0;
    }

    dfs(nestedList) {
        for (const n of nestedList) {
            if (n.isInteger()) {
                this.stack.push(n.getInteger());
            } else {
                this.dfs(n.getList());
            }
        }
    }
}