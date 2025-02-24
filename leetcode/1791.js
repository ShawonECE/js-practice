const findCenter = (edges) => {
    const edge1 = edges[0];
    const edge2 = edges[1];

    for (const node of edge1) {
        if (edge2.includes(node)) {
            return node;
        }
    }
};