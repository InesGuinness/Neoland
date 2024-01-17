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

//? with .filter() and == operator 
let newProductList = [];

for (const product of products) {
    if (product.includes("Camiseta")) {
        newProductList.push(product);
    }
}

console.log("🚀 ~ newProductList:", newProductList);

