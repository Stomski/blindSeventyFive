/*


11. Container With Most Water

Medium


You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example 2:

Input: height = [1,1]
Output: 1


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104


************************************************************

so we make two pointers, sliding one towards the other, tracking current max, return current max

and thats the iterative naive approach, tight bobby haha

below is attempt one, it was about to nested loop throguh all this shit

const mostWater = (height) => {
  let left = height[0];
  let currMax = 0;
  let volume;
  for (let i = height.length - 1; i > 0; i--) {
    let right = height[i];
    right > left ? (volume = right * i) : (volume = left * i);
    console.log(volume, "volume, i >", i);
    if (volume > currMax) currMax = volume;
}
return volume;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));


************************************************************

ok so now im gonna try to do this correctly..... so we do like above but IF the left is bigger than the right, we move the right, if the left is smaller, we move it instead

*/

function mostWater(height) {
  let left = 0;
  let right = height.length - 1;
  let currMax = 0;
  let volume;
  while (left < right) {
    if (height[left] > height[right]) {
      volume = height[right] * (right - left);

      right--;
    } else {
      volume = height[left] * (right - left);
      left++;
    }
    if (volume > currMax) currMax = volume;
  }
  return currMax;
}

console.log(mostWater([1, 1]));
console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
