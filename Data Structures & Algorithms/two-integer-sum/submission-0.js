class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            // find how much we need
            const complement = target - nums[i];

            // check if we have seen it before
            if (map.has(complement)) return [map.get(complement), i];

            // set if we din't match the condition {value:index}
            map.set(nums[i], i);
        }

        return [];
    }
}
