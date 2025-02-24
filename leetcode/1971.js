const validPath = (n, edges, source, destination) => {
    const adjList = Array(n);
    const visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    for (const [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    const dfs = (src) => {
        visited[src] = true;

        for (const child of adjList[src]) {
            if (!visited[child]) {
                dfs(child);
            }
        }
    };

    dfs(source);
    return visited[destination];
};

const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5;
console.log(validPath(n, edges, source, destination));