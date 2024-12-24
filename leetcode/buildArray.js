const buildArray = (target, n) => {
    const targetSet = new Set(target);
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push("Push");
        if (!targetSet.has(i)) {
            result.push("Pop");
        }

        if (i === target[target.length - 1]) {
            break;
        }
    }

    return result;
};