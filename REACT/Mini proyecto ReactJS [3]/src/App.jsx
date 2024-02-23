import "./App.css";
import { HOBBIES } from "./Components/HOBBIES/Hobbies";
import { Read } from "./Components/Read";

const App = () => {
	const { read } = HOBBIES;

	return (
		<>
			<Read read={read.title}></Read>
		</>
	);
};

export default App;
