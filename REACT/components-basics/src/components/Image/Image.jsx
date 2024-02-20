import "./Image.css";

/**
 * Componente Image ⇒ Crea un componente que retorne un <image> y en su interior podéis seleccionar cualquier imagen de ReactJS.
 */

const Image = () => {
	const imageUrl =
		"https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png";

	return <img src={imageUrl} alt="ReactJS Logo" />;
};

export default Image;
