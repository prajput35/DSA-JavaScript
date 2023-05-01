let i = 0;
function recursiveFactorial(number){
    //debugger;
    ++i;
    if(number === 2){
        return 2;
    }
    return number * recursiveFactorial(number -1)
}

function factorialMaster(){
    let cache = {};
    return function fact(n){
        ++i;
        if(n in cache){
            return cache[n];
        }else if( n === 2){
            return 2;
        }
        cache[n] = n * fact(n-1);
        return cache[n];
    }
}

console.log(recursiveFactorial(5));
console.log('Iterations:',i);

i=0;

const memoizedFactorial = factorialMaster();
console.log(memoizedFactorial(5));
console.log('Iterations:',i);
//memoization works only in case of divide and conquer recursive functions