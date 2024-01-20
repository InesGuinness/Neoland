//!Iteración #1: Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'] 

//? with .filter() and includes() method, short form.  
let tShirtOnlyArray = products.filter(product => product.includes("Camiseta")); // implicid return no {} because is all in one line 

//? with .filter() and includes() method, long form.
const filterProducts = products.filter((products)=> {
    return products.includes("Camiseta")
})

//? with .filter() and == operator 
const filterProductss = products.filter((products)=> {
    return products == "Camiseta"
})

//? `for ... of` loop combined with `includes()` method
let newProductList = [];

for (const product of products) {
    if (product.includes("Camiseta")) {
        newProductList.push(product);
    }
}

console.log("🚀 ~ newProductList:", newProductList);

//!Iteración #2: Condicionales avanzados
/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
añade la propiedad isApproved a true o false en consecuencia. */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
  ]

  alumns.forEach((alumn) => {
    if ((alumn.T1 && alumn.T2) || (alumn.T2 && alumn.T3) || (alumn.T1 && alumn.T3)) {
      alumn.isApproved = true;
    } else {alumn.isApproved = false}
    console.log("🚀 ~ alumns.forEach ~ alumns:", alumn.isApproved)
  });

//! Iteración #3: Probando For...of
/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const placeElement of placesToTravel) {
    console.log(placeElement);
  }

//! Iteración #4: Probando For...in
/* Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:. */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (alienKey in alien) {
console.log("🚀 ~ alien:", alien[alienKey])
}


/* PROBANDO METODOS PARA OBJECTOS
result = Object.entries(alien) 
console.log("🚀 ~ result:", result)
*/

//! Iteración #5: Probando For 
/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array: */


  /*

    const myFunction = (param) => {
    let newArray = placesToTravel1.filter((place) => place.id !== 11 && place.id !== 40);
    return newArray;
  };
  
  const result = myFunction(placesToTravel1);
  console.log(result);
*/

