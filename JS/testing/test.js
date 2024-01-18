/** Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
 * comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. */


const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

let nameToSearch = "Peggy"

const findTrueAndPosition = (nameFinder, nameToSearch) => {
 // let nameFound = nameToSearch[i]
for (let i = 0; i < nameFinder.length; i++)
  if(nameFinder[i] === nameToSearch){
    //result = "true" && nameFinder.nameToSearch[i] } 
    result = { found: true, position: i };
  }
    return result
  }

  
  resultadoIteración7 = findTrueAndPosition(nameFinder,nameToSearch)
  console.log("🚀 ~ resultadoIteración7:", resultadoIteración7)
  
/*
const findTrueAndPosition = (nameFinder, nombreABuscar) => {
  let nameFound = ""
  for (let i = 0; i < nameFinder.length; i++)
  if(nameFinder[i] === nombreABuscar.length){
  let nameFound = nameFinder[i].length  
}
  {
  
}

return nameFound 

}
resultIte7 = findTruendPosition(nameFinder,"Bruce")
console.log("🚀 ~ resultIte7:", resultIte7)


---
for (let i = 0; i < nameFinder.length; i++)
console.log("🚀 ~ i:", i)





-- adrian
const finderName = (nameFinder) => {
  const finder = nameFinder.find((el) => el === "Bruce"); //metodo find ... y empleo la nomenlcatura el => el === ...para encontrar en el array
  return finder;
}
let comprobacion = finderName(nameFinder);
console.log(comprobacion); 
--

const = nameFinder.find(namee => namee === 'Bruce')
console.log("🚀 ~ result:", result)

console.log("🚀 ~ result:", result)
console.log(nameFinder.includes("Marc"));
console.log(nameFinder.indexOf("Marc"));
const findName = (param) => {

}


const finderName = (nameFinder) => {
  const finder = nameFinder.find((el) => el === "Bruce"); //metodo find ... y empleo la nomenlcatura el => el === ...para encontrar en el array
  return finder;
}
let comprobacion = finderName(nameFinder);
console.log(comprobacion${i}; 

(`La comida ${'Bruce'[i]} tiene el index ${i}`)


*/