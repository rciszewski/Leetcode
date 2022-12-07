const test = '121';
const test2 = '3567';

function isPalindrome(x) {
  let xString = x.toString();
  let reverseXstring = xString.split('').reverse().join('');
  if(xString === reverseXstring) return true;
  return false;
};

console.log(isPalindrome(test));
console.log(isPalindrome(test2));