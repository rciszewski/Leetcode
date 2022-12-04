//Solving using 2 for loops

const array = [1, 1, 2, 3, 4];
//target is 6

function twoSum(array, target){
  for(let i = 0; i < array.length; i++){
    let num1 = array[i];
    for(let j = i+1; j <= array.length; j++){
      let num2 = array[j];
      if(num1 + num2 == target) return [i, j]
    }
  }
}

console.log(twoSum(array, 6));

