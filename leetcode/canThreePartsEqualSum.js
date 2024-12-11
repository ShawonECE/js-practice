const canThreePartsEqualSum = (arr) => {
    const length = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);

    let partitionSum;
    let currentSum = 0;
    let partitions = 0;

    if (sum % 3 === 0) {
        partitionSum = sum / 3;
    } else {
        return false;
    }

    for (let i = 0; i < length; i++) {
        if (currentSum + arr[i] === partitionSum) {
            currentSum = 0;
            partitions++;
        } else {
            currentSum += arr[i];
        }
    }

    return partitions >= 3;
};

const arr = [3,3,6,5,-2,2,5,1,-9,4];
console.log(canThreePartsEqualSum(arr));