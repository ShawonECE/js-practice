const isBalanced = (root) => {
    let isBalanced = true;

    const helper = (current = root) => {
        if (!current) {
            return 0;
        }

        const leftDepth = helper(current.left);
        const rightDepth = helper(current.right);

        if (Math.abs(leftDepth - rightDepth) > 1) {
            isBalanced = false;
        }

        return Math.max(leftDepth, rightDepth) + 1;
    };

    helper();

    return isBalanced;
};