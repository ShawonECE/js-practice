const rangeSumBST = (root, low, high) => {
    let sum = 0;

    const calculateSum = (currentRoot) => {
        if (!currentRoot) {
            return;
        }

        if (low <= currentRoot.val && currentRoot.val <= high) {
            sum += currentRoot.val;
        }

        if (low <= currentRoot.val) {
            calculateSum(currentRoot.left);
        }

        if (currentRoot.val <= high) {
            calculateSum(currentRoot.right);
        }
    };

    calculateSum(root);
    return sum;
};