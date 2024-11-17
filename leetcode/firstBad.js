const solution = (isBadVersion) => {
    
    return (n) => {
        let i = 1;
        let j = n;

        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (isBadVersion(mid)) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }

        return i;
    };
};