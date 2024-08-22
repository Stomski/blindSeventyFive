/*
https://docs.google.com/document/d/1rvNUK9Svj3bZWsRik3DEn9V-RYy0rK1Gge9DNJs1EIs/edit

https://leetcode.com/problems/valid-parentheses/description/
https://neetcode.io/problems/validate-parentheses

Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.

Example 4:
Input: s = ""
Output: false

Example 5:
Input: s = {([])}
Output: true

Example 6:
Input: s = {})(
Output: false

Example 7:
Input: s = }])([{
Output: false

input: "[({([])})]()"

stack = []

Pseudocode:
Use a stack
Use a hashmap to map open brackets to their closing counterparts
Iterate over input string
on each iteration
if its an opening bracket push it onto stack
otherwise pop the stack and check if the popped element is the curr elements complimentary pair
if it is continue
if its not return false early
return true

*/

const isValid = (s) => {
  const stack = [];
  const open = {};
};
