const findSmallestSetOfVertices = (n, edges) => {
    const verticesWithIncomingEdges = new Set();
    const verticesWithoutIncomingEdges = [];

    for (const edge of edges) {
        verticesWithIncomingEdges.add(edge[1]);
    }

    for (let i = 0; i < n; i++) {
        if (!verticesWithIncomingEdges.has(i)) {
            verticesWithoutIncomingEdges.push(i);
        }
    }

    return verticesWithoutIncomingEdges;
};