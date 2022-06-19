export class NodeT {

    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }

    get right() {
        return this._right;
    }
    set right(nodo) {
        this._right = nodo;
    }
    get left() {
        return this._left;
    }
    set left(nodo) {
        this._left = nodo;
    }

}


100, 108
export function inserValBiTree(head, value) {

    if (head == null) {
        let newLeafNode = new NodeT(value);
        return newLeafNode;
    }

    if (value > head.value) {
        head.right = inserValBiTree(head.right, value)
    }
    else {
        head.left = inserValBiTree(head.left, value);
    }


    //otherwise, return "itself" so the tree stays equal
    return head;

}


