const searchBST = (root, val) => {
    if (!root) {
        return null;
    }

    if (root.val === val) {
        return root;
    } else {
        if (val < root.val) {
            return searchBST(root.left);
        } else {
            return searchBST(root.right);
        }
    }
};