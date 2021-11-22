/*A sentence can be shuffled by appending the 1-indexed word position to each word 
then rearranging the words in the sentence. 
 */
var sortSentence = function(sentence) {
    const wordArr = sentence.split(" ")
    const sortedArr = new Array(wordArr.length - 1) //created a new array of length same as of words array
    for (let item of wordArr) {
        let index = item[item.length - 1] - 1 //to get index at which word needs to be placed
        let word = item.slice(0, item.length - 1) //to get the word 
        sortedArr[index] = word
    }
    return sortedArr.join(" ") // returns converted array into string
};