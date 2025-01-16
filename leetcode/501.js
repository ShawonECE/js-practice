const findMode = (root) => {
    let maxOccurrences = 0;
    const map = new Map();
    const res = [];

    const dfs = (current = root) => {
        if(!current) {
            return;
        }

        if (map.has(current.val)) {
            map.set(current.val, map.get(current.val) + 1);
        } else {
            map.set(current.val, 1);
        }

        maxOccurrences = Math.max(maxOccurrences, map.get(current.val));

        dfs(current.left);
        dfs(current.right);
    };

    dfs();

    map.forEach((value, key) => {
        if (value === maxOccurrences) {
            res.push(key);
        }
    });

    return res;
};