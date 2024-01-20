//!Iteración #1: Mix for e includes
/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()*/

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let newArray = []
for (movie of movies) {
    for(const category of movie.categories){    // --> get values of category part by using a for of inside a for of loop 
 //  console.log("🚀 ~ category:", category)
        if (!newArray.includes(category)) {     // --> if in the newArray we don't ! already have ´category´then || remove duplicated with (element to return only unique categories )
        newArray.push(category)    
    }                                           // --> add it to the new array || if my array includes the category i already have then !incude 

    }
// console.log("🚀 ~ newArray:", newArray)      // --> will print the result at the end of the iteration of the most outside for loop   
}
console.log("🚀 ~ newArray:", newArray)         // --> will print the final array 


//! Iteración #2: Mix Fors
/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos 
favoritos que tienen los usuarios.
*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalVolume = 0;
let totalSounds = 0;

for (const user of users) {                               // --> for...of to iterates over each `user` in the users array.
    for (const soundKey in user.favoritesSounds) {        // --> The inner for...in loop iterates over each key (soundKey) in the favoritesSounds object of the current user.
        const sound = user.favoritesSounds[soundKey];     // --> Retrieves the sound object associated with the current soundKey in the favoritesSounds of the current user.
        totalVolume += sound.volume;                      // --> Adds the volume of the current sound to the totalVolume and increments the totalSounds count.
        totalSounds++;                                    // --> End of the inner loop, which iterates over the sounds of the current user.
    }
}

const averageVolume = totalVolume / totalSounds;

console.log("Average Volume:", averageVolume);
