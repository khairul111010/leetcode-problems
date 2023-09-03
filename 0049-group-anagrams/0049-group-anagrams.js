/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const group = {}
    for(const word of strs){
        let newWord = word.split('').sort().join('')
        if(!group[newWord]){
            group[newWord] = []
        }
        group[newWord].push(word)
    }
    return Object.values(group)
};