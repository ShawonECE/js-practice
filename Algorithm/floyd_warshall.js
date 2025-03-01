const floydWarshall = (adjMat) => {
    const n = adjMat.length;

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if(adjMat[i][k] !== Infinity && adjMat[k][j] !== Infinity && adjMat[i][k] + adjMat[k][j] < adjMat[i][j]) {
                    adjMat[i][j] = adjMat[i][k] + adjMat[k][j];
                }
            }
        }
    }
};