const checkIfExist = (arr) => {
    const set = new Set(arr);
    let zeros = 0;

    set.delete(0);
    
    for (const num of arr) {
        if (set.has(num * 2) || set.has(num / 2)) {
            return true;
        }

        if (num === 0) zeros++;
        if (zeros > 1) return true;
    }

    return false;
};

const arr = [0, 0];
console.log(checkIfExist(arr));