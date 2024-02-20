import "./App.css";
import Image from "./components/Image/Image";
import Title from "./components/Title/Title";
import TitleWithImage from "./components/TitleWithImage/TitleWithImage";

const App = () => {
	return (
		<TitleWithImage>
			<Title></Title>
			<Image></Image>
		</TitleWithImage>
	);
};
export default App;
