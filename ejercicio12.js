const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
        let repWord = list.filter((Item, index) => {
            return list.indexOf(Item) === index});
            return repWord;
}
console.log(removeDuplicates(duplicates));