const findChampion = (n, edges) => {
    const weakerTeams = new Set();

    for (const edge of edges) {
        weakerTeams.add(edge[1]);
    }

    if (n - weakerTeams.size !== 1) {
        return -1;
    }

    for (let i = 0; i < n; i++) {
        if (!weakerTeams.has(i)) {
            return i;
        }
    }
};