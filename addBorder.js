/* -the Problem-
Given a rectangular matrix of characters,
add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

*/
function addBorder(picture) {
  const topBtmAskNum = picture[0].length + 2;
  let topBtm = '*'.repeat(topBtmAskNum);
  for(let i=0; i <= picture.length-1; i++){
    picture[i] = "*" + picture[i] + "*"
  }
  picture.unshift(topBtm);
  picture.push(topBtm);
  console.log(picture);
  return picture;
}
a = ['abc', 'efg', 'hij'];
addBorder(a);
