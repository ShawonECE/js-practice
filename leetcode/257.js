const binaryTreePaths = (root) => {
    let res = [];

    const helper = (str, current = root) => {
        if(!current) {
            return;
        }

        if (str === "") {
            str += current.val.toString();
        } else {
            str = str + "->" + current.val.toString();
        }

        if (!current.left && !current.right) {
            res.push(str);
        }

        helper(str, current.left);
        helper(str, current.right);
    };

    helper("");
    return res;
};