const inorderTraversal = (root) => {
    const values = [];

    const inorder = (currentRoot = root) => {
        if (!currentRoot) {
            return;
        }

        inorder(currentRoot.left);
        values.push(currentRoot.val);
        inorder(currentRoot.right);
    };

    inorder();

    return values;
};