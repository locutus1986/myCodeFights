/* -- the problem --
  Given an array of integers, find the maximal absolute
  difference between any two of its adjacent elements.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce((acc, val, i, array) => {
    let total = Math.abs(val - array[i+1])
    if(total > acc) return sum
    else return acc
  }, 0)
}
