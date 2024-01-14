/*Iteración #1: Usa includes
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
​
Iteración #2: Condicionales avanzados
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
( Mirar abajo en pistas ).
Puedes usar este array para probar tu función:
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

Para añadir nueva propiedad a un objeto podéis hacerlo de esta forma mas sencilla:
objeto.isApproved =true


//donde objeto es el objeto que recorremos (cada alumno en nuestro caso)

//isApproved --- es la propiedad queremos definir o modificar 

// true ---- es el valor que le asignamos a la propiedad 


/////---------Ejemplo-----------

colegios = [
    {name: 'Pilarica', Clase1: 100, Clase1: 80, Clase1: 10}, 
		{name: 'Lorica', Clase1: 89, Clase1: 50, Clase1: 40},	
]

/* recorremos el array de objetos con un forEach para quedarnos en cada uno
de los elementos

colegios.forEach((colegios)=>{
	//le añadimos la propiedad nueva llamada "pintada" y el valor = true
	colegios.pintada = true;
})

console.log(colegios);

// -------- CONSOLE--------------

{ name: 'Pilarica', Clase1: 10, pintada: true },
{ name: 'Lorica', Clase1: 40, pintada: true }

*/
