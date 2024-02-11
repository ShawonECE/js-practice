// using array
class Stack {
    constructor() {
        this.stack = [];
        this.top = - 1;
    }

    add(item) {
        this.stack.push(item);
        this.top += 1;
    }

    remove() {
        if (this.stack.length) {
            this.top -= 1;
            return this.stack.pop();
        }
    }
}

// using object
// class Stack {
//     constructor() {
//         this.stack = {};
//         this.top = -1;
//     }

//     add(item) {
//         this.top++;
//         this.stack[this.top] = item;
//     }

//     remove() {
//         if (this.top >= 0) {
//             let deletedItem = this.stack[this.top];
//             delete this.stack[this.top];
//             this.top--;
//             return deletedItem;
//         }
//     }
// }

const list = new Stack();
list.add('Shoaib');
list.add('Shawon');
list.add('Nipun');
list.add('Abdullah');

const removedOne = list.remove();

console.log(removedOne);
console.log(list);
console.log(list.stack[1]);
