class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numObj = {};

        for(let num of nums){
            console.log(num);
            console.log(numObj[num]);

            if(numObj[num] != null || numObj[num] != undefined){
                return true;
            }
            numObj[num] = num;
        }
        return false;
    }
}
