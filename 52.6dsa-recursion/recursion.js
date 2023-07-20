/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) {
    return 1;
  } 
   //normal case
  else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0; 
  const firstWordLength = words[0].length;
  const longestWordOther = longest(words.slice(1));
  return Math.max(firstWordLength, longestWordOther)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  const letter = str[0]
  const everyOtherLetter = everyOther(str.slice(2));
  return letter.concat(everyOtherLetter)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length-1) {
  if(left >= right) return true;
  if (str[left] !== str[right]) return false;
  else {
    return isPalindrome(str, left+1, right-1)
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i+1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  if (i < 0) return '';
  const letterReverse = str[i];
  const restOfLetters = revString(str, i-1);
  return letterReverse.concat(restOfLetters);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = []
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result.push(...gatherStrings(obj[key]))
      
    } else {
      if (typeof obj[key] === 'string')
      result.push(obj[key])
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length-1) {
  if(left > right ) return -1;
  let middle = Math.floor((left+right)/2);
  if(val === arr[middle] ) {
    return middle;
  } else if (val > arr[middle]) {
    return binarySearch(arr, val, middle+1, right)
  } else {
    return binarySearch(arr, val, left, middle-1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
