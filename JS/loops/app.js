//!Iteración #1: Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
	"Camiseta de Pokemon",
	"Pantalón coquinero",
	"Gorra de gansta",
	"Camiseta de Basket",
	"Cinrurón de Orión",
	"AC/DC Camiseta",
];

//? with .filter() and includes() method, short form.
let tShirtOnlyArray = products.filter((product) =>
	product.includes("Camiseta")
); // implicid return no {} because is all in one line

//? with .filter() and includes() method, long form.
const filterProducts = products.filter((products) => {
	return products.includes("Camiseta");
});

//? with .filter() and == operator
const filterProductss = products.filter((products) => {
	return products == "Camiseta";
});

//? `for ... of` loop combined with `includes()` method
let newProductList = [];

for (const product of products) {
	if (product.includes("Camiseta")) {
		newProductList.push(product);
	}
}

console.log("Iteración #1 🚀 ~ newProductList:", newProductList);

//!Iteración #2: Condicionales avanzados
/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
añade la propiedad isApproved a true o false en consecuencia. */

const alumns = [
	{ name: "Pepe Viruela", T1: false, T2: false, T3: true },
	{ name: "Lucia Aranda", T1: true, T2: false, T3: true },
	{ name: "Juan Miranda", T1: false, T2: true, T3: true },
	{ name: "Alfredo Blanco", T1: false, T2: false, T3: false },
	{ name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumn) => {
	if (
		(alumn.T1 && alumn.T2) ||
		(alumn.T2 && alumn.T3) ||
		(alumn.T1 && alumn.T3)
	) {
		alumn.isApproved = true;
	} else {
		alumn.isApproved = false;
	}
	console.log("Iteración #2 🚀 ~ alumns.forEach ~ alumns:", alumn.isApproved);
});

//! Iteración #3: Probando For...of
/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. */

const placesToTravel1 = [
	"Japon",
	"Venecia",
	"Murcia",
	"Santander",
	"Filipinas",
	"Madagascar",
];

for (const placeElement of placesToTravel1) {
	console.log(placeElement);
}

//! Iteración #4: Probando For...in
/* Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:. */

const alien = {
	name: "Wormuck",
	race: "Cucusumusu",
	planet: "Eden",
	weight: "259kg",
};

for (alienKey in alien) {
	console.log("Iteración #4 🚀 ~ alien:", alien[alienKey]);
}

//? with method `object.entries()`
result = Object.entries(alien);
console.log("🚀 ~ result:", result);

//! Iteración #5: Probando For
/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array: */

const placesToTravel = [
	{ id: 5, name: "Japan" },
	{ id: 11, name: "Venecia" },
	{ id: 23, name: "Murcia" },
	{ id: 40, name: "Santander" },
	{ id: 44, name: "Filipinas" },
	{ id: 59, name: "Madagascar" },
];

let newPlaces = {};

for (const place of placesToTravel) {
	if (place.id !== 11 && place.id !== 40) {
		if (!newPlaces[place.name]) {
			newPlaces[place.name] = 0;
		}
		newPlaces[place.name]++;
	}
}

console.log("🚀 ~ newPlaces:", newPlaces);

/*
    const myFunction = (param) => {
    let newArray = placesToTravel1.filter((place) => place.id !== 11 && place.id !== 40);
    return newArray;
  };
  
  const result = myFunction(placesToTravel);
  console.log(result);
*/

//!Iteración #6: Mixed For...of e includes
/**Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 * Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array: */

//! Iteración #7: For...of avanzado
/**
 * Usa un bucle for...of para recorrer todos los juguetes y
 * añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
 */

const popularToys1 = [];
const toys = [
	{ id: 5, name: "Buzz MyYear", sellCount: 10 },
	{ id: 11, name: "Action Woman", sellCount: 24 },
	{ id: 23, name: "Barbie Man", sellCount: 15 },
	{ id: 40, name: "El gato con Guantes", sellCount: 8 },
	{ id: 40, name: "El gato felix", sellCount: 35 },
];
