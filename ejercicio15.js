const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function hasWord(list) {   
    for(let i = 0;i < list.length;i++){
        let product = list[i];
        if(product.includes("Camiseta")) {
        console.log(product);
        }
    }
}
    console.log(hasWord(products));