const merge = (intervals) => {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    const ans = [];
    ans.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const previous = ans[ans.length - 1];

        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            ans.push(current);
        }
    }

    return ans;
};