/*


https://leetcode.com/problems/invert-binary-tree/description/
https://neetcode.io/problems/invert-a-binary-tree

Invert/Flip Tree

Given the root of a binary tree, invert the tree, and return its root.

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100


*/

function invertBinTreeIterative(root) {
  // i consider this one pretty straight forward
  // in this attempt im going to switch as i go down the tree...... I wonder if this is a problem or sub optimal to switching as i go up?

  let stack = [root];

  while (stack.length) {
    let currNode = stack.pop();

    let oldLeft = currNode.left;
    let oldRight = currNode.right;

    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);

    currNode.right = oldLeft;
    currNode.left = oldRight;
  }
  return root;
}

function invertBinTreeRecursive(root) {
  //so honestly this is the one that for sure gives me trouble, so lets psudo code it out a bit.....
}
