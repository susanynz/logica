//perfil de usuario
const user = "Susan Yáñez"; 
const age = 28; 
const favoriteMoviesStr = "Eternal Sunshine of a Spotless Mind, Más allá de los sueños" ; 

const favoriteMovies = favoriteMoviesStr.split(',');


console.log("\nPerfil del usuario:");
console.log(`Nombre de usuario: ${user}`);
console.log(`Edad: ${age} años`);
console.log("Películas favoritas:");

favoriteMovies.forEach(movie => {
    console.log(`La película ${movie.trim()} es una de mis favoritas.`);
});

//Numero más alto
let highestNumber = -Infinity;


const numbers = [5, 8, 2, 10, 15, 7, 3, 12, 6, 9];


for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (!isNaN(currentNumber) && currentNumber > highestNumber) {
        highestNumber = currentNumber;
    }
}

console.log(`El número más alto es: ${highestNumber}`);

//alarm
const seconds = 5;

if (!isNaN(seconds) && seconds > 0) {
    
    console.log("Esperando...");

    
    setTimeout(() => {
       
        console.log("¡Alarma! Han pasado los segundos.");
    }, seconds * 1000);  
} else {
    console.log("Ingresa un número de segundos válido y mayor que cero.");
}