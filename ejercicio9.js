const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let numTotal = 0;
  for(let i = 0;i < numberList.length; i++) {
    let number = numberList[i];
    if (number > 0) {
      numTotal = numTotal + number;
    }
  }
  return numTotal;
}

console.log(sumNumbers(numbers));