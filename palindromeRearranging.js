/*
Given a string, find out if its characters can be rearranged to
form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.
*/
function palindromeRearranging(inputString) {
  inputString = inputString.split('');

  const numChars = [];
  for(let i=0; i<inputString.length; i++){
    if(inputString.indexOf(inputString[i]) == i){
      numChars.push([inputString[i], 1]);
    }else {
      for(let x=0;x<numChars.length;x++){
        if(numChars[x][0] === inputString[i]){
          numChars[x][1]++;
        }
      }
    }
  }

  let isOdd = 0;
  for(let y=0;y<numChars.length;y++){
    if(numChars[y][1] % 2 != 0){
      isOdd++;
    }
  }

  if(isOdd > 1){
    return false;
  }else {
    return true;
  }
}
console.log(palindromeRearranging("aabb");
