export function reverseList(nodo) {

    if (nodo == null || nodo.next == null) {
        return null;
    }
    let reverseList
}


export class Nodo {

    constructor(num) {
        this.numero = num;
    }

    set next(nextNodo) {
        this._next = nextNodo;
    }
    get next() {
        return this._next;
    }


}

export function createListRec(nodesToCreate, nodeIndex = 0) {

    if (nodesToCreate == 0) {
        return null;
    }
    let nodo = new Nodo(String(nodeIndex));
    nodo.next = createListRec(--nodesToCreate, ++nodeIndex);
    return nodo;
}

export function printNodeList(node){
    if (node == null){
        return;
    }
    console.log(node);
   
    printNodeList(node.next);

}


export function reverListRec(head) {


    if (head.next == null || head == null){
        return head;
    }

    //just the LAST node in the original list, that we just return so we can 
    let new_beggining_nodelist = reverListRec(head.next);
    head.next.next=head;

    head.next=null;
    return new_beggining_nodelist
}





