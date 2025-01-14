const evaluateTree = (root) => {

    const evaluate = (currentRoot = root) => {
        if (currentRoot.left) {
            evaluate(currentRoot.left);
            evaluate(currentRoot.right);

            if (currentRoot.val === 2) {
                currentRoot.val = currentRoot.left.val | currentRoot.right.val;
            } else if (currentRoot.val === 3) {
                currentRoot.val = currentRoot.left.val & currentRoot.right.val;
            }

            currentRoot.left = null;
            currentRoot.right = null;
        }
    };

    evaluate();
    return root.val === 1;
};