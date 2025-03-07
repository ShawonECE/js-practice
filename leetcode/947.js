// dfs
// const removeStones = (stones) => {
//     let maxRow = -Infinity;
//     let maxCol = -Infinity;
//     let components = 0;

//     for (const [x, y] of stones) {
//         maxRow = Math.max(x, maxRow);
//         maxCol = Math.max(y, maxCol);
//     }

//     const grid = Array(maxRow);
//     const visited = Array(maxRow);

//     for (let i = 0; i <= maxRow; i++) {
//         visited[i] = [];
//         grid[i] = [];
//         for (let j = 0; j <= maxCol; j++) {
//             visited[i][j] = false;
//             grid[i][j] = 0;
//         }
//     }

//     for (const [x, y] of stones) {
//         grid[x][y] = 1;
//     }

//     const dfs = (row, col) => {
//         visited[row][col] = true;

//         for (let i = 0; i <= maxCol; i++) {
//             if (grid[row][i] === 1 && !visited[row][i]) {
//                 dfs(row, i);
//             }
//         }
    
//         for (let i = 0; i <= maxRow; i++) {
//             if (grid[i][col] === 1 && !visited[i][col]) {
//                 dfs(i, col);
//             }
//         }
//     };

//     for (let i = 0; i <= maxRow; i++) {
//         for (let j = 0; j <= maxCol; j++) {
//             if(!visited[i][j] && grid[i][j] === 1) {
//                 dfs(i, j);
//                 components++;
//             }
//         }
//     }

//     return stones.length - components;
// };

// union-find
const removeStones = (stones) => {
    let maxRow = -Infinity;
    let maxCol = -Infinity;

    for (const [x, y] of stones) {
        maxRow = Math.max(x, maxRow);
        maxCol = Math.max(y, maxCol);
    }

    const n = maxCol + maxRow + 2;
    const par = Array.from({ length: n }, (_, i) => i);
    const size = Array(n).fill(1);
    const components = new Set();

    const find = (node) => {
        if(par[node] === node) {
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

    for (const [x, y] of stones) {
        union(x, y + maxRow + 1);
    }

    for (const [x, y] of stones) {
        components.add(find(par[x]));
        components.add(find(par[y + maxRow + 1]));
    }

    return stones.length - components.size;
};

const stones = [[0,0],[0,2],[1,1],[2,0],[2,2]];
console.log(removeStones(stones));