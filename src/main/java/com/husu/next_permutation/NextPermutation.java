package com.husu.next_permutation;

import java.util.Arrays;

/**
 * @author huyong(husu)
 * @date 5/29/2024 2:32 PM
 */
public class NextPermutation {
    public static void main(String[] args) {
        int[] nums = {3, 2, 1};
        nextPermutation(nums);
        for (int num : nums) {
            System.out.print(num + " ");
        }
    }

    public static void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        if (i == -1) {
            Arrays.sort(nums);

            return;
        }

        int k = i;

        while (k < nums.length - 1 && nums[k + 1] > nums[i]) {
            k++;
        }

        int temp = nums[k];
        nums[k] = nums[i];
        nums[i] = temp;

        int start = i + 1;
        int end = nums.length - 1;

        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
