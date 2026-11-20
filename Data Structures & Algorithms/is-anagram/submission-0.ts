class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sortedString1 = s.split("").sort().join();
        let sortedString2 = t.split("").sort().join();

        return sortedString1 === sortedString2;
    }
}
