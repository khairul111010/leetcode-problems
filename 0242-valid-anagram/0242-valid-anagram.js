/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }

    const dict = {}

    for(const char of s){
        dict[char] = (dict[char] || 0) + 1
    }
    for(const char of t){
        if(!dict[char]){
            return false
        }
        dict[char]--
    }
    return true
};