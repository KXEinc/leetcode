var removeElement = function(nums, val) {
    let counter = 0;

    const filteredArray = nums.filter((num) => {
        if(num === val) {
            return false;
        }
        counter++;
        return true;
    });

    nums.splice(0, nums.length, ...filteredArray);
    return counter;
};