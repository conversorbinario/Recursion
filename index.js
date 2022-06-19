
import { findBinary } from 
 './modules/busquedaBinaria.js'
 fibArray

import { sumarRec } from 
'./modules/sumaNaturalNum.js'

import { fibArray } from 
'./modules/fibonacci2Rec.js'

import {mergeSort} from './modules/mergeSort.js';
import { Nodo, createListRec, reverListRec, printNodeList} from './modules/linkedLists.js';
import { printLeafNodes } from './modules/printLeafNodes.js';
import { NodeT, inserValBiTree } from './modules/insertValueBinaryTre..js';

console.log("resutados");
let resultado=findBinary(511);

console.log(resultado);


let resultadoSUma = sumarRec(10, 0);

console.log(resultadoSUma);


let resultadoNFib=fibArray(5);

console.log(resultadoNFib);
let originally_unsorted_array = [8, 9, 3, 1, 123, 1, 89, 4, 0];

mergeSort(originally_unsorted_array, 0, originally_unsorted_array.length-1);

console.log(originally_unsorted_array);


//create a pseudo nodeList recursively
let nodos=[];
let nodesToCreate=10;
let nodo_start_list=createListRec(nodesToCreate);


//print recursively
console.log("Printing list recursively...");


printNodeList(nodo_start_list);


let net_newNod=reverListRec(nodo_start_list);

console.log("First node allowed us to access the rest of the elements of the list\n Note that, as the nodelist has been reversed, its 'next' property is now null");
console.log(nodo_start_list);
console.log("Printing reverses list...");


printNodeList(net_newNod);



let nodet = new NodeT(100)
inserValBiTree(nodet, 70);
inserValBiTree(nodet, 110);

inserValBiTree(nodet, 120);
inserValBiTree(nodet, 105);
inserValBiTree(nodet, 65);

inserValBiTree(nodet, 75);






console.log(nodet);



console.log("now, printing the leafs");
printLeafNodes(nodet);




//printLeafNodes();
//printNodeList(net_newNod);









