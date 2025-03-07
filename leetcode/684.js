const findRedundantConnection = (edges) => {
    const toBeRemoved = [];
    const n = edges.length
    const par = Array(n + 1).fill(-1);
    const size = Array(n + 1).fill(1);

    const find = (node) => {
        if(par[node] === -1) {
            return node;
        }
        const parent = find(par[node]);
        par[node] = parent;
        return parent;
    };
    
    const union = (node1, node2) => {
        const parent1 = find(node1);
        const parent2 = find(node2);
    
        if (parent1 === parent2) {
            toBeRemoved[0] = node1;
            toBeRemoved[1] = node2;
            return;
        }
    
        if (size[parent1] > size[parent2]) {
            par[parent2] = parent1;
            size[parent1] += size[parent2];
        } else {
            par[parent1] = parent2;
            size[parent2] += size[parent1];
        }
    };

    for (const [ a, b ] of edges) {
        union(a, b);
    }

    return toBeRemoved;
};

const edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
console.log(findRedundantConnection(edges));