/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
    let i = 0;
    const n = word.length;

    while(i < n){
        const char = word[i]
        let count = 1;
         
        while(i+count < n && word[i+count] === char && count < 9){
            count++;
        }

        comp += count + char;

        i+=count;
    }

    return comp;
};