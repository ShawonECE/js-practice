const find = (node, par) => {
    if(par[node] === -1) {
        return node;
    }
    const parent = find(par[node], par);
    par[node] = parent;
    return parent;
};

const union = (node1, node2, size, par) => {
    const parent1 = find(node1, par);
    const parent2 = find(node2, par);

    if (parent1 === parent2) {
        return; // cycle detected
    }

    if (size[parent1] > size[parent2]) {
        par[parent2] = parent1;
        size[parent1] += size[parent2];
    } else {
        par[parent1] = parent2;
        size[parent2] += size[parent1];
    }
};