let c=0;
function inception(){
    //1. base case
    if(c>3){
        return 'done';
    }
    c++;

    //recursive case
    // use return to bubble up the base case return value to the last function call in the calling stack
    return inception();
}

console.log(inception());

//1. identify the base case
//2. identify the recursive case
//3. get closer and closer and return when needed, usually you have 2 returns to bubble up the base case retrun value to last call in the calling stack