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

  // if T1, T2, T3, have at least two true then isApproved is true 
  
  alumns.forEach((alumns)=>{
    alumns.isApproved = true // true or false depending on a condition 
  })
  
  console.log("🚀 ~ alumns:", alumns)

// if at least two "true" inside an object then print isApproved

//donde objeto es el objeto que recorremos (cada alumno en nuestro caso)

//isApproved --- es la propiedad queremos definir o modificar 

// true ---- es el valor que le asignamos a la propiedad 