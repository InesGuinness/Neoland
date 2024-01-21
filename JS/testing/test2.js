const persona = {
	nombre: "Juan",
	edad: 30,
	direccion: {
		ciudad: "Bogotá",
		pais: "Colombia",
	},
};

const {
	nombre,
	edad,
	direccion: { ciudad },
} = persona;
console.log(nombre); // imprime 'Juan'
console.log(edad); // imprime 30
console.log(ciudad); // imprime 'Bogotá'
