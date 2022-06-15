
export function mergeSort(dataToSort, start, end) {

    if (start < end) {

        let mid = Math.floor((start + end) / 2);
        mergeSort(dataToSort, start, mid);
        mergeSort(dataToSort, mid+1, end)
        merge(dataToSort, start, mid, end);

    }

}

function merge(dataToSort, start, mid, end) { 

   //temporary array
   let dataToSorteClone=[];

    let i = start, j=mid+1, k=0;

    while(i<=mid && j<=end){
        if (dataToSort[i]<=dataToSort[j]){
            dataToSorteClone[k]=dataToSort[i];
            i++;
            k++;
        }else{
            dataToSorteClone[k]=dataToSort[j];
            j++;
            k++;
        }
    }
    while(i<=mid){
        dataToSorteClone[k]=dataToSort[i];
        k++; i++;
    }
    while(j<=end){
        dataToSorteClone[k]=dataToSort[j];
            j++;
            k++;
    }

    for(let i=start; i<=end; i++){
        dataToSort[i]=dataToSorteClone[i-start];
    }




}