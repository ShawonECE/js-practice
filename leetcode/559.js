const maxDepth = (root) => {
    if (!root) {
        return 0;
    }

    let maxDepthValue = 0;
    for (const child of root.children) {
        maxDepthValue = Math.max(maxDepthValue, maxDepth(child));
    }

    return maxDepthValue + 1;
};