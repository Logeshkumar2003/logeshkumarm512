function findMedianSortedArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      
      return mergedArray[mid];
    }
  }
  
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = findMedianSortedArrays(arr1, arr2);
  console.log(median);
  