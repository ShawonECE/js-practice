const dfs = (adjList, src, visited) => {
    console.log(src); // any operation
    visited[src] = true;

    for (const child of adjList[src]) {
        if (!visited[child]) {
            dfs(adjList, child, visited);
        }
    }
};