import React from "react";
import Cardd from "./Cardd";

export const CharacterList = () => {
	const [characterList, setCharacterList] = React.useState([]);
	React.useEffect(() => {
		(async () => {
			let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
				(res) => res.json()
			);

			setCharacterList(data.results);
		})();
	}, []);

	return (
		<>
			{characterList.map((character) => (
				<Cardd key={character.id} character={character} />
			))}
		</>
	);
};
