
function bubbleSort(n){
    const len = n.length;
    for (let i = 0; i < len; ++i){
        for(let j = 0; j < len; ++j){
            if(n[j+1] < n[j]){ // n[j+1] > n[j] for sorting array in descending order
                let temp = n[j];
                n[j] = n[j+1];
                n[j+1] = temp;
            }
        }
    }

    return n;
}

const numbers = [3,6,1,8,2,5,90,4];
console.log(numbers);
console.log(bubbleSort(numbers));
