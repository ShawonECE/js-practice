const isPerfectSquare = (num) => {
    let i = 1;
    let j = num;
    let found = false;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (mid**2 === num) {
            found = true;
            break;
        } else if (mid**2 < num) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return found;
};

const num = 14;
console.log(isPerfectSquare(num));