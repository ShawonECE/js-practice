const minDiffInBST = (root) => {
    let minDifference = Infinity;
    let lastVal;

    const finder = (current = root) => {
        if (!current) {
            return;
        }

        finder(current.left);
        if (lastVal || lastVal === 0) {
            minDifference = Math.min(minDifference, current.val - lastVal);
        }
        lastVal = current.val;
        finder(current.right);
    };

    finder();
    return minDifference;
};