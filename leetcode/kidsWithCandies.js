const kidsWithCandies = (candies, extraCandies) => {
    const result = [];
    const max = Math.max(...candies);

    for (const num of candies) {
        if (num + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};

const candies = [2,3,5,1,3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));