/*  -- the problem --
Call two arms equally strong if the heaviest weights they each are
able to lift are equal.

Call two people equally strong if their strongest arms are equally
strong (the strongest arm can be both the right and the left),
and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if
you two are equally strong.

*/


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
   let myStrongest = (Math.max(yourLeft, yourRight))
   let myWeakest = (Math.min(yourLeft, yourRight))
   let theirStrongest = (Math.max(friendsLeft, friendsRight))
   let theirWeakest = (Math.min(friendsLeft, friendsRight))

   if(myStrongest === theirStrongest && myWeakest === theirWeakest){
       return true
   }else {
       return false
   }

}
