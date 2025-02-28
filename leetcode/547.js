const findCircleNum = (isConnected) => {
    const n = isConnected.length;
    const visited = Array(n).fill(false);
    let components = 0;
    const adjList = Array(n);

    for (let i = 0; i < n; i++) {
        if (!adjList[i]) {
            adjList[i] = [];
        }
        for (let j = 0; j < n; j++) {
            if (i !== j && isConnected[i][j] === 1) {
                adjList[i].push(j);
            }
        }
    }

    console.log(adjList);

    const dfs = (src) => {
        visited[src] = true;

        for (const child of adjList[src]) {
            if(!visited[child]) {
                dfs(child);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            components++;
        }
    }

    return components;
};

const isConnected = [[1,1,0],[1,1,0],[0,0,1]];
console.log(findCircleNum(isConnected));