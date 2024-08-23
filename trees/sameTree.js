/*
https://docs.google.com/document/d/14TyaEfhOmn6VEyGGYWVwEwMwXFiI8qBupStvBFGAXvA/edit


https://leetcode.com/problems/same-tree/description/
https://neetcode.io/problems/same-binary-tree

Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false


Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:

The number of nodes in both trees is in the range [0, 100].
-10^4 <= Node.val <= 10^4

Example 4:
Input: p = [], q = []
Output: true

Example 5:
Input: p = [], q = [1]
Output: false

Node Class:
.left
.right
.val

Approach/Pseudocode:
Use stack/queue and use a tuple and then use a while loop to compare each node. Return false if they don't match. Continue until we've checked all the nodes. Essentially BFS/DFS with a tuple.




as a study i want to attempt the above recursively

*/

const isSameTree = (p, q) => {
  let stack = [[p, q]];
  while (stack.length) {
    let [currA, currB] = stack.pop();
    if (currA?.val !== currB?.val) return false;
    if (currA?.left && currB?.left) {
      stack.push([currA.left, currB.left]);
    }
    if (currA?.right && currB?.right) {
      stack.push([currA.right, currB.right]);
    }
  }
  return true;
};
