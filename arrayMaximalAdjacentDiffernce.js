/* -- the problem --
  Given an array of integers, find the maximal absolute
  difference between any two of its adjacent elements.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  let largestGap = 0
  for(let i =0; i < inputArray.length; i++){
    let theGap = Math.abs(inputArray[i] - inputArray[i+1])
    if(theGap > largestGap){
      largestGap = theGap
    }
  }
  return largestGap
}

arrayMaximalAdjacentDifference([1,5,7,9,8,2,3])
