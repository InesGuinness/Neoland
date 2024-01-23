//! Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.

const sum = (numberOne, numberTwo) => {
	if (numberOne > numberTwo) {
		console.log(`Resultado de la iteración 1: ${numberOne}`);
	} else {
		console.log(`Resultado de la iteración 1: ${numberTwo}`);
	}
};

let numberOne = 2;
let numberTwo = 6;

let resultIteration1 = sum(numberOne, numberTwo);

//!Iteración #2: Buscar la palabra más larga
/*Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
	"Hulk",
	"Thor",
	"IronMan",
	"Captain A.",
	"Spidermannnnn",
	"Captain M.",
];

const findLongestWord = (paramArray) => {
	let lgth = 0;
	let longest = "";
	for (let item of paramArray)
		if (item.length > longest.length) {
			let lgth = item.length;
			longest = item;
		}
	return longest;
};

let resultIteration2 = findLongestWord(avengers);
console.log(`Resultado de la iteración 2: ${resultIteration2}`);

/* 

const findLongestWord = (param) => {
  let lgth = 0 
  let longest = "" // Initialize a variable to store the longest word
  for (let i = 0 ; i < avengers.length; i++) // Iterate through each word in the array
    if (avengers[i].length > longest.length) {   // Check if the current word is longer than the current longest word
      let lgth = avengers[i].length  
      longest = avengers[i];
      // console.log(lgth)  
      }
      return longest
    }

    let resultIteration2 = findLongestWord(avengers)
    console.log(`Resultado de la iteración 2: ${resultIteration2}`)

    */

//!Iteración #3: Calcular la suma
/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función: */
//? prueba usar "reduce()""

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = numbers.reduce(
	(accumulator, currentvalue) => accumulator + currentvalue
);
console.log(`Resultado de la iteración 3: ${sumAll}`);

/*
const sumAll = (paramArray) => {
	let sum = 0;
	for (let number of paramArray) {
		sum += number;
	}
	return sum;
};
const resultIteration3 = sumAll(numbers);
console.log(`Resultado de la iteración 3: ${resultIteration3}`);


const sumAll = (param) => {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

*/
//! Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numberss = [12, 21, 38, 5, 45, 37, 6];

const calculateAverage = numberss.reduce(
	(number, numberss) => number + numberss / numberss,
	0
);
console.log(`Resultado de la iteración 4: ${calculateAverage}`);

/**
 const calculateAverage = (paramArray) => {
	let sumResult = 0;
	for (let number of paramArray) {
		sumResult += number;
	}
	return sumResult;
};

let resultCalculateAverage = calculateAverage(numberss);

 */

/**
 * const sum1 = (param) => {
    let sumResult = 0 
    for (let i = 0; i < numberss.length; i++){
        sumResult += numberss[i]
    }
    return sumResult }

    let resultSum1 = sum1(numberss)

 */

//!Iteración #5: Calcular promedio de strings
/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario 
cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (paramArray) => {
	let sumNumbers = 0;
	let sumStrings = 0;
	let counterString = 0;

	for (let item of paramArray) {
		if (typeof item === "number") {
			sumNumbers += item;
		} else {
			counterString++;
			sumStrings += item.length;
		}
	}
	return [sumNumbers, sumStrings];
};

let result = averageWord(mixedElements);
console.log(`Resultado de la iteración 5: ${result}`);

/**
 * const averageWord = (array) => {
    let sumNumbers = 0
    let sumStrings = 0
    let counterString = 0
 
for (let i = 0; i < array.length; i++) { 
  if (typeof array[i] === "number"){
        sumNumbers += array[i]; 
  } else {
    counterString++ 
    sumStrings += array[i].length
        }
  }
  return [sumNumbers, sumStrings]
}

let result = averageWord(mixedElements)
 */

//!Iteración #6: Valores únicos
/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. */

const duplicates = [
	"sushi",
	"pizza",
	"burger",
	"potatoe",
	"pasta",
	"ice-cream",
	"pizza",
	"chicken",
	"onion rings",
	"pasta",
	"soda",
];

const newArray = [];

duplicates.forEach((itemsss) => {
	// --> use method() `for each` to iterate through array `duplicated.`
	if (!newArray.includes(itemsss)) {
		// --> IF its not included in `itemsss`
		newArray.push(itemsss); // --> THEN push `itemsss` in new array
	}
});

console.log("🚀 ~ newArray:", newArray);

/** 
    for (let i = 0; i < duplicates.length; i++) {
      if (!newArray.includes(duplicates[i])){
        newArray.push(duplicates[i]);
      }
    }
return newArray
}

let resultIteration6 = removeDuplicates(duplicates)
console.log("🚀 ~ resultIteration6:", resultIteration6)

//!Iteración #7: Valores únicos
/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.*/

const nameFinder = [
	"Peter",
	"Steve",
	"Tony",
	"Natasha",
	"Clint",
	"Logan",
	"Xabier",
	"Bruce",
	"Peggy",
	"Jessica",
	"Marc",
];

let nameToSearch = "Peggy";

const findTrueAndPosition = (nameFinder, nameToSearch) => {
	// let nameFound = nameToSearch[i]
	for (let i = 0; i < nameFinder.length; i++)
		if (nameFinder[i] === nameToSearch) {
			//result = "true" && nameFinder.nameToSearch[i] }
			result = { found: true, position: i };
		}
	return result;
};

resultadoIteración7 = findTrueAndPosition(nameFinder, nameToSearch);
console.log("🚀 ~ resultadoIteración7:", resultadoIteración7);

//! Iteración #8: contador de repeticiones
/**
 * Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
 */

const counterWords = [
	"code",
	"repeat",
	"eat",
	"sleep",
	"code",
	"enjoy",
	"sleep",
	"code",
	"enjoy",
	"upgrade",
	"code",
];
const repeatCounter = (param) => {};
