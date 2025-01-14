const checkTree = function(root) {
    if(root.val === root.left.val + root.right.val) {
        return true;
    } else {
        return false;
    }
};