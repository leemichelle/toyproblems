/* leetcode intersection of two arrays II problem */
var intersect = function(nums1, nums2) {
  let count = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
      if (!count[nums1[i]]) {
          count[nums1[i]] = 1;
      } else {
          count[nums1[i]]++;
      }
  }
  for (let i = 0; i < nums2.length; i++) {
      if (count[nums2[i]]) {
          result.push(nums2[i]);
          count[nums2[i]]--;
      }
  }
  return result;
};