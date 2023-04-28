const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(n) {
    let len = n.length;
    for (let i = 0; i < len - 1; ++i){
        let min = n[i];
        let index = 0;
        for(let j = i + 1; j < len; ++j){
            
            if(n[j] < min){
                min = n[j];
                index = j;
            }
        }
        n[index] = n[i];
        n[i] = min;
        
    }

    return n;
}
console.log(numbers);
console.log(selectionSort(numbers));