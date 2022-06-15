export function reverseList(nodo){

    if (nodo == null || nodo.next == null) {
        return null;
    }
    let reverseList
}


export class Nodo{

    constructor(num){
        this.numero=num;
    }

    set next(nextNodo){
         this._next=nextNodo;
    }
    get next(){
        return this._next;
    }


}

export function createListRec( nodesToCreate, nodeIndex=0){

    if (nodesToCreate == 0){
        return null;
    }
    let nodo =new Nodo(String(nodeIndex));
    nodo.next= createListRec(--nodesToCreate, ++nodeIndex);
    return nodo;
}





