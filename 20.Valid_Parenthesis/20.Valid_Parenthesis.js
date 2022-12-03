/* 
Challenge:

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

*/

const e = require("express");

let test = '(({[]}))';

function isValid(s) {
  if(s == null || undefined) return false
  if(s.length <= 1) return false

  const stack = [];

   for(let i = 0; i < s.length; i++){
    const top = stack[stack.length - 1]; 
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if(s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    }
    else if(s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if(s[i] === '}' && top === '{' && stack.length !== 0){
       stack.pop();
    } else {
       return false;
    }   
  }

  if(stack.length === 0){
    return true;
  } else {
    return false;
  }

}

console.log(isValid(test));
