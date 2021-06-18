// ------------------------ 1) PROTOTIPOS

// let objeto = {
//     "propiedad": "datos"
// };

// let variable = "string"

// console.log(variable.__proto__)

// Javascript esta orientado a objetos, pero nosotros no creamos los objetos en si, los objetos ya están hechos con un prototipo que aparece en código como un __proto__

// Todo en js son objetos, solo que nosotros no los creamos

// Pero si ponemos un objeto y queremos saber su prototipo, no te dirá nada por que los objetos no tienen prototipo





// --------------- PROTOTYPE CHAIN)
// Los elementos en js como números, strings, arrays,etc tienen 2 prototipos uno es el por ejemplo si es string tiene prototipo string y adema object, y asi es con todos y eso es la cadena de prototipos

// TODO EN JAVASCRIPT TIENE EL PROTOTYPE OBJECT

// Como accedemos a prototipos que nosotros creamos?

// let variable = function(){}

// console.log(variable.prototype)



// PROTOTIPOS YA CREADOS Y HEREDADOS:
// console.log(variable.__proto__)


// QUE NOSOTROS CREAMOS:
// console.log(variable.prototype)





// CARACTERÍSTICAS DE PROTOTIPOS: )
// -Un prototipo definido en su código fuente es mutable
// Es en si mismo un objeto, asi como otros.
// -Tiene una existencia física en la memoria
// -Puede ser modificado y llamado
// Puede ser visto como un modelo ejemplar de una familia objeto
// Un objeto hereda propiedades (valores y métodos) de su prototipo 




// Ejemplo de como ver metodos de los prototipos

// let arr = [1,2,3]
// console.log(arr)

// Si vemos lo q se pone en consola, podemos ver que solo te dice el length pero si entramos al proto que esta en el array, vemos todos los metodos como fill, filter, find, map, etc.

// Heredan los metodos que tienen de su protipo


// SI NOSOTROS HACEMOS EL OBJETO COMO SE PASA O QUE?

// class Objeto {
//     constructor(){}
//     hablar(){
//         console.log('hola')
//     }
// }

// const objeto = new Objeto();

// console.log(objeto.__proto__)

// Aqui tendríamos que usar el __proto__ pro que realmente estaríamos heredando un prototipo de objeto que aunque lo hayamos hecho nosotros se esta heredando

// Aqui se ve la cadena de objetos


// Podemos hacer que un array por ejemplo sin ser un objeto herede sus metodos asi :

// let arr = []

// El rpototipo del array va a ser el objeto que creamos
// arr.__proto__ = objeto;

// Ahora puede hablar
// arr.hablar()

// console.log(arr.__proto__)








// 2) MODO ESTRICTO ("use strict")

// -Convierte errores de js en excepciones
// -mejorando la optimizacion de los errores y consigue mejores tiempos de ejecución
// Evita sintaxis usadas en posteriores a ES6
// -No permite que el programador realiza una "mala sintaxis"


// Antes de iniciar cualquier app hay que usar el modo estricto por que es buena practica


// EJEMPLO:

// si ponemos la variable asi:
// nombre = 'cesar'

// js lo tomaria como si fuera:
// var nombre = 'cesar'

// En modo estricto esto no es posible asi







// X) USANDO MODO ESTRICTO


// Solo poniendo esto ya se empieza a usar el modo estricto:
// "use strict";

// Ya tendriamos que declarar las variables
// let nombre = 'cesar'
// console.log(nombre)


// Modificar propiedades (defineProperty() y writeable)

// Aqui creamos un objeto vacio
// const obj = {}

// Al objeto le estamos escribiendo una propiedad con los parametros

// TipoDeDato.defineProperty(variableALaQueSeLeAñadira,NombrePropiedad,ValorDePropiedad)

// Object.defineProperty(obj, 'nombre', {value: 'pedro', writeable:false})

// El writeable false dice que no se va a poder reescribir esa propiedad


// Si intentamos cambiarlo con useStrict nos manda un error en el codigo, pero si no tiene el strict mode solamente no lo cambia, pero no es lo correcto, por que asi ahorraremos codigo

// obj.nombre = 'jose'

// console.log(obj.nombre)



// X) preventExtensions

// "use strict";

// const obj = {nombre:'lucas'}


// Este lo que hace es que evita que se siga extendiendo algun objeto o algo asi, que ya no se le puedan añadir cosas

// Object.preventExtensions(obj);

// Si se le trata de añadir algo en modo estricto tira un error, si no lo que hace es que solo no lo añade y queda ese codigo que no funciona y gasta recursos

// obj.apellido = 'daltos'

// console.log(obj)






// X)           Prevenir que se le añadan propiedades a un string 


// Creamos una string
// const str = 'lucas dalto';


// Si queremos añadirle otra parte como si fuera un objeto con el .canal por ejemplo, si no tiene el use strict te arroja un error, si no no pasa nada y solo lo obstruye.

// str.canal  = 'soy dalto'

// console.log(str)






// ERRORES EN FUNCIONES

// "use strict";

// Aqui hice una funcion con 2 parametros iguales, pero js por defecto toma el valor del ultimo si son iguales, pero con el strict mode, te arroja un error

// function hablar(texto, texto) {
//     console.log(texto)
// }

// hablar('pedro', 'Pedro')






// X) DELETE EN OBJETOS O VARIABLES

// let variable = "variable"

// Este es para borrar una variable pero en el uso estricto no se puede hacer asi
// NO SE PUEDEN ELIMINAR VARIABLES 


// delete variable;

// console.log(variable)





// ¿QUE SI SE PUEDE BORRAR CON DELETE?

// -Solo se pueden borrar propiedades de objetos, no el objeto completo, solo las propiedades

// const obj = {
//     nombre : 'josefina',
//     apellido: 'pérez'
// }

// Aqui estaría borrando el nombre y el objeto solo queda con apellido
// Use strict no tiraría ningún tipo de error por que si se esta usando bien

// delete obj.nombre

// console.log(obj)




// CONCLUSION:
// UseStrict te tira un error en vez de que el codigo simplemente no funcione





// LAS PALABRAS RESERVADAS NO SE USAN COMO VARIABLES

// -Palabra reservada son las que ya estan como funciones en el codigo de js o que ya estan por defecto

// "use strict";



// EJEMPLO:

// package es una palabra reservada sin el strict no hace nada y ya con el strict mode nos tria un error por que es palabra reservada

// let package = 'pedro'
// console.log(package)






// Cambia el this

// "use strict";


// Aqui hicimos una funcion que sea un constructor


// This es como si fuese un let y solo sirve en el contexto en el que fue creado


// function saludar() {
//     this.nombre = 'pedro'
//     this.saludar = function () {
//         console.log(`Hola ${this.nombre}`)
//     }
// }

// Creamos un objeto con el constructor que viene de la funcion
// obj = new saludar()

// obj.saludar()



// Con el modo estricto el this no existe.





// X) NÚMEROS OCTALES CON UNA "o" adelante y no existe with

// "use strict";

// Los numeros octales no se permiten en mdoo estricto

// Los numeros octales estan en base a ocho y empiezan con 0

// console.log(023)
// Este devuelve 19


// Para poder trabajar con numeros octales en el modo estricto se tiene que poner una o adelante asi:

// console.log(0o23)







// X) ARGUMENTS Y EVAL NO PUEDEN SER VARIABLES

// "use strict";



// ESTOS NO ESTAN ADMITIDOS
// arguments = 'hola'
// console.log(arguments)


// eval = 'si'
// console.log(eval)




// X) USANDO USE STRCIT CON SCOPE SOLO PARA UNA FUNCION

// Si esto esta sin un let o const detras pero no tiene modo estricto desde fuera

// nombre = 'lucas'



// Aqui dentro de la funcion ya se usa el modo estricto pero no tira error

// USE STRICT SOLO FUNCIONA AL PRINCIPIO DE UNA FUNCION

// function decir() {
//     "use strict";
//     console.log(nombre)
// }

// decir()










// 3) FUNCIONES FLECHA

// Pueden hacer cosas que las otras funciones no y son compactas


// 

// const saludar = () => console.log('hola');

// Si nosotros lo guardamos en una variable pero la funcion no retorna nada nos diria undefined, tednriamos que retornar un dato


// En cambio si devolvemos un dato en uan linea por que solo en una linea se devuelven los datos automaticamente

// const saludar = () => 'string';


// y si pones una variable tamben puede ser asi :


// Te devuelve el valor almacenado en la variable
const saludar = () => nombre = 'pedro' ;


resultado = saludar()

console.log(resultado)