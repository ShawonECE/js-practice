const minDeletionSize = (strs) => {
    const stringLength = strs[0].length;
    const arrayLength = strs.length;
    let deletionCount = 0;
    for (let i = 0; i < stringLength; i++) {
        for (let j = 1; j < arrayLength; j++) {
            const element = strs[j];
            if (strs[j].charCodeAt(i) < strs[j-1].charCodeAt(i)) {
                deletionCount += 1;
                break;
            }
        }
    }
    return deletionCount;
};

const strs = ["zyx","wvu","tsr"];
console.log(minDeletionSize(strs));