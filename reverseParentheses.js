/* The Problem
You have a string s that consists of English letters,
punctuation marks, whitespace characters, and brackets.
It is guaranteed that the parentheses in s form a regular
bracket sequence.

Your task is to reverse the strings contained in each pair
of matching parentheses, starting from the innermost pair.
The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting of English letters, punctuation marks,
whitespace characters and brackets. It is guaranteed that
parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string
*/

function reverseParentheses(s) {
  const openParen = [];
  const closeParen = [];
  const ParenPairs = [];

  // find parentheses
  for(let i=0; i <=s.length-1; i++){
    if(s[i] == '('){
      openParen.push(i);
    }else if(s[i] == ')'){
      closeParen.push(i);
    }
  }

  // sort into pairs
  for(let i=0; i <= closeParen.length-1; i++){
    let open = -1;
    let snip = -1;
    for(let j = openParen.length-1; j >= 0; j--){
      if(openParen[j] < closeParen[i] && openParen[j] > open){
        open = openParen[j];
        snip = j;
      }
      delete openParen[snip];
    }
    ParenPairs.push({"open":open, "close": closeParen[i]});
  }

  //
  for(let i=0; i<=ParenPairs.length-1; i++){
    let tempArr = s.split('');
    let tempVar = tempArr.slice(ParenPairs[i].open, ParenPairs[i].close+1)
    tempArr.splice(ParenPairs[i].open,
       ParenPairs[i].close-ParenPairs[i].open+1);
    tempVar = tempVar.reverse();
    tempVar = tempVar.join('');

    tempArr.splice(ParenPairs[i].open, 0, tempVar);
    tempArr = tempArr.join('');
    s=tempArr;
  }

  // remove parentheses
  for(let i=0; i<closeParen.length; i++){
    s = s.replace('(', '');
    s = s.replace(')', '');
  }
  console.log(s);
  return s;
}

const s = 'ab(c(23d)e)fg';
reverseParentheses(s);
