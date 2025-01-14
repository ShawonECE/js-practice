const preorderTraversal = (root) => {
    const values = [];

    const preorder = (currentRoot = root) => {
        if (!currentRoot) {
            return;
        }

        values.push(currentRoot.val);
        preorder(currentRoot.left);
        preorder(currentRoot.right);
    };

    preorder();

    return values;
};