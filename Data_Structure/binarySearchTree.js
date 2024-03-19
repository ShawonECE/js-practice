class Queue {
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

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insertChild(currentRoot, node) {
        if (node.value < currentRoot.value) {
            if (!currentRoot.left) {
                currentRoot.left = node;
            } else {
                this.insertChild(currentRoot.left, node);
            }
        } else {
            if (!currentRoot.right) {
                currentRoot.right = node;
            } else {
                this.insertChild(currentRoot.right, node);
            }
        }
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertChild(this.root, newNode);
        }
    }

    search(value, currentRoot = this.root) {
        if (!currentRoot) {
            return null;
        }

        if (currentRoot.value === value) {
            return currentRoot;
        } else {
            if (value < currentRoot.value) {
                return this.search(value, currentRoot.left);
            } else {
                return this.search(value, currentRoot.right);
            }
        }
    }

    preOrder(currentRoot = this.root) {
        if (currentRoot) {
            console.log(currentRoot.value);
            this.preOrder(currentRoot.left);
            this.preOrder(currentRoot.right);
        }
    }

    inOrder(currentRoot = this.root) {
        if (currentRoot) {
            this.inOrder(currentRoot.left);
            console.log(currentRoot.value);
            this.inOrder(currentRoot.right);
        }
    }

    postOrder(currentRoot = this.root) {
        if (currentRoot) {
            this.postOrder(currentRoot.left);
            this.postOrder(currentRoot.right);
            console.log(currentRoot.value);
        }
    }

    levelOrder() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }
        }
    }

    min(currentRoot = this.root) {
        if (!currentRoot.left) {
            return currentRoot;
        } else {
            return this.min(currentRoot.left);
        }
    }

    max(currentRoot = this.root) {
        if (!currentRoot.right) {
            return currentRoot;
        } else {
            return this.max(currentRoot.right);
        }
    }

    successor(currentRoot) {
        if (!currentRoot.right) {
            return null;
        } else {
            return this.min(currentRoot.right);
        }
    }

    parent(node, currentRoot = this.root) {
        if (node === this.root || !node || !currentRoot) {
            return null;
        }

        if (currentRoot.left === node || currentRoot.right === node) {
            return currentRoot;
        }

        if (node.value < currentRoot.value) {
            return this.parent(node, currentRoot.left);
        } else {
            return this.parent(node, currentRoot.right);
        }
    }

    delete(value) {
        let node = this.search(value);
        if (node) {
            let nodeSuccessor = this.successor(node);
            let successorParent = this.parent(nodeSuccessor);
            node.value = nodeSuccessor.value;
            successorParent.left = null;
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(6);
tree.insert(2);
tree.insert(10);
tree.insert(1);
tree.insert(5);
tree.insert(8);
tree.insert(11);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(13);
tree.insert(15);
tree.delete(10);
console.log(tree);