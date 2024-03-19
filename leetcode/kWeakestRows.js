const sum = (array) => array.reduce((a, b) => a + b, 0);
const kWeakestRows = (mat, k) => {
    const memo = {};
    for (const row in mat) {
        memo[row] = sum(mat[row]);
    }
    const strengths = Object.values(memo);
    const rows = [];
    let i = 1;
    while(i <= k) {
        let min = Math.min(...strengths);
        let index = strengths.indexOf(min);
        strengths.splice(index, 1);
        for (const key in memo) {
            if (memo[key] === min) {
                rows.push(key);
                delete memo[key];
                break;
            }
        }
        i++;
    }
    return rows;
};

const mat = [[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]]; 
const k = 2;
console.log(kWeakestRows(mat, k));