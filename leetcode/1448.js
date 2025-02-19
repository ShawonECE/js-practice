const goodNodes = (root) => {
    let goods = 0;

    const dfs = (currentMax, node = root) => {
        if (!node) {
            return;
        }

        if (currentMax <= node.val) {
            goods++;
        }

        currentMax = Math.max(currentMax, node.val);

        dfs(currentMax, node.left);
        dfs(currentMax, node.right);
    };

    dfs(-Infinity);
    return goods;
};