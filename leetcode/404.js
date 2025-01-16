const sumOfLeftLeaves = (root) => {
    let sum = 0;

    const helper = (current, left) => {
        if(!current) {
            return;
        }

        if (!current.left && !current.right && left) {
            sum += current.val;
        }

        helper(current.left, true);
        helper(current.right, false);
    }

    helper(root, false);
    return sum;
};