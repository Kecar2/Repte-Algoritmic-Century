// Url de la kata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
 
// IMPORTANTE: Plantear con lenguaje natural como resolver el ejercicio, después codificar! "Pues para resolver el algoritmo tengo que coger el año que me pasan y...."

// Tengo que buscar la manera de que dependiendo el año le demos al programa me digla que siglo es.
/**
 * Implementa una función que dado un año; devuelva a que siglo pertenece.
 * 
 * @param {number} year Año 
 * @returns {number} Siglo al que pertenece dicho año.
 */
 function century(year) {

// Decalaramos la variable y el objeto estatico ceil de Math.

// Math.ceil te redondea el resultado al numero mas cerca o igual al que está.
    let century = Math.ceil(year/100);

// Aquí te devuelve el siglo.
    return century;
}

// Si no fijamos en el primer caso, la division de 1601/100 nos dará 16.01 lo que Math.ceil lo redondeara a 17 porque es al numero mas cerca al que está.

console.log(century(1601)); // 17
console.log(century(1705)); // 18

// En éste caso 2000/100 nos dará 20, como Math.ceil te lo redondea al numero mas cerca o lo iguala, lo igualará en 20.
console.log(century(2000)); // 20
