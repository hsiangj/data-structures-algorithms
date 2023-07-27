function insertionSort(arr) {
  debugger;
  for (let i = 0; i<arr.length; i++) {
    let currentValue = arr[i];

    let j = i-1;
    while(j > -1 && arr[j] > currentValue) {
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = currentValue;
  }
  return arr;
}


module.exports = insertionSort;

