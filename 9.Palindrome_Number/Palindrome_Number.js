//convert to string approach to treat input as an array
const test = '121';
const test2 = '3567';
const test3 = 353;

function isPalindrome(x) {
  let xString = x.toString();
  let reverseXstring = xString.split('').reverse().join('');
  if(xString === reverseXstring) return true;
  return false;
};

console.log(isPalindrome(test));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));

//number approach by manipulating the digit in the tens place
//no converting input to string

function isPalindrome2(x){
  if(x < 0) return false
  if(x % 10 === 0 && x !== 0) return false

  const temp = x;
  let reverseNumber = 0;

  while(x>0){
    reverseNumber = (reverseNumber * 10) + (x%10)
    x = parseInt(x/10);
  }

  return temp == reverseNumber;
}

console.log(isPalindrome2(test));
console.log(isPalindrome2(test2));
console.log(isPalindrome2(test3));