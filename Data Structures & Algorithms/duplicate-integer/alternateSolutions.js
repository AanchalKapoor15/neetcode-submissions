class Solution {
       hasDuplicateHashsetImplmentation(nums){
        const seen = new Set();

        for(num of nums){
            if(seen.has(num)){
                return true;
            }
            seen.add(num);
        }
        return false;
    }

     hasDuplicateHashsetConciseImplmentation(nums){
         return nums.length > new Set(nums).size;
    }  
}
