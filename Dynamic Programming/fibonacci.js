let i = 0;
function fib(n){
    //debugger;
    ++i;
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}


function fibonacciMaster(){
    let cache = {};    
    return function fibonacci(n){
        ++i;
        if(n in cache){
            return cache[n];
        }else if(n < 2){
            return n;
        }

        cache[n] = fibonacci(n-2) + fibonacci(n-1);
        return cache[n];
    };
    
}


console.log(fib(35));
console.log('Iterations:',i);
i=0;
const memoizedFib = fibonacciMaster();
console.log(memoizedFib(35));
console.log('Iterations:',i);
//console.log(cache);
