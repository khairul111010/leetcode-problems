/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let new_s = s.trim()
    let length = 0
    for(let i = new_s.length - 1; i >= 0; i--){
        length++
        if(new_s[i] === " " || new_s[i] === ""){
            length--
            return length
        }
    }
    return length
};