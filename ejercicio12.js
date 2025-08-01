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
    for (let i = 0;i < list.length;i++) {
        let repWord = list.filter((Item, index) => {
            return list.indexOf(Item) !== index});
    }
}
console.log(removeDuplicates(duplicates));