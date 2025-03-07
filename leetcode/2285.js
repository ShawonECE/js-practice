const maximumImportance = (n, roads) => {
    const connectedWith = Array(n);
    const importance = Array(n);
    let maxTotalImportance = 0;

    for (let i = 0; i < n; i++) {
        connectedWith[i] = [i, 0];
    }

    for (const [ a, b ] of roads) {
        connectedWith[a][1]++;
        connectedWith[b][1]++;
    }

    connectedWith.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < n; i++) {
        const node = connectedWith[i][0];
        const currentImportance = i + 1;

        importance[node] = currentImportance;
    }

    for (const [ a, b ] of roads) {
        maxTotalImportance += importance[a];
        maxTotalImportance += importance[b];
    }

    return maxTotalImportance;
};

const n = 5, roads = [[0,3],[2,4],[1,3]];
console.log(maximumImportance(n, roads));