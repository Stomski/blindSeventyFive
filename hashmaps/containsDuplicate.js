/**
original question:

group solution:

https://docs.google.com/document/d/1B-LgzoCAODNkWYGYZj_g3xiN29N1r2kfOxH4CV_gSOE/edit

https://neetcode.io/problems/duplicate-integer
https://leetcode.com/problems/contains-duplicate/description/
Duplicate Integer

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]

Output: true

Example 2:
Input: nums = [1, 2, 3, 4]

Output: false

Example 3:
Input: nums = []
Output: false

Example 4:
Input: nums = [0]
Output: false



Naive Approach: Doubly nested for loops and compare every ele to every other ele.

Optimized: Use a hashmap or a set to keep track of previously seen values

counter = {
	1:true
	2:true
	3:true
}







Time O(n)
Space O(n)
Pseudocode:
Create a hashmap/set
Iterate over the input and add items to the set as we encounter them
If we encounter an item that already exists in the set then return true
return false at the end of the iteration



Time O(n)
Space O(n)

Input: nums = [1, 2, 3, 3]

const hasDuplicate = nums => {
	const dups = {};
	for (let i=0; i < nums.length; i++) {
		let num = nums[i];
		if (dups[num]) return true;
dups[num] = true;
}
return false
}

 */
