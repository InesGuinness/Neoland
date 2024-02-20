import "./App.css";

/**
 * Mappea un array de objetos para pintarlos.
 */

const App = () => {
	const Objects = [
		{ key1: "apple", key2: "pear" },
		{ key1: "banana", key2: "melon" },
	];

	const renderObjects = Objects.map((Object, i) => {
		return (
			// ${Object.key1}: This refers to the value of the key1
			<div key={`${i}-${Object.key1}-${Object.key2}`}>
				<h3>{Object.key1}</h3>
				<h3>{Object.key2}</h3>
			</div>
		);
	});

	return renderObjects;
};

export default App;
