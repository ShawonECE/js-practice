class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const increasingBST = (root) => {
    const values = [];

    const inorder = (currentRoot = root) => {
        if (!currentRoot) return;

        inorder(currentRoot.left);
        values.push(currentRoot.val);
        inorder(currentRoot.right);
    };

    inorder();

    if (values.length) {
        const newRoot = new Node(values[0]);
        let current = newRoot;
        for (let i = 1; i < values.length; i++) {
            const newNode = new Node(values[i]);
            current.right = newNode;
            current = newNode;
        }
        return newRoot;
    } else {
        return null;
    }
};