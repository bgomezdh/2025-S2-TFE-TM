let ciudades = ["Paris", "Caba", "Cordoba", "Roma"];

for (let i = 0; i < ciudades.length; i++) {
  /*  console.log(ciudades[i]); */
}

for (let i = 0; i < ciudades.length; i++) {
  const element = ciudades[i];
/*   console.log(element); */
}

let autos = [
  {
    marca: "Toyota",
    color: "Rojo",
    petente: "45HJJH54",
    annio: 2023,
  },
  {
    marca: "Ford",
    color: "Azul",
    petente: "4K5JKJ54",
    annio: 2025,
  },
  {
    marca: "FIAT",
    color: "Gris",
    petente: "5KJ4KJ54",
    annio: 2020,
  },
];


for (let i = 0; i < autos.length; i++) {
    const element = autos[i];
    console.log(`El auto en la iteración #${i +1} es un ${element.marca}`);
    
}
