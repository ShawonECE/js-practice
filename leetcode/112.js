const hasPathSum = (root, targetSum, sum = 0) => {
    if(!root) {
        return false;
    }

    sum += root.val;

    if(!root.left && !root.right && sum === targetSum) {
        return true;
    }

    return hasPathSum(root.left, targetSum, sum) || hasPathSum(root.right, targetSum, sum);
};