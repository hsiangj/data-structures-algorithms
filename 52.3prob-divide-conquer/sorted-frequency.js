// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

function sortedFrequency(arr, val) {
  let firstIdx = findFirstIdx(arr, val);
  if(firstIdx === -1) return -1
  let lastIdx = findLastIdx(arr, val);
  return lastIdx - firstIdx + 1
}

function findFirstIdx(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length-1;
  let result = -1;

  while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);
    let middleVal = arr[middleIdx];
    
    if(val > middleVal){
      leftIdx = middleIdx + 1;
    }else if(val < middleVal){
      rightIdx = middleIdx - 1; 
    }else{
      result = middleIdx;
      rightIdx = middleIdx-1;
    }
  }
  return result;
}

function findLastIdx(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length-1;
  let result = -1;

  while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);
    let middleVal = arr[middleIdx];
    
    if(val > middleVal){
      leftIdx = middleIdx + 1;
    }else if(val < middleVal){
      rightIdx = middleIdx - 1; 
    }else{
      result = middleIdx;
      leftIdx = middleIdx+1;
    }
  }
  return result;
}

module.exports = sortedFrequency

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

