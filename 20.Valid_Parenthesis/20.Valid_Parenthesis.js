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
