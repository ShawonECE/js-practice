class Stack {
    constructor() {
        this.stack = [];
    }

    add(item) {
        this.stack.push(item);
    }

    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const list = new Stack();
list.add('Shoaib');
list.add('Shawon');
list.add('Nipun');
list.add('Abdullah');

const removedOne = list.remove();

console.log(removedOne);
console.log(list);
