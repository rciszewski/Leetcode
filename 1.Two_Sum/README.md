Learning summary:
- Solved the problem in 2 ways: 
1) 2 for loops
2) Map data structure

The 2 for loops approach checks the values in each index of the array to determine if they add up to the target value. At each index location, the first for loop holds the value of the current index location while the second for loops iterates over the remaining index locations. This is a step by step approach that will find the correct answer albeit inefficiently.

The Map data structure increases efficiency through a faster lookup time by only having to iterate through the array once. While looping through the input array, the function checks if the value needed is in the MAP data structure. If it is not and it's not a duplicate value, it will save the number and index location in the data structure as key-value pairs.

Problem:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

