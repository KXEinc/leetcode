var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (y = i + 1; y < nums.length; y++) {
            let z = nums[i] + nums[y];
            if (z === target) {
                return [i, y];
            }
        }
    }
};