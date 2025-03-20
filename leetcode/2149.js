const rearrangeArray = (nums) => {
    const ans = [];
    let pos = 0;
    let neg = 1;

    for (const num of nums) {
        if (num > 0) {
            ans[pos] = num;
            pos += 2;
        } else {
            ans[neg] = num;
            neg += 2;
        }
    }

    return ans;
};