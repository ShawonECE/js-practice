const findJudge = (n, trust) => {
    const trusted = Array(n + 1).fill(0);
    const trustee = Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trusted[b]++;
        trustee[a]++;
    }

    for (let i = 1; i < n + 1; i++) {
        if (trusted[i] === n - 1 && trustee[i] === 0) {
            return i;
        }
    }

    return -1;

};

const trust = [[1,2]];
const n = 2;
console.log(findJudge(n, trust));