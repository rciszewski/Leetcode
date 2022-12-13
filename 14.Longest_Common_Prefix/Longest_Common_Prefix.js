const words = ['splash', 'spleen', 'split'];

function displayCommonPrefix(listArray){
  if(listArray === null || listArray.length == 0) return ""; //return empty string if no data or an empty string was inputted

  let prefix = ''; //intialize a variable to store the common prefix;

  for(let i = 0; i < listArray[0].length; i++){ //loop over the first word to check against others
    const firstWord = listArray[0][i];

    for(let j = 1; j < listArray.length; j++){ //start at index 1 and loop over each character of words
      if(listArray[j][i] !== firstWord) return prefix; //return prefix once a letter does not match the letter in the 1st word at the same index
    }
    prefix = prefix + firstWord; //update the common prefix variable upon each successful loop 
  }
  return prefix;
}

console.log(displayCommonPrefix(words));