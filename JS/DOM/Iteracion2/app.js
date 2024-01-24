//!Iteración #2: Modificando el DOM
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

//? ---- createElement
// creamos
const newDiv = document.createElement("div");
// se le da contenido
document.body.appendChild(newDiv);

//?---- Template String
/*const template = `<div></div>`;
const templateArrow = () => `<div></div>`;
document.body.innerHTML += template;
document.body.innerHTML += templateArrow();*/

document.body.innerHTML += `<div></div>`;

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//? creamos
const segundoDiv = document.createElement("div");
const newP = document.createElement("p");

//? añadimos texto al p
newP.textContent = "¿pero usted quien es?";

//? añadimos el p al div
segundoDiv.appendChild(newP);
document.body.appendChild(segundoDiv);

//?---- Template String
const templateExample = () => `
	<div>
		<p> ¿Quien es usted? </p>
	</div>
`;

document.body.innerHTML += templateExample();

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divWithSixP = document.createElement("div");

for (let i = 0; i < 6; i++) {
	const newParagraph = document.createElement("p");
	newParagraph.textContent = `Esto es el párrafo ${i + 1}`;

	divWithSixP.appendChild(newParagraph);
}

document.body.appendChild(divWithSixP);

/*
2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/
