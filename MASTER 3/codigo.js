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

// const saludar = () => nombre = 'pedro' ;


// resultado = saludar()

// console.log(resultado)



// X) LAS FUNCIONES FLECHA NO SON ADECUADAS PARA SER USADOS COMO MÉTODOS Y NO PUEDEN SER USADOS COMO CONSTRUCTORES


// "use strict"

// USANDO THIS CON FUNCION NORMAL

// const objeto = {
//     nombre: "lucas",
//     saludar: function () {
//         // Aqui el nombre lo obtiene desde el mismo objeto
//         console.log(`hola ${this.nombre}`)
//     }
// }

// Ejeecutamos la funcion
// objeto.saludar()







// THIS CON FUNCION FLECHA


// const objeto = {
//     nombre: "lucas",
// Al ser con funcion flecha el this no funciona igual como si fuera el nombre del objeto, dice undefined, por que el this lo toma como el objeto de window
//     saludar: ()=> console.log(`Hola ${this.nombre}`)
// }

// Aqui en esta funcion si le añadimos al objeto la propiedad nombre ya lo toma como this
// window.nombre = 'cesar'


// ME DIRIA HOLA CESAR
// Ejeecutamos la funcion
// objeto.saludar()






// X) LAS FUNCIONES FLECHA TAMPOCO SE PUEDEN USAR COMO CONSTRUCTOR

// "use strict"


// FUNCION NORMAL

// function constructorPersona(nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona = new constructorPersona('cesar', 'del rio')

// console.log(persona)



// FUNCION FLECHA

// const constructorPersona2 = (nombre, apellido)=>{
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona2 = new constructorPersona2('angela', 'del rio')

// AQUI ME TIRA UN ERROR AL QUERER PONERLO EN CONSOLA

// console.log(persona2)

















// 4) THIS CONTEXTUAL

// "use strict"


// This fuera de cualquier funcion es el objeto WINDOW
// console.log(this)



// ESTO DARIA TRUE COMO RESULTADO POR QUE SON LO MISMO
// console.log(this === window)




// THIS DENTRO DE UNA FUNCION

// AQUI ESTE CODIGO NO FUNCIONAIRIA
// Por que el this.nombre al no tener contenedor va directamente a la window

// this.nombre = "dalto"

// function saludar() {
//     console.log(`Hola ${this.nombre}`)
// }

// saludar()







// COMO LO PODEMOS HACER FUNCIONAR?


// Seguimos teniendo la misma funcion

// function saludar() {
// console.log(`Hola ${this.nombre}`)
// }



// Tenermos que hacer un objeto contenedor

// const objeto = {
// Creamos el nomnre en el this dentro del objeto
// nombre:'Cesar',

// Llamamos a la funcion ya hecha pero con el this dentro del mismo contenedor

// saludar:saludar

// Se puede acortar asi:

// saludar
// }


// Ejecutamos la funcion
// objeto.saludar()






// EJEMPLOS DE SITUACION ESPECIAL

// "use strict"

// this.nombre = 'Jose';

// const objeto = {
//     nombre : 'lucas',
//     saludar: ()=>{
//         console.log(`Hola ${this.nombre}`)
//     }
// }



// function otroContexto() {
//     nombre = 'Roberto',
//     objeto.saludar()
// }


// otroContexto()



// ESTE CODIGO TE DARIA COMO RESULTADO 'Hola Roberto'

// ¿POR QUE?
// por que en el otroCobtexto se esta redefiniendo this poniendole el nombre de roberto








// X) FUNCIONES RECURSIVAS

// ¿Que es recursividad?
// Cuando una funcion se llama a si misma


// PRECAUCION:
// Si no se saben usar bien puede quedar en un ciclo infinito

// "use strict"

// const validarEdad = (err) => {
//     let edad;

//     // Usamos un try y catch

//     try {

//         // Vemos si hay un error que se este pasando como parametro al final en el catch se dice que se quiere un numero valido si no se sigue diciendo que se de la edad
//         if (err) edad = prompt('Introduce un numero valido para tu edad')
//         else edad = prompt('papu, dime tu edad')

//         // La edad se pasa como lo que se de pero ya hecho un numero

//         edad = parseInt(edad)

//         // Si la edad no es un numero se vuelve a preguntar lo de introduce un numero para la edad
//         if( isNaN(edad)) throw "introduce un numero para la edad";

//         // Si la edad es mayor o igual a 18 se dice que es mayor de edad

//         if(edad >= 18) console.log('eres mayor de edad');

//         // Si no se duce que es menor de edad

//         else console.log('eres menor de edad')
//     }catch(e){

//         // Aqui estamos aplicando la recursividad

//         // Si hubo un error con el try se envia al catch un error y se vuelve a ejecutar la funcion pero ahora con ese error

//         validarEdad(e)
//     }
// }

// validarEdad()









// X) CLAUSURAS

// ¿QUE SON?
// Funciones que devuelven otras funciones

// EJEMPLO DE UNA CLAUSURA

// const saludar = (nombre)=>{

// Esta funcion es la que esta dentro de la de saludar

// return function () {
// console.log(nombre)
// }
// }

// Esto no devolveria pedro en la consola

// let saludo = saludar('pedro')


// Esto ya devolveria pedro en la consola

// saludo()


// Esto diria pedro cuando cargue la pagina

// addEventListener('load', saludo)









// EJEMPLO DE CLAUSURA CAMBIAR TAMAÑO DE EL TEXTO CON BOTONES


//CODIGO SIN CLAUSURAS 

// const cambiarTamaño = tamaño =>{
//     document.querySelector('.texto').style.fontSize = `${tamaño}px`
// }


// document.querySelector('.t12').addEventListener('click',()=>cambiarTamaño(12))

// document.querySelector('.t14').addEventListener('click',()=>cambiarTamaño(14))

// document.querySelector('.t16').addEventListener('click',()=>cambiarTamaño(16))







// CODIGO CON CLAUSURAS

// const cambiarTamaño = tamaño =>{
//     return ()=>{
//         document.querySelector('.texto').style.fontSize = `${tamaño}px`
//     }
// }

// px12 = cambiarTamaño(12);
// px14 = cambiarTamaño(14)
// px16 = cambiarTamaño(16)


// document.querySelector('.t12').addEventListener('click',px12)

// document.querySelector('.t14').addEventListener('click',px14)

// document.querySelector('.t16').addEventListener('click',px16)












// X) PARAMETROS POR DEFECTO 

// "use strict"


// SITUACION DE EJEMPLO

// const suma = (a,b)=>{
//     console.log(a+b)
// }

// Aqui solo hay un numero entonces no se puede ejecutar la funcion

// suma(10)





// PARAMETROS POR DEFECTO DE MANERA ANTIGUA

// const suma = (a,b)=>{

// Puede ser asi

// b = typeof b !== 'undefined' ? b : 0

// Puede ser con 

// b = b || 0;

// console.log(a+b)
// }

// suma(10)





// PARAMETROS POR DEFECTO FORMA MODERNA


// const suma = (a = 0,b = 0)=>{
// console.log(a+b)
// }

// suma(5,8)








// X) PARAMETRO REST



// El parametro rest funciona como el parametro a



// CARACTERISTICAS DE REST:

// -Rest devuelve los parametros como un array
// -Rest tiene que ser el ultimpo parametro de todos



// Parametro rest se usa asi:

// Aqui como queremos poner una frase antes de los numeros, tenemos que poner otro parametro pero el rest siempre va al final

// const suma = (frase,...num) =>{
//     // num es igual a un array

//     let resultado = 0;

//     // Tenemos que mapear num para poder realuzar la suma

//     num.map((n)=> resultado += n)

//     console.log(`${frase} ${resultado}`)
// } 

// // El numero de parametros disponibles deja de importar

// suma("El resultado es:",12,25,62)







// 4) OPERADORES TERNARIOS


// X) OPERADOR TERNARIO CONDICIONAL

// let edad = 17;


// CONDICIONAL SIN OPERADOR TERNARIO

// if( edad >= 18) console.log('es mayor de edad')
// else console.log('es menor de edad')





// CONDICIONAL CON OPERADOR TERNARIO

// edad > 18 
// ? console.log('es mayor de edad') 
// : console.log('es menor de edad')





// X) ¿COMO EJECUTAR MAS DE UNA ACCION CON OPERADOR TERNARIO?




// SIN OPERADOR TERNARIO

// if (edad >= 18) {
//     console.log('es mayor de edad')
//     console.log('puede pasar')
// }
// else{
//     console.log('Es menor de edad')
//     console.log('No puede pasar')
// } 






// CON OPERADOR TERNARIO

// Ponemos la condición 

// (edad >= 18) 

// Las acciones se guardan en paréntesis y se le pone una coma para dividir cada acción

// ?
//     (
//         console.log('es mayor de edad'),
//         console.log('puede pasar')
//     )

// :
//     (
//         console.log('Es menor de edad'),
//         console.log('No puede pasar')
//     ) 





// X) OPERADOR SPREAD


//EL operador ternario spread tiene demasiadas funciones y estas son: 


// 1) DESTRUCTURACION RAPIDA Y SENCILLA

// "use strict";

// let valor1 = "valor 1";
// let valor2 = "valor 2";
// let valor3 = "valor 3";


// let arr = ["valor 1", "valor 2", "valor 3"];

// console.log(valor1, valor2, valor3)



// Si ponemos el arr asi nos va a devolver el array con los valores dentro

// console.log(arr)

// devuelve: (3) ["valor 1", "valor 2", "valor 3"]



// Pero si queremos usar desestructurar el array de manera sencilla podemos usar el operador spread que lo devuelve ya con los valores fuera asi:

// console.log(...arr)

// Devuelve: valor 1 valor 2 valor 3





// 2) AGREGAR UN ARRAY A OTROS ARRAYS

// "use strict";


// Juntandolos sin operador ternario:

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]



// arr1.push(arr2)
// console.log(arr1)

// Asi devolveria : (4) [1, 2, 3, Array(3)]



// arr1.push(arr2[0],arr2[1], arr2[2])
// console.log(arr1)

// Asi devolveria : (5) [1, 2, 3, 4, 5, 6]



// ¿DONDE ESTA EL PROBLEMA?
// Que si usamos push tenemos que especificar que queremos agregar entonces si tenemos 30 elementos en un array ps seria muy complicado por que no podriamos poner cada uno de los elementos asi


// ¿CUAL ES LA SOLUCION A ESTO?
// Operador ternaria spread





// CON EL OPERADOR TERNARIO SPREAD

// Esto ya agregaria todos de una sin importar cuantos haya

// arr1.push(...arr2)
// console.log(arr1)

// Asi devolveria : (5) [1, 2, 3, 4, 5, 6]








// 3)CONCATENAR ARRAYS

// "use strict";

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// Hacemos otro array con los valores de los 2 anteriores

// let arr3 = [...arr1, ...arr2];

// console.log(arr3)

// Devolveria: (6) [1, 2, 3, 4, 5, 6]





// 4) COMO ARGUMENTO REST

// El operador spread ya lo habiamos usado como parametro y al diferencia entre arguemnto y parametro de una funcion es la siguiente:


// function ejemplo(parametros) {
// **Codigo**
// }


// ejemplo(argumentos)




// SIN ARGUMENTO REST

// const suma = (n1,n2) =>{
//     console.log(n1+n2)
// }


// suma(3,6)



// CON ARGUMENTO REST

// const suma = (n1,n2) =>{
// console.log(n1+n2)
// }

// Imaginemos que los datos para meter en la funcion estan dentro de un array

// let arrayConDatos = [1,2]

// Aqui pasamos los datos del array con el argumento rest
// suma(...arrayConDatos)



// DATO CURIOSO: 
// El nombre de argumento rest no existe ese lo invento dalto xd




// EJEMPLO QUE HICE YO USANDO PAREMTRO Y ARGUMENTO REST EN UNA MISMA FUNCION


// const suma = (...num) =>{
//     let res = 0
//     num.map((n)=> res += n)
//     console.log(res)
// }


// let arrayConDatos = [1,2,10,24]

// suma(...arrayConDatos)




// X) DESTRUCTURACION

// Podemos destructurar arras yb objetos







// 6) API'S DE JAVASCRIPT

// Api = Interfaz de programacion de aplicaciones, recibe un dato los procesa y nos devuelve un resultado


// EJEMPLO:
// Usamos prompt('') pero no sabemos lo que hace internamente



// LAS API'S NO SON LO MISMO QUE API REST

// Api rest son por ejemplo quieres obtener informacion de twitter, pues usas la api de twitter






// EJEMPLOS DE API'S:


// 1) OBJETO DATE

// Date es un constructor

// const fecha = Date;


// console.log(fecha)
// Devuelve esto: Date() { [native code] }




// Forma de usarlo correctamente hay 2

// 1) (Es mejor asi)
// const fecha = Date();
// console.log(fecha)


// 2)
// const fecha = Date;
// console.log(fecha())


// Devuelve:
// Mon Jun 21 2021 17:31:19 GMT-0600 (hora de verano del Pacífico de México)





// METODOS DEL OBJETO DATE:

// 1) getDate - Te devuelve el dia actual

// const fecha = new Date();
// console.log(fecha.getDate())

// Devuelve: 21





// 2)getDay()  - Te devuelve el dia de la semana pero con su indice dentro de un array

// const fecha = new Date();
// console.log(fecha.getDay())

// Me devuelve: 1 (en este momento)


// Domingo -> 0
// Lunes -> 1
// Martes -> 2
// Miercoles -> 3
// Jueves -> 4
// Viernes -> 5
// Sabado -> 6




// 3) getMonth() - devuelve el mes en el que estes pero como en el anterior tambien en un array

// const fecha = new Date();
// console.log(fecha.getMonth())

// Me devolvio: 5

// Enero -> 0
// Febrero -> 1
// Marzo -> 2
// Abril -> 3
// Mayo -> 4
// Junio -> 5
// Julio -> 6
// Agosto -> 7
// Septiembre -> 8
// Octubre -> 9
// Noviembre -> 10
// Diciembre -> 11




// 4) getYear() - te devuelve los años que gan pasado desde 1900 hasta el año actual


// const fecha = new Date();
// console.log(fecha.getYear())

// Devuelve: 121

// Para que te de el año actual tiene que ser asi:

// const fecha = new Date();
// console.log(fecha.getYear() + 1900)

// o usar getFullYear()

// const fecha = new Date();
// console.log(fecha.getFullYear())

// Devuelve: 1900




// 5) getHours() - te devuelve la hora en numeros del 1 al 24

// const fecha = new Date();
// console.log(fecha.getHours())


// Como son las 5 de la tarde me devuelve: 17





// 6) getMinutes() - devuelve los minutos actuales

// const fecha = new Date();
// console.log(fecha.getMinutes())


// Me devolvio : 44 por que son las 5:44




// 7) getSeconds() - devuelve los segundos de ahora

// const fecha = new Date();
// console.log(fecha.getSeconds())





// DATO CURIOSO:

// A el objeto Date() se le pueden dar parametros por ejemplo en milisegundos


// const fecha = new Date(1000000000000)
// console.log(fecha.getFullYear())

// Si se dan en milisegundos me devolveria por ejemplo: 1969

// Por que ?

// Por que te lo devuelve en UNIX time, este es que te dice como si desde el 1 de enero de 1970 hubieran pasado el numero de milisegundos que tu indicaste ahi




// 8) now() - te devuelve los milisegundos que han pasado desde el 1 d enero de 1970


// console.log(Date.now())
// Devuelve: 1624319614474

// Si esos milisegundos los pongo aqui me devuelve esto
// console.log( new Date (1624319597077))

// Devuelve:Mon Jun 21 2021 17:53:17 GMT-0600 (hora de verano del Pacífico de México)









// ------- EJERCICIO DE EJEMPLO: HACER UN RELOJ CON DATE -------

// "use strict";

// Funcion para añadir los 0s

// const addZeros = n =>{

// Lo que hace esta funcion es que del numero que se le de se va a convertir a string y se va a ver cuantas palabras tiene si eso es menor a 2 se ejecuta la funcion, que lo que hace es que devuelve el numero pero con un 0 antes concatenado a el numero

// if(n.toString().length < 2) return "0".concat(n);

// Esto es lo que pasara si no se devolvio lo anterior, ya que cuando se da return termina la funcion entonces se cortaria si el numero tiene menos de 2 letras, ya que tiene un return si no devolveria el numero completo

//     return n;
// }


// const actualizarHora = ()=>{

// Aqui hay un problema y es que si alguno de estos numeros no es mayor  10, no nos dice 0, 02, 03, 04, 05, nos dice 1, 2 , 3, 4, 5, 6, y no queremos que sea asi asi que haremos una funcion para añadir los 0

//     const time = new Date();
//     let hora = addZeros(time.getHours())
//     let min = addZeros(time.getMinutes())
//     let seg = addZeros(time.getSeconds())

//     document.querySelector('.hora').textContent = hora
//     document.querySelector('.min').textContent = min
//     document.querySelector('.seg').textContent = seg
// }

// Esto es por que si lo dejamos solo con el intervalo esperara un segundo antes de que se ponga algo en el reloj asi que por 1 segundo estaria en 00-00-00 por eso la ejecutamos siempre al principio

// actualizarHora()

// ¿COMO HACEMOS PARA QUE SE ACTUALIZE CONSTANTEMENTE?

// Usamos un temporizador por intervalos

// Cada segundo se va a ejecutar la funcion y se actualiza la ifnormacion

// setInterval(actualizarHora, 1000)








// 5) ------------- LocalStorage y SessionStorage




// ¿QUE DIFERENCIA TIENEN?

// El LocalStorage hace que se guarden los datos en el navegador incluso cuando se cierre la ventana

// El sessionStorage guarda la informacion solo cuando esta la ventana abierta cuando se cierra dejan de gaurdarse los datos


// console.log(localStorage)

// El localStorage tiene un length, que idnica el numero de cosas que tiene dentro el objeto





// ---> ACCIONES CON LOCAL STORAGE <---

// X) AÑADIENDO UN ITEM

// Aqui estariamos agregando un valor al objeto de storage que es el nombre con valor de pedro

// localStorage.setItem('nombre', 'pedro')




// X) OBTENIENDO UN ITEM

// console.log(localStorage.getItem('nombre'))

// Asi se obtiene un elemento para poder tener su informaicon en el 



// X) ELIMINANDO UN ITEM

// localStorage.removeItem('nombre')

// Este puede eliminar un item de la tabla




// X) ELIMINANDO TODO DE EL STORAGE CON CLEAR

// localStorage.clear()

// Este elimina todo lo que se ha guardado en el storage







// ---> ACCIONES CON  SESSION STORAGE <---


// X) AÑADIENDO UN ITEM

// Aqui estariamos agregando un valor al objeto de storage que es el nombre con valor de pedro

// sessionStorage.setItem('nombre', 'pedro')




// X) OBTENIENDO UN ITEM

// console.log(sessionStorage.getItem('nombre'))

// Asi se obtiene un elemento para poder tener su informaicon en el



// X) ELIMINANDO UN ITEM

// sessionStorage.removeItem('nombre')

// Este puede eliminar un item de la tabla




// X) ELIMINANDO TODO DE EL STORAGE CON CLEAR

// sessionStorage.clear()

// Este elimina todo lo que se ha guardado en el storage






// DATO --> PARA EVR EL LOCAL Y SESSION STORAGE ES DESDE LA PARTE DE APLICACION EN LA CONSOLA 














// >>>>> EJEMPLO DE USO DE LOCAL STORAGE <<<<<

// Haremos un codigo para cambiar el idioma

// Este codigo lo que hara es que vamos a hacer un codigo que muestre como una tarejrta preguntando que idioma se quiere usar, eso es para no tener que preguntar siempre y nomas cambiarlo una vez

// "use strict"

// const modal = document.querySelector('.modal-overlay')


// const definirIdioma = () => {
//     // Hacemos las funciones para poder establecer el idioma que quisieramos poner

//     document.querySelector('.en').addEventListener('click', () => {
//         localStorage.setItem('idioma', 'en')
//         cerrarModal()
//     })


//     document.querySelector('.es').addEventListener('click', () => {
//         localStorage.setItem('idioma', 'es')
//         cerrarModal()
//     })
// }

// // Creamos la funcion para cerrar el modal

// const cerrarModal = () => {

//     // Cuando se cierre vamos a desaparecerlo ya que se tenga el idioma que se quiere poner 

//     modal.style.animation = 'desaparecer 1s forwards'

//     // El modal va a desaparecer

//     setTimeout(() => modal.style.display = 'none', 1000)
// }

// // Guardamos el item de idioma en una variable

// const idioma = localStorage.getItem('idioma');


// // Creamos un condicional

// // Si es nulo se va a definiri un idioma y preguntarlo osea que mostrara el modal

// if (idioma === null) definirIdioma();


// // Si no pues normalmente se cambiaria el idioma pero aqui como no lo vamos a cambiar solamente lo pondriamos en la consola y dejariamos de mostrar el modal

// else { console.log(`Idioma: ${idioma}`), modal.style.display = 'none' }




// OTROS USO DE LOCAL STORAGE SON:

// -- Cookies
// -- Pedir que se suscriban a un newsletter
// -Etc.














// ------------------ DRAG & DROP ---------------------------

// DRAG & DROP SE MANEJA CON EVENTOS:

// const circulo = document.querySelector('.circulo')
// const rectangulo = document.querySelector('.rectangulo')


// 1) Eventos del objeto



// 1- dragStart - detecta cuando se agarra el objeto el 1er click
// circulo.addEventListener('dragstart', ()=> console.log('1'))



// 2- drag - detecta cuando el objeto esta entre estos 2, osea cuando esta entre el primer y el 2do click, no importa si se meueve o no el objeto
// circulo.addEventListener('drag', ()=> console.log('2'))



// 3- dragEnd - detecta cuando se suelta el objeto (2do click)
// circulo.addEventListener('dragend', ()=> console.log('3'))





// 2) Eventos de zona

// 1- dragenter- Es cuando entran dentro de este obejeto
// rectangulo.addEventListener('dragenter', ()=> console.log(1))


// 2- dragover - es cuando estan encima de ese objeto
// rectangulo.addEventListener('dragover', ()=> console.log(2))

// DATO IMPORTANTE DE DRAGOVER:
// Por defecto este no se puede hacer drop por eso si lo pones encima pone el icono de cancelacion o de que no se puede y si hacemos drop no lo permite, entonces como podemos hacer para que esto si funcione bien?, tenemos que prevenir lo que hace por determinado asi:

// rectangulo.addEventListener('dragover', (e)=>{
//     e.preventDefault()
//     console.log(2)
// } )



// 3- drop - es cuando lo sueltan dentro del objeto
// rectangulo.addEventListener('drop', ()=> console.log(3))


// 4- dragleave - es cuando sale del objeto
// rectangulo.addEventListener('dragleave', ()=> console.log(4))





// 3) Propuedad dataTransfer

// ¿que es dataTransfer?
// Hay un objeto que se llama dataTransfer, que es lo que permite que se pasen datos entre el objeto desplazado y la zona a la que se esta arrastrando

// console.log(new DataTransfer())

// Empieza cuando se ve que objeto se esta moviendo y cuando empieza a moverse

// circulo.addEventListener('dragstart', (e)=>{
//     console.log(e.dataTransfer)
// })






// Esto nos devuelve informacion pero nosotros tenemos que pasarle la informacion necesaora

// -getData()

// -setData()




// ¿COMO PASAMOS LOS DATOS DE UN OBJETO AL QUE RECIBE?


// circulo.addEventListener('dragstart', (e)=>{

//     // Pasamos los datos aqui, el dato que se pasaria seria la clase del objeto que se movio, es como gaurdarlo en una variable
//     e.dataTransfer.setData('clase', e.target.className)


//     // Obtenemos los datos que se guardaron anteriormente
//     // console.log(e.dataTransfer.getData('clase'))

//     // Devolveria circulo en la consola
// })






// ¿Y COMO PODEMOS RECOGER ESOS DATOS DESDE EL RECTANGULO?

// Usando evento  drop y recogiendo los datos

// rectangulo.addEventListener('drop', (e)=>{
//     console.log(e.dataTransfer.getData('clase'))
// })











// EJEMPLO DE USO DE DRAG & DROP - TEXTURIZADOR


/* PASOS: */


/* 1) Creamos las variables de texturas y la zona */

// const zona = document.querySelector('.zona')
// const texturas = document.querySelector('.texturas')



/* 2) Creamos el evento del dragover en la zona */

// zona.addEventListener('dragover', (e)=>{

//     // Esto es para que si permita que entre una textura
//     e.preventDefault()

// })




/* 3) Creamos evento del drop en la zona */

// zona.addEventListener('drop',(e)=>{

//     // Hacemos variable n que sera el dato que pasa la textura, pasado en la funcion tranferirTextura
//     let n = e.dataTransfer.getData("textura")

//     // Le cambiamos el bg a la zona con la textura que quedo
//     zona.style.background = `url("textura ${n}.jpg")`

// })





/* 4) Creamos un for que va a ver cada hijo de las texturas */

// for (let i = 1; i < texturas.children.length + 1; i++) {
//     // i vale uno para que sea el numero de textura correcto y luego para que se ejecuten todas le añadimos 1 al length 


//     // A cada uno le ponemos un event listener de dragstart con una funcion que se llama transferir textura con el valor de i dentro y el evento

//     document.querySelector(`.textura${i}`).addEventListener('dragstart', (e)=>{
//         transferirTextura(i,e)
//     })

// }




/* 5) Creamos la funcion de transferirTextura */

// const transferirTextura = (n,e) =>{

// //     // Aqui pasamos los datos de la textura a la que se le da click llamandola textura, pasando el valor de n que seria el numero de textura

//     e.dataTransfer.setData('textura',n)
// }

















/* 6) API DE GEOLOCALIZACION */

"use strict"


// ¿COMO SE ACCEDE A LA LOCALIZACION?

// El objeto navigator es todo lo que tiene que ver con el navegador

// const geolocation = navigator.geolocation

// console.log(geolocation.getCurrentPosition())


// Este es un  objeto con varios metodos que son:

/* 1) getCurrentPosition() - Obtiene la posicion actual
    // -parametros (position, error, options)
    // -propiedades de option ( enableHightAccuracy, timeout, maximumAge) */


// const geolocation = navigator.geolocation

// // Se pone como paremetro pos para poder conocer la posicion
// const posicion = (pos)=>{

//     // Este es el objeto completo
//     console.log(pos)

//     // Asi se podria ver algo en especifico por ejemplo la latitud
//     console.log(pos.coords.latitude)
// }

// // Asi se pone para poder detectar errores
// const err = (e) => console.log(e)

// const options = {

//     // Este de maximumAge lo que hace es que te pregunta cuanto tiempo lo quieres guardae en cache esa posicion

//     // Esto diria que no guardara nada, para que siempre te de la actual y que no te de una obsoleta

//     maximumAge : 0,


//     // Este es para ver cuanto tardara en decirte la data
//     timeout:3000,


//     // Tener alta precision en la:

//     enableHightAcurracy: true

// }

// // Ya con esto te diria que quiere saber tu ubicacion

// geolocation.getCurrentPosition(posicion, err,options )




// -watchPosition() - antecCambios de la posicion lo muestra
// -clearWatch() - esto elimina los datos que se van cambiando



// ESTA API  TIENE DIFERENTES FUNCIONALIDADES, QUE PUEDE SERVIR PARA MOSTRAR LA LOCALIZACION ACTUAL EN LA API REST DE GOOGLE MAPS O ALGO ASI















/* X) HISTORIAL */


// ¿Como se ve el historial y a que se refiere?

// console.log(history)

// El historial lo que hace es que ve cuanto has viajado en una pestaña, no ves todas las pestañas que has visto si no que ve todo lo que has hecho y como te has movido dentro de una sola pestaña


/*1) - back() - te devuelve un movimiento atras */
//  - es como darle a la felchita de la izquierda arriba al lado de donde se escribe la url en el navegador

// history.back()


/*2) -forward() - este va adelante es como darle a la flechita de la derecha */

// history.forward()



// tamaño del historial

// console.log(history.length)


/* 3) go() - recarga la pagina*/

// Este si se deja ahi no va a dejar de recargarse por lo que se le pueden dar unos numeros de parametros

// - La rearga una vez
// history.go() o history.go(0)

// - Te lleva a la pagina numero 1
// history.go(1)

// - te lleva una pagina atras
// history.go(-1)




/* 4) pushState() - modifica la url y conserva la info */

// Tenemos que decir que nos diga

// Esto ya te devuelve la url de la pagina

// console.log(location.href)


// Esto tiene 3 parametros el 1 es la data que se va a pasar, el 2 es el titulo que por lo regular no se necesita ni se usa, y lo ultimo es la direccion nueva que va a quedar con un ? primero SIEMPRE

// history.pushState({nombre: "pedro"}, "titulo", "?jajaxd")

// Despues esto se estaria agregando a la URL poniendo al final ?jajaxd

// Esto despues crearia una nueva entrada en el historial

// Cada que se añade algo se va a hacer una nueva entrada al hitorial 





/* propiedad state y evento popstate */

// Por ejemplo si damos push state ahora la data que esta dentro que seria el nombre pedro, quedaria ahi dentro, 

// history.pushState({nombre: "pedros"}, "titulo", "?jaja2xd")


// Para poder ver el estado de la pagina solo tenemos que poner:

// console.log(history.state)

// En la pagina con la url de ?jajaxd nos va a devolver:;

// {nombre: "pedro"}





// ¿COMO PODRIAMOS VER EL STATE SIN TENER QUE HACER ESO SIEMPRE?

// Con el evento popState en la window

// addEventListener('popstate', (e)=>{
//     console.log(e.state.nombre)
// })



/*  -replaceState  - reemplaza el estado actual con el que se le añade*/

// history.replaceState({nombre: "pedros"}, "titulo", "?jaja2xd")

// Aqui no queda en el historial el cambio solamente reemplaza la actual pero no queda registro alguno d elas otras




// CON ESTO SE PUEDE MANEJAR EL HISTORIAL, HACER CAMBIOS EN LA PAGINA, ETC.

// HAY MUCHOS USOS PARA ESTO CADA QUIEN VERA COMO LO USA.










/* 7) FileReader */

// Para que sirve?, este sirve para poder leer archivos

// Pero antes nosotros no usabamos fetch para leer archivos??

// Si pero con fecth era por que son archivos que nosotros ya sabiamos como estaban aqui son archivos que no sabemos como es que son entonces le pedios al usuario que ingrese un dato por lo que ese dato se coloca en un input


// const archivo = document.getElementById('archivo')




// Este es el que detecta cuando hay un cambio en un input

// Yo al input le he pasado el archivo de info.txt

// archivo.addEventListener('change', (e) => {

//     // El files es un array y puede seleccionar multiples archivos, eso nomas si es que ponemos el atributo de multiple="" dentro de el input en HTML

//     // Puesimos la funcion con el un ico archivo que esta entrando porque nomas podria ser un archivo

//     leerArchivo(archivo.files[0])

// })





// Funcion que se le pasa de parametro el archivo introducido



// const leerArchivo = ar => {

//     // Creamos un FileReader
//     const reader = new FileReader()


//     // Leemos el archivo como texto
//     reader.readAsText(ar);



//     // Ya que cargue el archivo correctamente, va a ejecutarse el codigo

//     reader.addEventListener('load', (e)=>{

//         // Aqui dentro es donde ya se habra leido el texto y de esto ya ya viendo el currentTarget y el resultado podremos encontrar el texto que estaba dentro de ese archivo



//         // De aqui si ponemos archivos json los podemos pasar en json tambien aplicandole el parse ya que esta como un texto normal

//         console.log(JSON.parse(e.currentTarget.result))



//         // Aqui nomas de juego lo meti en un parrafo para ver si salia xd y si salio

//         setTimeout(() => {
//             document.querySelector('.text').innerHTML = e.currentTarget.result
//         }, 1500);
//     })
// }









/* X) ¿COMO LEEMOS VARIOS ARCHIVOS DE TEXTO? */ 


// Tenemos que tener un bucle


// "use strict";

// const archivo = document.getElementById('archivo');

// archivo.addEventListener('change', (e) => {

//     // Aqui pasamos el array de files completo no pasamos solo el pirmer archivo 

//     leerArchivo(archivo.files)
// })



// const leerArchivo = ar => {
    
//     // La fileList que se devuelve si seria un objeto que es lo que devuelve esto de typeof

//     console.log( typeof ar) 


    
//     // Aqui esta el bucle que va a ver dentro de cada archivo

//     for (const key of ar) {
//         const reader = new FileReader();
//         reader.readAsText(key)
//         reader.addEventListener('load', (e)=>{

//             // Este codigo veria la primera letra del codigo y va a ver si es un JSON o si es un texto normal por lo que daria el resultado de forma diferente

//             if(e.currentTarget.result.charAt(0) == "{"){
//                 console.log(JSON.parse(e.currentTarget.result))
//             }else{
//                 console.log(e.currentTarget.result)
//             }

//         })
//     }
// }










/* X) READ FILE AS DATA URL - PARA IMAGENES, VIDEOS,ECT. */

// "use strict";

// const archivo = document.getElementById('archivo');

// archivo.addEventListener('change', (e) => {

//     // Aqui pasamos el array de files completo no pasamos solo el pirmer archivo 

//     leerArchivo(archivo.files)
// })



// const leerArchivo = ar => {
    

//     console.log( typeof ar) 


    

//     for (const key of ar) {
//         const reader = new FileReader();

//         // Lo leemos como data url

//         reader.readAsDataURL(key)


//         reader.addEventListener('load', (e)=>{

//             // Creamos la img con la url

//             // Esto se deveria de hacer con un fragemnto de documento pero aqui esta hecho de forma rapida

//             let newImg = `<img src='${e.currentTarget.result}' >`

//             document.querySelector('.resultado').innerHTML += newImg
//         })
//     }
// }












/* EJEMPLO DE USO 1 (CARGAR GALERIA DINAMICAMENTE) */

"use strict";

const archivo = document.getElementById('archivo');

archivo.addEventListener('change', (e) => {

    leerArchivo(archivo.files)
})



const leerArchivo = ar => {
    

    console.log( typeof ar) 


    

    for (const key of ar) {
        const reader = new FileReader();


        reader.readAsDataURL(key)


        reader.addEventListener('load', (e)=>{



            let newImg = `<img src='${e.currentTarget.result}' >`

            document.querySelector('.resultado').innerHTML += newImg
        })
    }
}










/* EJEMPLO DE USO 2 (COMBINAR FILEREADER CON DRAG & DROP) */





/* EJEMPLO DE USO 3 (BARRA DE PROGRESO CON PROGRESS Y LOADEND) */




