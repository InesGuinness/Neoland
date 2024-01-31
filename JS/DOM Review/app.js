/** 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

// Create an unordered list element
const ulList = document.createElement("ul");

countries.forEach((country) => {
	// Create a list item for each country
	const liElement = document.createElement("li");

	// Set the text content of the list item to the country name
	liElement.textContent = country;

	// Append the list item to the unordered list
	ulList.appendChild(liElement);
});

// Append the unordered list to the body of the document
document.body.appendChild(ulList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove = document.querySelector(".fn-remove-me");
remove.remove();

/** 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const listaUl = document.createElement("ul");
listaUl.setAttribute("data-function", "printHere");

cars.forEach((car) => {
	const listaIl = document.createElement("il");
	listaIl.textContent = car;
	listaUl.appendChild(listaIl);
});

document.body.appendChild(listaUl);

/**1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries2 = [
	{ title: "title 1", imgUrl: "https://picsum.photos/300/200?random=1" },
	{ title: "title 2", imgUrl: "https://picsum.photos/300/200?random=2" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
	{ title: "Random 4", imgUrl: "https://picsum.photos/300/200?random=5" },
];

countries2.forEach((country) => {
	const dynamicListHtml = `
        <div>
            <h4>${country.title}</h4>
            <img src="${country.imgUrl}" alt="${country.title}">
        </div>
    `;

	document.body.insertAdjacentHTML("beforeend", dynamicListHtml);
});

/** 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const newButton = `
    <button id="removeButton">Remove last element</button>
`;

document.body.insertAdjacentHTML("beforeend", newButton);

document.getElementById("removeButton").addEventListener("click", () => {
	// Remove the last element from the countries2 array
	countries2.pop();

	// Remove the last div from the DOM
	const lastDiv = document.querySelector("div:last-child");
	if (lastDiv) {
		lastDiv.remove();
	}
});

/** 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

/*dynamicListHtml.forEach(div) => {

	newButton document.body.insertAdjacentHTML("beforeend", newButton);

} */
