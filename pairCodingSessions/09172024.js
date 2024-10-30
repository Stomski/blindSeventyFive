/*







Write an algorithm that, given a Binary Search Tree, will find the second largest node in the tree. Assume you already have a bst Node class with an insert method.

define func

create queue

onque the root




while( q.length)


grab somthing off the q

- if the current node has a .right ,
onque a tuple that is [node.right, curr.val]

if curr has no right but left,
return left.val


if curr has no right or left, return old curr.val

*/

function secondGreatestValue(rootNode) {
  let stack = [[rootNode, 0]];

  while (stack.length) {
    let [currNode, pastVal] = stack.pop();

    if (currNode.right) {
      stack.push([currNode.right, currNode.value]);
    } else if (currNode.left) {
      return currNode.left.value;
    } else {
      return pastVal;
    }
  }
}
