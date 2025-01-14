class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

const arrayToBinaryTree = (arr) => {
    const queue = [];
    let root = null;
    if (arr.length && arr[0] !== null) {
        root = new Node(arr.shift());
        queue.push(root);
    } else {
        return root;
    }

    while(queue.length) {
        const current = queue.shift();

        if (arr.length && arr[0] !== null) {
            const newNode = new Node(arr[0]);
            current.left = newNode;
            queue.push(newNode);
        }

        if (arr.length && arr[1] !== null) {
            const newNode = new Node(arr[1]);
            current.right = newNode;
            queue.push(newNode);
        }

        arr.shift();
        arr.shift();
    }

    return root;
};

const arr = [1,7,9,2,6,null,9,null,null,5,11,5,null];
console.log(arrayToBinaryTree(arr));