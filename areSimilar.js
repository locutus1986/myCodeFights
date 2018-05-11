/* -- the prolem --
Two arrays are called similar if one can be
obtained from another by swapping at most one
pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't
make a and b equal.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Array of integers.

Guaranteed constraints:
3 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 1000.
*/

function areSimilar(a, b) {
    let counter = 0;
    const different = [];
    for(let i = 0; i<=a.length-1; i++){
        if(a[i] != b[i]){
            let myObj = {'a': a[i], 'b': b[i]}
            different.push(myObj);
            if(different.length > 2){
                return false;
            }
        }
    }
    if(different.length == 0){
        return true;
    }else if(different[0].a == different[1].b && different[1].a == different[0].b){
        return true;
    }
    else {
        return false;
    }
    console.log(different);
}

const a = [832,998,148,570,533,561,894,147,455,279];
const b = [832,570,148,998,533,561,455,147,894,279];

areSimilar(a, b)
