/*

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
https://neetcode.io/problems/buy-and-sell-crypto

Best Time to Buy & Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4

Example 4:
Input: prices = [20]
Output: 0

Example 5:
Input: prices = []
Output: 0



Example 6:
Input: [6,2,4,4,5,6,7]
Output: 5

Example 7:
Input: [6,2,14,1,5,6,7]
Output: 12

7

Input: [6,2,4,4,5,6,7,1,8]
	                 B S->

Pseudocode:
Initialize a right and left pointer to mark off our window and create a variable for max profit seen so far. Iterate until the right pointer reaches the end of the input. On each iteration, compare buy and sell price if the sell price is less than the buy price -> slide the window by moving the left pointer to the right's pos. Otherwise get the profit (sell - buy) and compare to the max profit seen so far and update if necessary. Return maxprofitseensofar.




*/

const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let maxProfitSoFar = 0;
  while (right < prices.length) {
    let buyPrice = prices[left];
    let sellPrice = prices[right];
    if (sellPrice <= buyPrice) {
      left = right;
    } else {
      let profit = sellPrice - buyPrice;
      maxProfitSoFar = Math.max(maxProfitSoFar, profit);
    }
    right++;
  }
  return maxProfitSoFar;
};

console.log(maxProfit([6, 7, 4, 5, 6, 7, 3, 4, 5, 6, 7, 6, 4]));
