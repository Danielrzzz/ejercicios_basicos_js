const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sumTotal = 0;
    let promedio = 0
    for (let i = 0;i < list.length; i++) {
        if(typeof list[i] === "string") {
            sumTotal = list[i].length + sumTotal;
        } else {
            sumTotal = list[i] + sumTotal;
        }
    }
    promedio = sumTotal / list.length;
    return promedio;
}

console.log(averageWord(mixedElements));