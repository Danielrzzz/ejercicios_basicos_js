const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

    let olderUser = []; //he creado dos arrays para almacenar los valores y que se pueda ver en dos bloques completos sin que se repita el texto "Usuarios menores de edad:"... "Usuarios menores de edad:"...
    let youngerUser = [];

for (let user of users) {
    if(user.years >= 18){
        olderUser.push(user);
    } else {
        youngerUser.push(user);
    }
}
console.log("Usuarios menores de edad: ", youngerUser);
console.log("Usuarios mayores de edad: ", olderUser);
