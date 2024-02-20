import "./App.css";

/**
 * Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
 */

const App = () => {
	// comienza la definicion del componente

	const hora = 20;

	const dia = <h1>Good morning</h1>;
	const tarde = <h1>Good afternoon</h1>;
	const noche = <h1>Good night</h1>;

	// bloque de retorno del componente ternary or conditional operator uses ? to call : to separate and &&|| to logic condition
	return (
		<>
			{hora >= 6 && hora < 12
				? dia // between 6 and 12 then value "dia"
				: hora >= 12 && hora < 20
				? tarde // between 12 and 20 then return value "tarde"
				: noche}
		</>
	); //  Cierra el bloque de retorno del componente
}; // Cierra la definición del componente de función App

export default App;
