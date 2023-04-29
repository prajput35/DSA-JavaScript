function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    const la = mergesort(leftArr);
    const ra = mergesort(rightArr);
    const sorted = merge(la, ra);
    return sorted;
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }
  
  const arr = [5,4,2,1]
  console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
  