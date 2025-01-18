const bstToGst = (root) => {
    let sum = 0;

    const accumulator = (current = root) => {
        if (!current) {
            return;
        }

        accumulator(current.right);
        current.val += sum;
        sum = current.val;
        accumulator(current.left);
    };

    accumulator();

    return root;
};