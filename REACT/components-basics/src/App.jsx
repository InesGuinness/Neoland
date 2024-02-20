import "./App.css";
import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";

const App = () => {
	return (
		<div>
			{/* When you write <Title />, it's equivalent to <Title></Title>. Both syntaxes create an instance of the Title component. */}
			<Title></Title>
			<Subtitle></Subtitle>
			<Image></Image>
			<Paragraph></Paragraph>
		</div>
	);
};

export default App;
