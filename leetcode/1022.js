const sumRootToLeaf = (root) => {
    const binaries = [];
    let sum = 0;

    const finder = (current, bin) => {
        if (!current) {
            return;
        }

        let newBin = bin ? bin + current.val.toString() : current.val.toString();

        if (!current.left && !current.right) {
            binaries.push(newBin);
        }

        finder(current.left, newBin);
        finder(current.right, newBin);
    };

    finder(root);
    for (const bin of binaries) {
        sum = sum + parseInt(bin, 2);
    }

    return sum;
};