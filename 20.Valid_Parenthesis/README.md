Problem description:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

return true if valid
return false if not valid

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


What I learned:

- stacks
  - The data structure provides the ability to verify the correct order of the varying types of brackets
  - push() and pop() were effective methods in manipulating the stack to confirm if the brackets were correctly nested/ordered