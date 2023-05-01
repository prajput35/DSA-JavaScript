function quickSort(arr){
    if(arr.length <= 1) 
        return arr;

    const pivot = arr[arr.length -1];
    const leftArr = [];
    const rightArr = [];
    for(let i = 0; i < arr.length - 1; ++i){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else if (arr[i] > pivot){
            rightArr.push(arr[i]);
        }
    }

    const lt = quickSort(leftArr);
    const rt = quickSort(rightArr);
    const sorted = [...lt, pivot, ...rt];
    return sorted;
}

const myArr = [4, -2, 8, -6, 20];
console.log(quickSort(myArr));