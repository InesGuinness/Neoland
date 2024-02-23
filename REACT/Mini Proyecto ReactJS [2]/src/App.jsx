import "./App.css";
import {
	CharacterList,
	Header,
	Image,
	ListUl,
	Main,
	P,
	SubTitle,
} from "./components";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";
import { ListLi } from "./components/ListLi";

export const App = () => {
	const Text = "Lista de characters de Ricky & Morthy";
	const pText = "Created with 💜 by Ines ";
	const Copyright = "Copyright © 2024";
	return (
		<>
			<Header>
				<Title title={Text} />
			</Header>
			<Main>
				<SubTitle subTitle={Text} />
				<P texto={Text} />
				<Image
					src={
						"https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png"
					}
					width={300}
					height={200}
					alt="Image description"
				/>
				<ListLi>
					<CharacterList></CharacterList>
				</ListLi>
				<ListUl></ListUl>
			</Main>
			<Footer>
				<P texto={pText}></P>
				<P texto={Copyright}></P>
			</Footer>
		</>
	);
};

export default App;
