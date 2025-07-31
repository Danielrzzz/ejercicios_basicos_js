const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let numTotal = 0;
  for(let i = 0;i < numberList.length; i++) {
    numTotal = numTotal + numberList[i];
  }
  return numTotal;
}

console.log(sumNumbers(numbers));