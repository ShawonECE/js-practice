const allPathsSourceTarget = (graph) => {
    const target = graph.length - 1;
    const paths = [];

    const dfs = (src, currentPath) => {
        currentPath.push(src);

        if (src === target) {
            paths.push(currentPath);
        } else {
            for (const child of graph[src]) {
                dfs(child, [...currentPath]);
            }
        }
    };

    dfs(0, []);
    return paths;
};

const graph = [[4,3,1],[3,2,4],[3],[4],[]];
console.log(allPathsSourceTarget(graph));