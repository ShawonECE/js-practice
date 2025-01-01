const maxDepthAfterSplit = (seq) => {
    const result = [];
    const A = [];
    const B = [];

    for (const bracket of seq) {
        if (bracket === '(') {
            if (A.length <= B.length) {
                A.push('(');
                result.push(0);
            } else {
                B.push('(');
                result.push(1);
            }
        } else {
            if (A.length >= B.length) {
                A.pop();
                result.push(0);
            } else {
                B.pop();
                result.push(1);
            }
        }
    }

    return result;
};