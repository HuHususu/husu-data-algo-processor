function towSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const thatNum = target - nums[i];
        if (map.has(thatNum)) {
            return [map.get(thatNum), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(towSum([2, 7, 11, 15], 9))