const findRelativeRanks = (score) => {
    const length = score.length;
    const sortedScore = [...score];
    sortedScore.sort((a, b) => b - a);
    const scoreTable = new Map();
    const ranks = [];

    for (let i = 0; i < length; i++) {
        scoreTable.set(sortedScore[i], i + 1);
    }

    for (const num of score) {
        const rank = scoreTable.get(num);
        if (rank === 1) {
            ranks.push('Gold Medal');
        } else if (rank === 2) {
            ranks.push('Silver Medal');
        } else if (rank === 3) {
            ranks.push('Bronze Medal');
        } else {
            ranks.push(rank.toString());
        }
    }

    return ranks;
};

const score = [10,3,8,9,4];
console.log(findRelativeRanks(score));