const nums = [0,1,1,1,1,2,2,3,3,4,5,5];
const nums2 = [1,1,2]
const nums3 = [1];

function removeDuplicates(nums){
  if(nums.length === 0) return 0;

  let i = 0;
  for(let j = 1; j < nums.length; j++){
    if(nums[i] !== nums[j]){
      i++
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums));

