const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(n) {
    let len = n.length;
    for(let i = 1; i < len; ++i){
        let j = i - 1;
        let temp = n[i];
        while(temp < n[j] && j >= 0){
            n[j + 1] = n[j]; //shifting the elements to the right 
            j--;
        }
        n[j + 1] = temp; //j + 1 because j becomes -1 in the while loop
    }
    return n;
}

console.log(numbers);
insertionSort(numbers);
console.log(numbers);