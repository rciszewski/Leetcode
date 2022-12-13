Learning Summary:
- used 2 for loops to hold the each letter of the 1st word constant while checking against the the letters in the same index of other words in the array.
- used double brackets to access the first array and then each individual character in the string of words

Problem Description:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.