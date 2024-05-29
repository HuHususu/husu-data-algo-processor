function nextPermutation(nums) {
    // Step 1: Find the first decreasing element from the end
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the first element larger than nums[i] from the end
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Swap elements at i and j
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the elements after index i
    reverse(nums, i + 1, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Example usage:
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]

nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums); // Output: [1, 2, 3]

nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums); // Output: [1, 5, 1]
