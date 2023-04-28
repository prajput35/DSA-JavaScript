let callStack = [];
let d = document.getElementById('code');
let mergeIndexes = [];
let msg = '';
function mergesort(arr) {
    isReturn = false;
    msg = 'entering mergeSort function with '+ arr + '</br>';
    printCallStack(arr, d, msg);   
    //d.innerHTML += msg;
    if (arr.length < 2) {
        //console.trace('End of recursion'); // print end message
        msg = 'End of recursion';
        //isReturn = true;
        printCallStack(arr, d, msg);
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    const lt = mergesort(leftArr);
    const rt = mergesort(rightArr);
    //const result = merge(mergesort(leftArr), mergesort(rightArr));
    const result = merge(lt, rt);
    msg = 'result returned from merge function:' + result + '</br></br>';
    //d.innerHTML += 'result returned from merge function:' + result + '</br></br>';
    mergeIndexes.pop();
    printCallStack(result, d, msg);
    
    console.log(mergeIndexes);
    return result;
  }
  
  function merge(leftArr, rightArr) {
    
    //d.innerHTML += '</br> entering merge function with leftArr:'+ leftArr + ' and rightArr:'+ rightArr +'</br>';
    msg = '</br> entering merge function with leftArr:'+ leftArr + ' and rightArr:'+ rightArr +'</br>';
    let temp = [];
    temp[0] = leftArr;
    temp[1] = rightArr;
    printCallStack(temp, d, msg);   
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    d.innerHTML += 'exiting merge function with array:'+ resultArr + '</br>';
    return resultArr
  }
  
  const arr = [8, 20, -2, 4, -6]
  console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
  //debugger;
  function logStackTrace() {
    return new Promise(resolve => {
      setTimeout(() => {
        const err = new Error();
        const stack = err.stack
   
  
        resolve(stack);
      }, 0);
    });
  }

  
  function printCallStack(arr,d,m) {

    const error = new Error();
    let errStr = error.stack;
    // const firstIndexOf = errStr.indexOf('at');
    // const firstIndexOfFunc = errStr.indexOf('merge');
    // const lastIndex = errStr.lastIndexOf('at');
    // if (lastIndex !== -1) {
    //     errStr = errStr.substring(firstIndexOfFunc, lastIndex);
    //     console.log(errStr); // output: "The event will start at 3pm at"
    // }

    //const str = 'This is a (sample) string (with) some (text) in parentheses.';
    let newStr = errStr.replace(/\([^)]*\)/g, '');
    newStr = newStr.substring(newStr.indexOf('printCallStack') + 'printCallStack'.length,newStr.lastIndexOf('at'));
    newStr = newStr.substring(newStr.indexOf('at')+2)


    //const str = 'You can merge multiple files into one using this tool. The merge feature is available in the File menu.';
     newStr = newStr.trim()
    const words = newStr.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'mergesort') {
            let match = words[i] + arr;
            if(!mergeIndexes.includes(match)){
                mergeIndexes.push(words[i] + arr);
            }
        }   
    }
    if(m === 'End of recursion')
    {
        mergeIndexes.pop();
    }
    console.log(mergeIndexes); // output: [2, 11]

    console.log(m,errStr,arr);
    d.innerHTML += m + newStr  + '</br>';

  }
  

  