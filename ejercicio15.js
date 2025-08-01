const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function hasWord(list) {
let group = {};    
for(let i = 0;i < list.length;i++ ){
        let product = list[i];
        if(list.includes("Camiseta")) {
            group[product] = group[product] + 1
        } else {
            group[product]
        }
    }
    return group;
}
    console.log(hasWord(products));