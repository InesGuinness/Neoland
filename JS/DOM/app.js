//! Iteración #1: Interacción con el DOM
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const botonShowMe = document.querySelector(".showme");
console.log("🚀 ~ botonShowMe:", botonShowMe);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");
console.log("🚀 ~ h1:", h1);

//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll("p");
console.log("🚀 ~ p:", p);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemons = document.getElementsByClassName("pokemon");
console.log("🚀 ~ pokemons:", pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const elementosConAtributo = document.querySelectorAll(
	'[data-function="testMe"]'
);
console.log("🚀 ~ elementosConAtributo:", elementosConAtributo);

/** 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

const tercerElemento = elementosConAtributo[2];
console.log(tercerElemento);
