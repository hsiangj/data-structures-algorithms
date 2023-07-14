function findRotationCount(arr) {
  let start = 0;
  let end = arr.length-1;

  while(start<=end){
    if(arr[start] <= arr[end]){
      return start;
    }

    let middle = Math.floor((start+end)/2);
    let previous = middle - 1;
    let next = middle + 1;

    if(arr[middle] < arr[previous] && arr[middle] < arr[next]){
      return middle;
    }

    if(arr[start] <= arr[middle]){
      start = middle +1
    } else {
      end = middle -1;
    }
  }
  return -1;
}

module.exports = findRotationCount


// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0