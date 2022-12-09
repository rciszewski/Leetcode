const test = 'VII';
const test2 = 'XLV';
const test3 = 'XCVI';

function romanToInt(str){
  let result = 0;

  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  for(let i = 0; i < str.length; i++){
    let current = romanNumerals[str[i]];
    let next = romanNumerals[str[i+1]];

    if(current < next){
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
}

console.log(romanToInt(test));
console.log(romanToInt(test2));
console.log(romanToInt(test3));