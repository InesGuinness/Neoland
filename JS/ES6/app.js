//!Iteración #1: Arrows
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */

const myFunction = (a = 10, b = 5) => {
	const sum = a + b;
	console.log("Iteración #1 🚀 ~ myFunction ~ sum:", sum);
};

result1 = myFunction();
result2 = myFunction(1);
result3 = myFunction(1, 1);

//! Iteración #2: Destructuring
/* 2.1 crea variables en base a las propiedades del objeto usando object destructuring
e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.*/

const game = {
	title: "The last us 2",
	gender: ["action", "zombie", "survival"],
	year: 2020,
};

const { title, gender, year } = game;
console.log("Iteración #2 2.1 🚀 ~ title:", title);
console.log("Iteración #2 2.1 🚀 ~ gender:", gender);
console.log("Iteración #2 2.1 🚀 ~ year:", year);

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log("Iteración #2 2.2 🚀 ~ fruit3:", fruit3);
console.log("Iteración #2 2.2 🚀 ~ fruit2:", fruit2);
console.log("Iteración #2 2.2 🚀 ~ fruit1:", fruit1);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
	return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log("Iteración #2 2.3 🚀 ~ race:", race);
console.log("Iteración #2 2.3 🚀 ~ name:", name);

/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };
const { name2, itv } = car;
console.log("Iteración #2 2.4 🚀 ~ car:", car);
const [yr1, yr2, yr3] = itv;
console.log("Iteración #2 2.4 🚀 ~ itv:", itv);

//! Iteración #3: Spread Operator
// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log("Iteración #3 3.1 🚀 ~ pointsListCopy:", pointsListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy };
console.log("Iteración #3 3.2 🚀 ~ toyCopy:", toyCopy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const newListCombined = [...pointsList1, ...pointsLis2];
console.log("Iteración #3 3.3 🚀 ~ newListCombined:", newListCombined);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fusedToy = {
	...toy1,
	...toyUpdate,
};

console.log("Iteración #3 3.4 🚀 ~ fusedToy:", fusedToy);

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
// slice position 2 by starting the index and then indicating end of index like (0,2)
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("Iteración #3 3.5 🚀 ~ newColors:", newColors);

//! Iteración #4: Map
// 4.1 Dado el siguiente array, devuelve un array con sus nombres. utilizando .map().

const users = [
	{ id: 1, name: "Abel" },
	{ id: 2, name: "Julia" },
	{ id: 3, name: "Pedro" },
	{ id: 4, name: "Amanda" },
];

const newUsersArray = users.map((user) => user.name);
console.log("Iteración #4 4.1 🚀 ~ newArray:", newUsersArray);

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.*/

const modifiedUsers = users.map((user) => {
	// Check if the name contains 'A'
	if (user.name.includes("A")) {
		// If it does, replace 'A' with 'Anacleto'
		return { ...user, name: user.name.replace(user.name, "Anacleto") };
	} else {
		// If it doesn't contain 'A', keep the original user object
		return user;
	}
});
console.log(
	"Iteración #4 4.2 🚀 ~ modifiedUsers ~ modifiedUsers:",
	modifiedUsers
);

//! 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
