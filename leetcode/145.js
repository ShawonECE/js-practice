const postorderTraversal = (root) => {
    const values = [];

    const postorder = (currentRoot = root) => {
        if (!currentRoot) {
            return;
        }

        postorder(currentRoot.left);
        postorder(currentRoot.right);
        values.push(currentRoot.val);
    };

    postorder();

    return values;
};