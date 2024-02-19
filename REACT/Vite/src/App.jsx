import './App.css'
/**
 * 2 - Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
 */

  // const App = () => {
  //   // comienza la definicion del componente 

  //   const hora = 20;
  //     const dia = <p>Good morning</p>;
  //     const tarde = <p>Good afternoon</p>;
  //     const noche = <p>Good night</p>;
  
  //   // bloque de retorno del componente
  //   return (
  //     <>
  //           {hora >= 6 && hora < 12 ? dia : hora >= 12 && hora < 20 ? tarde : noche}
  //     </>
  //   ); //  Cierra el bloque de retorno del componente
  // };// Cierra la definición del componente de función App
  

/**
 * 3 - Recorrer los elementos de un array y renderizalos ⇒ 
 * Si os da un error de keys en la consola podéis usar el index como key={index} .
 */


const App = () => {

  const Elements = ["Element 1","Element 2", "Element 3" ];
  // array to store JSX elements that will be rendered 
  const renderedElements = [];
  
  // function with two parameters, the individual elements and the index 
  Elements.forEach((element, i) => {
    // here we crete a div element with key set to i, this is necesary when you render arrays in react 
    renderedElements.push(<div key={i}>{element}</div>);
  })
  // this line returns JSX content to be rendered 
  return <div><h3>{renderedElements}</h3></div>

}

/**
 * 4 - Mappea un array de objetos para pintarlos.
 */

/**
 * 5 - Mappea un array de objetos para pintarlos.
 */



//---------------------- EXPORT 

export default App 
