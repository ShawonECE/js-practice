const invertTree = (root) => {
    const invert = (current = root) => {
        if (!current) {
            return;
        }

        [current.left, current.right] = [current.right, current.left];
        invert(current.left);
        invert(current.right);
    };

    invert();
    return root;
};