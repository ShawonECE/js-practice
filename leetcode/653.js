const findTarget = (root, k) => {
    const values = new Set();

    const finder = (current = root) => {
        if (!current) {
            return false;
        }

        let has = values.has(k - current.val);
        values.add(current.val);

        return has || finder(current.left) || finder(current.right);
    };

    return finder();
};