function findRotatedIndex(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length-1;

  while(leftIdx<=rightIdx){
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    let middleNum = arr[middleIdx];

    if(middleNum === num){
      return middleIdx;
    }

    if(arr[leftIdx] <= middleNum){
      if(arr[leftIdx] <= num && num < middleNum) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      if (arr[rightIdx] >= num && num > middleNum) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }

  return -1
}

module.exports = findRotatedIndex



// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1