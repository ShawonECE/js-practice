const findTheWinner = (n, k) => {
    const arr = [];
    let i = 0;

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    while(i !== arr.length - 1) {
        for (let j = 1; j <= k - 1; j++) {
            arr.push(arr[i]);
            i++;
        }
        i++;
    }

    return arr[arr.length - 1];
};

const n = 6, k = 5;
console.log(findTheWinner(n, k));