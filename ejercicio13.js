const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
    let validate = false;
    for(let i = 0;i < nameList.length; i++){
        if (name === nameList[i]) {
            console.log(nameList.indexOf(nameList[i]));
            return true;
        }
    }
    return false;
}
console.log(nameFinder(names, 'Marc'));