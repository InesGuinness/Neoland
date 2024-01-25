//!Iteración #2: Modificando el DOM

// 2.1 Inserta dinámicamente en un HTML un div vacío con JavaScript.
// Crear un nuevo elemento div y agregarlo al final del cuerpo del documento.
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// Utilizando un string de template para lograr lo mismo.
document.body.innerHTML += `<div></div>`;

// 2.2 Inserta dinámicamente en un HTML un div que contenga un párrafo con JavaScript.
// Crear un nuevo div y un nuevo párrafo, agregar texto al párrafo, y luego agregar el párrafo al div y el div al cuerpo del documento.
const segundoDiv = document.createElement("div");
const newP = document.createElement("p");
newP.textContent = "¿pero usted quién es?";
segundoDiv.appendChild(newP);
document.body.appendChild(segundoDiv);

// Utilizando un string de template para lograr lo mismo.
const templateExample = () => `
	<div>
		<p> ¿Quién es usted? </p>
	</div>
`;
document.body.innerHTML += templateExample();

// 2.3 Inserta dinámicamente en un HTML un div que contenga 6 párrafos utilizando un bucle con JavaScript.
// Crear un nuevo div y agregarle 6 párrafos con texto, luego agregar el div al cuerpo del documento.
const divWithSixP = document.createElement("div");
for (let i = 0; i < 6; i++) {
	const newParagraph = document.createElement("p");
	newParagraph.textContent = `Esto es el párrafo ${i + 1}`;
	divWithSixP.appendChild(newParagraph);
}
document.body.appendChild(divWithSixP);

// Utilizando un bucle y un string de template para lograr lo mismo.
const newDivWithTemplate = document.createElement("div");
for (let i = 0; i < 6; i++) {
	newDivWithTemplate.innerHTML += `<p> Este párrafo número ${i + 1}</p>`;
}
document.body.appendChild(newDivWithTemplate);

// 2.4 Inserta dinámicamente con JavaScript en un HTML un párrafo con el texto 'Soy dinámico!'.
// Crear un nuevo párrafo, agregarle texto y luego agregarlo al cuerpo del documento.
const newPDinamic = document.createElement("p");
newPDinamic.textContent = "I'm dynamic created Element";
document.body.appendChild(newPDinamic);

// Utilizando un string de template para lograr lo mismo.
document.body.innerHTML += `I'm a dynamic string template`;

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// Seleccionar el h2 con la clase .fn-insert-here y cambiar su contenido de texto.
const h2InsertHere = document.querySelector("h2.fn-insert-here");
h2InsertHere.textContent = "Wubba Lubba dub dub";

// 2.6 Basándote en el siguiente array, crea una lista ul > li con los textos del array.
// Crear una lista desordenada (ul) y agregar elementos de lista (li) con el contenido del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ulList = document.createElement("ul");
apps.forEach((app) => {
	const elementLi = document.createElement("li");
	elementLi.textContent = app;
	ulList.appendChild(elementLi);
});
document.body.appendChild(ulList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me.
// Seleccionar todos los elementos con la clase .fn-remove-me y eliminar cada uno de ellos.
const allRemoveMe = document.querySelectorAll(".fn-remove-me");
allRemoveMe.forEach((element) => element.remove());

// 2.8 Inserta un párrafo con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
// Crear un nuevo párrafo, agregarle texto y insertarlo antes del segundo div con la clase .fn-insert-here.
const pVpyEnMedio = document.createElement("p");
pVpyEnMedio.textContent = "voy en medio";
const allDivInsertHere = document.querySelectorAll("div.fn-insert-here");
const secondDiv = allDivInsertHere[1];
document.body.insertBefore(pVpyEnMedio, secondDiv);

// 2.9 Inserta un párrafo con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.
// Seleccionar todos los elementos con la clase .fn-insert-here y agregar un párrafo con texto a cada uno de ellos.
const insertDivs = document.querySelectorAll("div.fn-insert-here");
const templateNewParrafo = () => `<p>Voy dentro!</p>`;
insertDivs.forEach((div) => (div.innerHTML = templateNewParrafo()));
