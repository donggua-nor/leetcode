/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.52%)
 * Likes:    43690
 * Dislikes: 1431
 * Total Accepted:    9M
 * Total Submissions: 18.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 *
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time
 * complexity?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length

  // for (let i = 0; i < len; i++) {
  //   const other = nums.findIndex((child, index) => index !== i && child === target - nums[i])
  //   if (other > -1) {
  //     return [i, other]
  //   }
  // }

  const map = new Map()
  let i = 0

  while (i < len) {
    const diff = target - nums[i]

    if (map.has(diff)) {
      return [map.get(diff), i]
    }

    map.set(nums[i], i)
    i++
  }
}
// @lc code=end

module.exports = { twoSum }
