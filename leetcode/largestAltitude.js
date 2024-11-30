const largestAltitude = (gain) => {
    const altitudes = [0];
    let sum = 0;

    for (const num of gain) {
        sum += num;
        altitudes.push(sum);
    }

    return Math.max(...altitudes);
};