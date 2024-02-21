import React from "react";
// import { useState } from "react";
import "./App.css";

const App = () => {
	const [characterList, setCharacterList] = React.useState([]);
	// useEffect tipo 1
	React.useEffect(() => {
		(async () => {
			let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
				(res) => res.json().catch((error) => error)
			);

			setCharacterList(data.results);
		})();
	}, []);

	return (
		<>
			{characterList.map((character) => {
				if (character.status === "Alive") {
					return (
						<div key={character.id}>
							<h2>{character.name}</h2>
							<p>{character.id} </p>
							<img src={character.image} alt={character.name} />
							<p>{character.location.name}</p>
						</div>
					);
				}
				return null;
			})}
		</>
	);
};

export default App;
