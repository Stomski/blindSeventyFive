/**
 *
 *
 *


https://neetcode.io/problems/is-anagram
https://leetcode.com/problems/valid-anagram/description/
Is Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"

Output: true

Example 2:
Input: s = "jar", t = "jam"

Output: false

Constraints:
s and t consist of lowercase English letters.






 */

/*

so we need to iterate over each list, im just gonna make keys for characters and values of counts, and at the end if the objects arent equal return false


alright so create an object, iterate over one string, adding to obj,
iterate over second string, removing from obj,

if at the end all values dont = 0, false

*/

function validAnagram(s, t) {
  let countObj = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (countObj[s[i]]) {
      countObj[s[i]]++;
    } else {
      countObj[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (!countObj[t[i]]) {
      return false;
    } else {
      countObj[t[i]]--;
    }
  }

  return true;
}
