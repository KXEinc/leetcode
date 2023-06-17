function compareNumbers(a, b) {
    return a - b;
}

var removeDuplicates = function(nums) {
    const uniq = nums.reduce((acc, num) => ({...acc, [num]: 0}), {});
    const uniqArr = Object.keys(uniq).map(el => +el).sort(compareNumbers);

    // nums.fill(0, uniqArr.length);
    for(let i = 0; i < nums.length; i++) {
        nums[i] = uniqArr[i];
    }
    return uniqArr.length
};