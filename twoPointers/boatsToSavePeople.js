/*



881. Boats to Save People


You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)


Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)


Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)


Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104

//  clarifying questions:
are the weights all integers?

//  formulate the approach:

ok so while the array has more than 2 people in it,

i want to compare the first to each subsequent, tracking a maximum,
                if i find a pair that matches the limit,
                        remove them both, increase boat count and continue
                    else i want to remove the maximum possible pair and increase count (if there is one found below the limit),
                    if no pairs found below limit, remove people at zero, increase count, continue till array length = 0




*/

function boatsToSavePeople(people, limit) {
  let boatCount = 0;
  while (people.length >= 1) {
    if (people.length === 1) {
      //i want to add one to boat count and break out of the loop, returning count
    }
    let currLeft = people[0];
    let currRight = 1;
    while (currRight <= people.length) {
      let maxFound = 0;
      let maxIndice = 0;
      if (currLeft + people[currRight] === limit) {
        //i want to slice them both out, increase boat count
        // and BREAK out of the loop
      } else if (currLeft + people[currRight] < limit) {
        //compare to max, if its greater, adjust max and maxindice, continue with pointer motion

        if (currLeft + people[currRight] > maxFound) {
        }
      } else {
        //if it isnt a valid pair, just continue
        continue;
      }

      //and so  this point if max found is zero i pop just the first indice, increase boat count and continue
    }
  }
  return boatCount; // return count
}
