import "./App.css";

/**
 * - Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como key={index} .
 */

const App = () => {
	const Elements = ["Element 1", "Element 2", "Element 3"];
	// array to store JSX elements that will be rendered
	const renderedElements = [];

	// function with two parameters, the individual elements and the index
	Elements.forEach((element, i) => {
		// here we crete a div element with key set to i, this is necesary when you render arrays in react
		renderedElements.push(<div key={i}>{element}</div>);
	});
	// this line returns JSX content to be rendered
	return (
		<div>
			<h1>{renderedElements}</h1>
		</div>
	);
};

export default App;
