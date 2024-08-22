/*

Code
Testcase
Test Result
Test Result
763. Partition Labels
Medium
Topics
Companies
Hint
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.



Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]


Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.



S

iterate into count obj

iterate over s,



if count[s[i]],  find the maxoccurance indice, set,

    iterate untill i hit that num, continually moving it further away,

    last Slice,

    recursionDistance




Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]

*/

const partitionLabels = (s) => {
  //variables??

  const counterObj = {};
  const answerArray = [];
  let lastSlice = 0;
  let iGottaGoAtLeastThisFar = 0;

  // build a countObj, vals are array of indices

  for (let i = 0; i < s.length; i++) {
    if (!counterObj[s[i]]) {
      counterObj[s[i]] = [i];
    } else {
      counterObj[s[i]].push(i);
    }
  }

  // loop trhgouh the string setting my partitions

  let pointer = 0;

  while (pointer < s.length) {
    if (pointer === iGottaGoAtLeastThisFar && pointer !== 0) {
      answerArray.push(pointer - lastSlice);
      lastSlice = pointer;
    }
    if (counterObj[s[pointer]]) {
      if (
        counterObj[s[pointer]][counterObj[s[pointer]].length - 1] >
        iGottaGoAtLeastThisFar
      ) {
        iGottaGoAtLeastThisFar =
          counterObj[s[pointer]][counterObj[s[pointer].length - 1]];
      }
    }
    pointer++;
  }

  return answerArray;
};
