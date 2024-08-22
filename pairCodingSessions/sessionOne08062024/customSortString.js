/*
791. Custom Sort String             ->   Medium
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.



Example 1:

Input: order = "cba", s = "abcd"

Output: "cbad"

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:

Input: order = "bcafg", s = "abcd"

Output: "bcad"

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.



Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.



*/

// const customSort = (order, s) => {
//   //   let counterS = {};
//   //   let answerS = "";
//   //   for (let i = 0; i < s.length; i++) {
//   //     console.log(i, counterS, s[i]);
//   //     if (counterS[s[i]]) {
//   //       counterS[s[i]]++;
//   //     } else {
//   //       counterS[s[i]] = 1;
//   //     }
//   //     console.log(i, counterS, s[i]);
//   //   }
//   //   console.log("before first adding loop>>>>>", counterS, answerS);

//   //   for (let i = 0; i < order.length; i++) {
//   //     if (counterS[order[i]]) {
//   //       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", counterS[order[i]]);
//   //       for (let j = 1; j <= counterS[order[i]]; j++) {
//   //         answerS = answerS.concat([order[i]]);
//   //         console.log(answerS, "<<<<<<<<<<<<<<<<,,", order[i]);
//   //       }
//   //       delete counterS[order[i]];
//   //     }
//   //   }
//   //   console.log("before others>>>>>", counterS, "ansers", answerS);

//   //   Object.keys(counterS).forEach((element) => {
//   //     for (let i = 1; i <= counterS[element]; i++) {
//   //       answerS = answerS.concat([[element]]);
//   //     }
//   //   });
//   //   return answerS;

//   let counterS = {};
//   let answerS = "";
//   for (let i = 0; i < s.length; i++) {
//     if (counterS[s[i]]) {
//       counterS[s[i]]++;
//     } else {
//       counterS[s[i]] = 1;
//     }
//   }
//   for (let i = 0; i < order.length; i++) {
//     if (counterS[order[i]]) {
//       answerS = answerS.concat(order[i]);

//       delete counterS[order[i]];
//     }
//   }
//   console.log("before others>>>>>", counterS, "ansers", answerS);

//   Object.keys(counterS).forEach((element) => {
//     for (let i = 1; i <= counterS[element]; i++) {
//       answerS = answerS.concat([[element]]);
//     }
//   });
//   return answerS;
// };

// let order = "bcafg";
// let s = "abbcd";

// console.log(customSort(order, s), "testing this muh");

/*
791. Custom Sort String             ->   Medium
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.



Example 1:

Input: order = "cba", s = "abcd"

Output: "cbad"

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:

Input: order = "bcafg", s = "abcd"

Output: "bcad"

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.



Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.



*/

const customSort = (order, s) => {
  let sCounter = {};
  let answerString = "";

  s.split("").forEach((element) => {
    if (sCounter[element]) {
      sCounter[element]++;
    } else {
      sCounter[element] = 1;
    }
    console.log(sCounter, "scounter");
  });

  for (let i = 0; i < order.length; i++) {
    if (sCounter[order[i]]) {
      answerString += order[i].repeat(sCounter[order[i]]);
      delete sCounter[order[i]];
    }
  }

  Object.keys(sCounter).forEach((element) => {
    answerString += element.repeat(sCounter[element]);
  });

  return answerString;
};

let order = "cbafg";
let s = "abbcdzzz";

console.log(customSort(order, s), "testing this muh");

/***************************************************************************
fastest so far

const customSort = (order, s) => {
  let sCounter = {};
  let answerString = "";

  s.split("").forEach((element) => {
    if (sCounter[element]) {
      sCounter[element]++;
    } else {
      sCounter[element] = 1;
    }
    console.log(sCounter, "scounter");
  });

  for (let i = 0; i < order.length; i++) {
    if (sCounter[order[i]]) {
      while (sCounter[order[i]] > 0) {
        console.log("scounter while top", sCounter[order[i]]);
        answerString = answerString.concat(order[i]);
        sCounter[order[i]]--;
      }
      delete sCounter[order[i]];
    }
  }

  let remainingLetters = Object.keys(sCounter);
  console.log(remainingLetters, "<<<<<<<<<,,,");

  remainingLetters.forEach((element) => {
    while (sCounter[element] > 0) {
      console.log("scounter while top", sCounter[element]);
      answerString = answerString+ element
      sCounter[element]--;
    }
  });
  return answerString;
};

let order = "cbafg";
let s = "abbcdzzz";

console.log(customSort(order, s), "testing this muh");

*/
