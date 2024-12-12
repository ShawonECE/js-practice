const countValidSelections = (nums) => {
    let currs = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currs.push(i);
        }
    }
    // console.log(currs);
    let valid = 0;
    if (!currs.length) {
        return valid;
    }

    for (let num of currs) {
        let curr = num;
        let direction = 'r';
        let newNums = [...nums];

        while (curr < newNums.length && curr >= 0) {
            if (newNums[curr] === 0) {
                if (direction === 'r') {
                    curr++;
                } else {
                    curr--;
                }
            } else {
                newNums[curr]--;
                if (direction === 'r') {
                    direction = 'l';
                } else {
                    direction = 'r';
                }
    
                if (direction === 'r') {
                    curr++;
                } else {
                    curr--;
                }
            }
        }

        if (new Set(newNums).size === 1 && new Set(newNums).has(0)) {
            valid++;
        }

        direction = 'l';
        newNums = [...nums];
        curr = num;

        while (curr < newNums.length && curr >= 0) {
            if (newNums[curr] === 0) {
                if (direction === 'r') {
                    curr++;
                } else {
                    curr--;
                }
            } else {
                newNums[curr]--;
                if (direction === 'r') {
                    direction = 'l';
                } else {
                    direction = 'r';
                }
    
                if (direction === 'r') {
                    curr++;
                } else {
                    curr--;
                }
            }
        }

        if (new Set(newNums).size === 1 && new Set(newNums).has(0)) {
            valid++;
        }
    }

    return valid;
};

const nums = [2,3,4,0,4,1,0];
console.log(countValidSelections(nums));