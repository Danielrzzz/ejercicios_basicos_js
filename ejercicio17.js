const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (let atributes in alien) {
    console.log("La propiedad " + atributes + " tiene como valor: " + alien[atributes]);
}