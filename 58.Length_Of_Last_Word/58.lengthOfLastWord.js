var lengthOfLastWord = function(s) {
  let lastWord = '';
  let length = 0;
  const sArray = s.split(' ');
  console.log(sArray)
  
  for(i = sArray.length; i >= 0; i--){
    if(typeof sArray[i] === "string" && sArray[i].length > 0){
      lastWord = sArray[i];
      length = sArray[i].length;
      return `The last word is ${lastWord}, and it has ${length} letters`;
    } 
  }
  return `There are no words inputted`;
};

console.log(lengthOfLastWord("Hello   World   "))