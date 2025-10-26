// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    let p = 0;
    if(nums.length<=1)return;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[p] = nums[i];
            //nums[i] = 0;
            p++
        }
    }
    for(let i = p;i<nums.length;i++){
        nums[i] = 0;
    }
    console.log(nums)
};

console.log(moveZeroes([0,1,0,3,12]))