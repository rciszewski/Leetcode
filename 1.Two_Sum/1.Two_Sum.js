//Solving using 2 for loops

const array = [1, 1, 2, 3, 2, 5];
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


//solving using map data structure

function sum2(array, target){
  let map = new Map();
  for(let i = 0; i < array.length; i++){
    num1 = array[i];
    num2 = target - num1;
    if(map.has(num2)) return [i, map.get(num2)];
    map.set(num1, i); 
  }
  }

  console.log(sum2(array, 6));
