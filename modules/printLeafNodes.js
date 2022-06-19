export function printLeafNodes(node) {
    //leaf nodes have NO node at its right nor left
    if (node.right == null && node.left == null) {
        console.log(node);
        return;
    }

    if (node.right != null) {
        printLeafNodes(node.right);
    }
    if  (node.left != null){
        printLeafNodes(node.left);
    }




}
