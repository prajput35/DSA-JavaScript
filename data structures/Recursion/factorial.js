function recursiveFactorial(number){
    debugger;
    if(number === 2){
        return 2;
    }
    return number * recursiveFactorial(number -1)
}

console.log(recursiveFactorial(5));