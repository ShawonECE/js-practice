const minOperations = (boxes) => {
    const length = boxes.length;
    let sum = 0;
    let rightOnes = 0;
    let leftOnes = 0;

    for (let i = 0; i < length; i++) {
        if(boxes[i] === '1') {
            sum += i;
            rightOnes++;
        }
    }

    const result = [];
    let prefixSum = 0;

    for (let i = 0; i < length; i++) {
        result.push(sum + prefixSum);

        if (boxes[i] === '1') {
            leftOnes++;
            rightOnes--;
        }

        prefixSum += leftOnes;
        sum -= rightOnes;
    }

    return result;
};

const boxes = "001011";
console.log(minOperations(boxes));