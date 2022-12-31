const one = [5,4,3,2,1];
const two = [5,6,7,8,2,9,9];
const three = [9,9,9,9,9,9];

//last digit is 1-8, increase by 1 and return the array of digits
//last digit is 9, make last digit zero and increase preceding index value by 1
//if first digit is 9, make first index value a 0 and the second index value a 1;

function convert9s(digits){
  for(i = digits.length-1; i >= 0; i--){
    if(digits[i] < 9){
      digits[i] += 1;
      return digits;
    } else if(digits[i] == 9 && i > 0){
      digits[i] = 0;
    } else {
        digits[i] = 0;
        digits.splice(0,0,1);
    }
  }
  return digits;
}

console.log(convert9s(one));
console.log(convert9s(two));
console.log(convert9s(three));