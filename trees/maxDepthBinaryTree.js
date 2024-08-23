/*
https://docs.google.com/document/d/1toVCiiGHEqhy0uP_lb58ojfYMD9pnvVD6zR8RLbk0DY/edit

https://leetcode.com/problems/maximum-depth-of-binary-tree/
https://neetcode.io/problems/depth-of-binary-tree

Max Depth Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100


again, iterative and recursive solutions exist




*/

function binTreeDepthIterative(root) {
  let stack = [[root, 1]];
  let maxDepth = 0;
  while (stack.length) {
    let [currNode, currDepth] = stack.pop();
    if (currDepth > maxDepth) maxDepth = currDepth;
    if (currNode.left) {
      stack.push([currNode.left, currDepth + 1]);
    }

    if (currNode.right) {
      stack.push([currNode.right, currDepth + 1]);
    }
  }

  return maxDepth;
}

function binTreeDepthRecursive(root) {
  if (!root) return 0;

  return (
    max(binTreeDepthRecursive(root.left), binTreeDepthRecursive(root.right)) + 1
  );
}
