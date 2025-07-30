const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let longestWord = "";
    for(let i = 0;i < stringList.length; i++){
        let avenger = stringList[i];
        if (avenger.length > longestWord.length) {
            longestWord = avenger;
        }
    }
    return longestWord;
}
console.log(findLongestWord(avengers));