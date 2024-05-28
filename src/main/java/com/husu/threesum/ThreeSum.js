function threeSum(nums) {
    let results = [];
    nums.sort((a, b) => a - b);  // 将数组排序

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;  // 避免重复
        }

        let left = 0, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;  // 跳过重复
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;  // 跳过重复
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}

// 示例
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));  // 输出: [[-1, -1, 2], [-1, 0, 1]]
