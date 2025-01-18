const numTrees = (n) => {
    const uniqueTrees = [1, 1];

    for (let nodes = 2; nodes <= n; nodes++) {
        uniqueTrees[nodes] = 0;

        for (let root = 0; root < nodes; root++) {
            uniqueTrees[nodes] += uniqueTrees[root] * uniqueTrees[nodes - root - 1];
        }
    }

    return uniqueTrees[n];
};