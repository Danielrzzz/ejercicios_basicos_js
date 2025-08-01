const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    let repWords = {};
    for(let i = 0;i < list.length; i++) {
        let word = list[i];
        if (repWords[word]) {
            repWords[word] = repWords[word] + 1;
        } else {
            repWords[word] = 1;
        }
    }
    return repWords;
}
console.log(repeatCounter(words));