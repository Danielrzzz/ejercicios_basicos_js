const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let promedio = 0;
    let total = 0;
    for(let i = 0;i < numberList.length;i++) {
        total = total + numberList[i];
    }
    promedio = total / numberList.length;
    return promedio;
}
console.log(average(numbers));