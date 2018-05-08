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
  const topBtm = '*'.repeat(picture[0].length + 2);
  picture = picture.map(str => '*'+ str +'*');
  picture.unshift(topBtm);
  picture.push(topBtm);
  return picture;
}

a = ['abc', 'efg', 'hij'];
addBorder(a);

// for(let i=0; i <= picture.length-1; i++){
//   picture[i] = "*" + picture[i] + "*"
// }
