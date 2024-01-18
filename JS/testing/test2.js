const comidas = ["sandia", "paella", "lentejas", "ensalada"];

for (let i = 0; i < comidas.length; i++) {
  console.log(`La comida ${comidas[i]} tiene el index ${i}`);
}

/**
 * Ejercicio de buscador de comidas
 */

const buscarComida = (arrayDeComidas, comidaABuscar) => {
  let acc = 0;
  for (let i = 0; i < arrayDeComidas.length; i++) {
    arrayDeComidas[i].toLowerCase().trim() ===
      comidaABuscar.toLowerCase().trim() //&& acc++;
  }

  return acc === 0
    ? `No se encuentra la comida`
    : `La comida se encuentra con el numero de veces: ${acc}`;
};

const resultadoBusqueda = buscarComida(comidas, "Paella   ");
console.log("🚀 ~ resultadoBusqueda:", resultadoBusqueda);