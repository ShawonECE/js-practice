const diameterOfBinaryTree = (root) => {
    let max = -Infinity;
    const maxDepth = (current = root) => {
        if (!current) {
            return -1;
        }
    
        const leftDepth = maxDepth(current.left);
        const rightDepth = maxDepth(current.right);
        max = Math.max(max, leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    };

    maxDepth();
    return max;
};