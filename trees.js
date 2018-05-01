/*  The problem
Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in
a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output
should be

sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree.
Otherwise a[i] is the height of a person standing in the ith
position.

Guaranteed constraints:
5 ≤ a.length ≤ 15,
-1 ≤ a[i] ≤ 200.

[output] array.integer

Sorted array a with all the trees untouched.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function sortByHeight(a) {
 const trees = [];

 for(let i = a.length; i >= 0; i--){
  if(a[i] == -1){
   trees.push(i);
   a.splice(i, 1);
  }

 }
  a.sort((a, b) =>{
    return a-b;
  });

  for(let i = trees.length-1; i >= 0; i--){
    a.splice(trees[i], 0, -1);
  }
 console.log(trees);
 console.log(a);
 return a
}

const a = [4, 2, 9, 11, 2, 16];
sortByHeight(a);
