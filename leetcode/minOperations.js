const minOperations = (logs) => {
    let count = 0;
    for (const log of logs) {
        if (log === "../") {
            if (count > 0) {
                count--;
            }
        } else if (log === "./") {
            continue;
        } else {
            count++;
        }
    }
    return count;
};

const logs = ["d1/","../","../","../"];
console.log(minOperations(logs));
