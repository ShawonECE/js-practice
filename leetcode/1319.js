const makeConnected = (n, connections) => {
    if (connections.length < n - 1) {
        return -1;
    }

    const par = Array(n).fill(-1);
    const size = Array(n).fill(1);
    let parents = new Set();

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

    for (const [ a, b ] of connections) {
        union(a, b);
    }

    for (let i = 0; i < n; i++) {
        parents.add(find(i));
    }

    return parents.size - 1;
};

const n = 6, connections = [[0,1],[0,2],[0,3],[1,2]];
console.log(makeConnected(n, connections));