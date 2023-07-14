function findFloor(arr, num) {
  let start = 0;
  let end = arr.length-1;

  while(start<=end){
    let middle = Math.floor((start+end)/2);
    let prev = middle - 1;
    let next = middle + 1;

    if(arr[end] <= num) {
      return arr[end];
    };
    
    if(arr[middle] <= num && arr[next] > num){
      return arr[middle]
    }

    if(arr[middle] > num){
      end = middle - 1;
    }else{
      start = middle + 1;
    }
  }
  return -1;
}

module.exports = findFloor



// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1