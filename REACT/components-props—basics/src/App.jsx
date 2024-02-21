import {
	Footer,
	Header,
	Image,
	Main,
	Subtitle,
	Title,
} from "./components/index";

const App = () => {
	const descripcion = "hola mundo";
	const textoTitulo =
		"Lotería de Navidad en tiempos de Inteligencia Artificial";
	return (
		<>
			<Header />
			<Main>
				<Title title={textoTitulo} />
				<Image></Image>
				<Subtitle texto={descripcion} />
			</Main>
			<Footer />
		</>
	);
};
export default App;
