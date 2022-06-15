
import { findBinary } from 
 './modules/busquedaBinaria.js'
 fibArray

import { sumarRec } from 
'./modules/sumaNaturalNum.js'

import { fibArray } from 
'./modules/fibonacci2Rec.js'

import {mergeSort} from './modules/mergeSort.js';
import { Nodo, createListRec, reverseList} from './modules/linkedLists.js';

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




let nodos=[];
let nodesToCreate=8;
let nodo_start_list=createListRec(nodesToCreate);

console.log(nodo_start_list);


