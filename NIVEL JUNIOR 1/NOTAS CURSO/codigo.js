// 7)
//-----------NOTASSSS
//CONCATENACION TEXTO
// saludo = 'que rollo';
// name = 'jose'
// frase = saludo + name
// document.write(frase)
// document.write('<br>')


// //CONCATENACION NUMEROS STRING FORZADO
// num1 = 5;
// num2 = 6
// r = "" + num1 + num2
// document.write(r)
// document.write('<br>')
// // Aqui lo que paso es que se concatenaron los 2 numeros por que se puso unas comillas que forzaron la cadena de texto, ya que cuando el codigo detecta poquito texto todo lo hace
// // texto


// //CONCATENACION NUMEROS STRING FORZADO
// num1 = "8"
// num2 = 6
// r = num1.concat(num2)
// document.write(r)
// document.write('<br>')
// // En este ahuevo se ocupa que haya una string de texto


//CONCATENACION TEXTO con ${}
// nombre = 'cesar del rio'
// accion = `soy, ${nombre} y estoy escribiendo codigo`;
// document.write(accion)
// Aqui pasaron varias cosas, para empezar se le ponen ` al codigo en lugar de las '' luego primero se tiene que definir la variable que va a estar dentro de la otra y aqui ya no se suma nada,
// solo se va a presentar la parte que tiene dentro la de ${}
// document.write('<br>')


// COMILLAS DOBLES Y COMILLAS SIMPLES
// nombre = 'cesar del rio'
// frase = "Mi nombre es 'cesar' y soy crack"
// document.write(frase)
// Aqui asi si funcionaria pero si se pinen otras comillas dobles en medio de esta frase seria error por que cerraria la frase donde dice 'mi nombre es' quedaria cesar fuera y luego seria
// "y soy crack", entocnes si empiezas o terminas con comillas dobles o simples no puedes meter una de las otras dentro




// 8)
//---------------- OPERADORES LOGICOS
// let valor = true;
// let valor2 = true;
// let resultado = valor && valor2;
// este con && lo que hace es que muestra true si es que los 2 valores tienen el valor boleano de true

// let resultado2 = valor || valor2
//Este lo que hace es que con que haya una sola que sea verdadera ya te regresa verdadero y si las 2 son falsas ps falso, es un 'or'

// let resultado3= !valor
//Este lo que hara es que si una condicion es verdadera te la hara falsa, y si una es falsa te la hara verdadera

// let num1 = 12;
// let num2 = 24;
// let num3 = 25;
// let num4 = 92;
// let num5 = 91;
//
// op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3)
//
// document.write(op)





//9)
//Camelcase ¿Que es?
// Camelcase es la propiedad de javascript que es que cuando escribas codigo la primera letra se escribe en minusculas pero ya la segunda y en adelante en mayusculas la primera letra
// .getElementById <-- ASI:

// 10)
// Condicionales
// let holaAdios = prompt('Ponga si quiere que digan hola o adios')
// if (holaAdios == ("adios")) {
//   alert('adios')
// }

// else if (holaAdios == ("hola")) {
//   alert('hola')
// }



// ------------------------------------PARTE DOSSSSSSS----------------------------------------------------------
// 12)ARREGLOS o ARRAYS
// let pc1 = ["CesarPc", "8GB RAM", "528gb", "AMD RYZEN 7"];

// // Arreglos asociativos
// let pc2 = {
//   name:"Cesarpc",
//   ram:"8gb",
//   procesador: "amd ryzen 7",
//   espacio: "528gb"
// }
// // Los asociativos lo que hacen es que en vez de darle un numero le dan un nombre a cada elememto.
// let nombre = pc2["name"]
// let ram = pc2["ram"]
// let procesador = pc2["procesador"]
// let espacio = pc2["espacio"]

// frase = `el nombre de la pc es ${name} <br>
//          el procesador es ${procesador} <br>
//          la ram es ${ram} <br>
//          el espacio es ${espacio} <br>`
// document.write(frase)

// 11)BLOQUES E ITERACION
// let numero = 0

// WHILE
// while (numero <= 10) {
//   numero++
//   '<br>'
//   document.write(numero)
// }
// While es como un  if nomas que infinito, puede llegar a crear un bucle infinito


// DO WHILE
// do {
//   numero++
//   '<br>'
//   document.write(numero)
// } while (numero <= 10);

// Este es el do while primero ejecuta sin importar la condicion y luego checa la condicion

//BREAK
// while (numero < 1000) {
//   numero++;
//   document.write(numero + "<br>")
//   if (numero == 10) {
//     break;
//   }
// }
// Aqui break esta ayudando para poder parar el while junto con un if en cuanto el codgio llegue a 10
// Esto se puede usar un poco en las contraseñas que busque y busque y ya que se encuentre pues ya pare



// FOR Y CONTINUE
// for (let i = 0; i < 20; i++) {
//   if (i == 12) {
//     continue;
//   }
//   document.write(i + "<br>")
// }

// Pasos de el for:
// -Se declara la variable
// -se pone la condicion que debe de cumplir
// -se aumenta o se decrementa
// -Se ejecurta el codigo dentro de las llaves


// Cabe recalcar que aqui si se pone otra variable que se llame i y se le pone otro valor dentro del for nada mas sera igual a 0
// Por fuera seguira con el mismo valor

// CONTINUE:Esto aqui lo que hara es que cuando llegue el numero 12 se lo saltara y pasara al 13



// FOR IN Y FOR OF --------------
// let animales = ['Gato', 'Perro', 'T-rex']
// for (animal in animales) {
//   document.write(animal + '<br>')
// }

// document.write('<br>')

// for (animal of animales) {
//   document.write(animal + '<br>')
// }

// DIFERENCIA:
// For in muestra la posicion de los elementos
//For of muestra los elementos de primeras


// LABELS

// nombres1 =  ["Josefa","Mria","Carlos"]
// nombres2 = ["pedro","jose","juan",nombres1, "josefina"]

// forRancio:
// for (let nombre in nombres2) {
//   if (nombre == 3) {
//     for (let nombre of nombres1) {
//       document.write(nombre + "<br>")
//       break forRancio;
//     }
//   }else {
//       document.write(nombres2[nombre] + "<br>")
//   }
// }


// Aqui lo que paso es que se puso un array dentro de otro, por lo eu cuando en el nombres 2 la posicion sea 3,
// Se va a ver el nombres1 que es otro array y ya despues de escribe ese array
// Se le puso el nombre  forRancio al forin que abarca a todos,y aqui se va a escribir josefa tambien por que antes de quebrarse se escribio un elemento.



// ------14) FUNCIONES

// FUNCION NORMAL
// function saludar() {
//   respuesta = prompt('Que rollo como te fue?')
//   if (respuesta == "bien") {
//     alert('que bueno')
//   }else if (respuesta == "mal") {
//     alert('una pena')
//   } else{alert('F')}
// }
// // Aqui apenas se esta declarando pero para ejecutarlo se debe de llamar asi:

// saludar()
// Esto te ahorra codigo


// RETURN
// function saludar() {
//   alert('hola')
//   return "se saludo correctamente"
// }
//
// let saludo = saludar()
// document.write(saludo)

// El retrun lo que pasa es que la funcion puede ejecutar pero si no tiene return no se mostrara nada en pantalla,
// con el return es lo que da la funcion, eso le dara un valor a la funcion, ya que se retorne un valor finaliza la funcion

//PARAMETROS
// function suma(num1,num2){
//   let res = num1 + num2;
//   return res;
// }
// let resultado = suma(parseFloat(prompt("Ponga un numero")), parseFloat(prompt("Ponga otro numero")))
// document.write(resultado)
// Esto es asi para intentar no poner document.write

// Son variables mas dinamicas que se declaran a la hora de ejectutar el codigo
// Y le puse lo del prompt para que se pudiera poner o que el usuario quiera

// EJEMPLO 2
// function saludar(nombre) {
//   let frase = `¡Hola! ${nombre}, como te ha ido?`
//   document.write(frase)
// }
// saludar(prompt("Escribe tu nombre"))
// Aquin la computadora toma como nombre lo que esta dentro de el parentesis en el nombre d ela funcion que es saludar


// SCOPE
// Es cuando hay variables que tienen un alcance regional, se usan con el let


// FUNCION
// const saludar = nombre => document.write(`hola ${nombre} como estas?`);
// saludar("jose")

// Las funciones flecha solo cambian la posicion de la function lo pone despues de los () y despues de esos se le pone un => que equivale a la funciomn
// Aparte en los parametros no se le ocupa poner el () si solo es uno, y si solo es una linea de codigo se puede quitar las {}
// Otro de las ventajas es que el valor se retorna automaticamente




// const calificacion = (nombre, promedio) => document.write(`hola ${nombre}, saco ${promedio}, en matematicas`);
// calificacion(
// prompt('Ponga tu nombre kiki prot'),
// prompt('pon tu promedio en matematicas')
// );



//---------------------CAPITULO 3

//15)-- PROGRAMAICION ORIENTADA A OBJETOS

// Definicion:
// Paradigma de l programacion para programar objetos como lo hariamos en la vida real


//16) --CONCEPTOS BASICOS:
//-----Clase:Como una plantilla que creamos para que con eso podamos crear objetos, "Favrica de objetos"
//-----Objetos:Lo que crea la Clase
//-----Atributo:Particularidades, carecteristicas del objetos
//-----Metodo:Lo que puede hacer el objetos
//-----Constructor: Funcion obligatoria va en la clase y va a contruit las propiedades del objetos
//-----Instancion:Es cuando termina todo el proceso

// class animal {
//   constructor(especie,edad,color) {
//     this.especie = especie;
//     this.edad= edad;
//     this.color = color;
//     this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//   }
//   verInfo(){
//     document.write(this.info)
//     // Este va a ir fuera del constructor y dentro de la clase
// }}

// // Los metodos es una funcion pero dentro de la clase, y no puedes usar funciones flecha en las clases
// // this es el objeto que se va a crear, lo que esta en los parentesis es un parametro pero ya con this.especie,es la propiedad que tendra el objeto


// let perro = new animal("perro",5,"rojo")
// perro.verInfo()


// El new lo que hace es que va a crear un objeto de la clase animal

// document.write(perro.color)
// Asi se accede a las propiedades del objeto

// 17)Caracteristicas de la programacion orientada a objetos
// -----Abstaccion:-Intentar reducir todo el objeto, y reducir todos sus componentes basicos, se resume // TODO:
// -----Modularidad:-Esto es separar el codigo en varios pedazos pequeños
// -----Encapsulamiento:-Esto es hacer que todos los datos esten privados, y la ifnromacion no se acceda tan sencilla
// -----Polimorfismo:Ver como un pbketo se comporta de otra forma en el mismo metodo
// Cuando se pueden juntar esos 4 se hace un programa de poo ideal


// 18) Otros conceptos de la poo

// class Animal {
//   constructor(especie,edad,color) {
//     this.especie = especie;
//     this.edad= edad;
//     this.color = color;
//     this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}` + '<br>';
//   }
//   verInfo(){
//     document.write(this.info)}}

//     class Perro extends Animal{
//       constructor(especie,edad,color,raza){
//       // Aqy¡ui lo que pasara es que lo del cosntructor de esta clase va a heredar lo de el cosntructor de arriba con un perro, y se le añade lo de raza
//       super(especie,edad,color)
//       this.raza = raza;}
// ladrar(){
//   alert('WAW')
// }
//     }

//     let perro = new Perro("perro",5,"marron","pitbull")
//     // Esto de perro el objeto ocupa ponerse asi por que no puede haber un objeto con el mismo nombre de la clase
//     let gato = new Animal("gato",2,"negro")
//     let pajaro = new Animal("pajaro",3,"verde")

//     perro.verInfo()
//     perro.ladrar()
//     gato.verInfo()
//     pajaro.verInfo()

// METODOS ESTATICOS
// Metodo que no necesita que se defina la clase para poder ser creado, y se usa static
//Es mas ni ocupas crear un objeto, solo creando una clases

// METODOS GETTERS Y SETTERS
// Getters para obtener un valor
// Setters para modificarlos o definirlo

// class Animal {
//    constructor(especie,edad,color) {
//      this.especie = especie;
//      this.edad= edad;
//      this.color = color;
//      this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}` + '<br>';
//    }
//    verInfo(){
//      document.write(this.info)}}
//
//      class Perro extends Animal{
//        constructor(especie,edad,color,raza){
//         // Aqy¡ui lo que pasara es que lo del cosntructor de esta clase va a heredar lo de el cosntructor de arriba con un perro, y se le añade lo de raza
//        super(especie,edad,color)
//        this.raza = raza;}
//  static ladrar(){
//    alert('waw')
//  }
//  // Aqui se puede ver un metodo estatico
//      }
//
//      const perro = new Perro("perro",5,"marron","pitbull")
//       // Esto de perro el objeto ocupa ponerse asi por que no puede haber un objeto con el mismo nombre de la clase
//      const gato = new Animal("gato",2,"negro")
//      const pajaro = new Animal("pajaro",3,"verde")
//      // Las clases se definen con const, si las definen con let, se tiene que modificar el valor de la variable
//      // no te dara ningun error pero aun asi estaria fallando tu programa
//
//      perro.verInfo()
//      Perro.ladrar()
//      gato.verInfo()
//      pajaro.verInfo()


// GETTERS Y SETTERS
    //  class Animal {
    //     constructor(especie,edad,color) {
    //       this.especie = especie;
    //       this.edad= edad;
    //       this.color = color;
    //       this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}` + '<br>';
    //     }
    //     verInfo(){
    //       document.write(this.info)}}

    //       class Perro extends Animal{
    //         constructor(especie,edad,color,raza){

    //         super(especie,edad,color)
    //         this.raza = raza;}

    // set modificarRaza(newName){
    //     this.raza = newName;
    //   }

    // get getRaza(){
    //   return this.raza;
    // }

    // // Los getters y setters se utilizan para acceder a propiedades privadas o en caso de javascript a datos encapsulados

    //       }

    //       const perro = new Perro("perro",5,"marron","pitbull")

    //       const gato = new Animal("gato",2,"negro")
    //       const pajaro = new Animal("pajaro",3,"verde")


    //       perro.verInfo()
    //       perro.modificarRaza = "pedro"
    //       // Se pasa como metodo pero lo toma como propiedad, asi que tendrias que tener el valor nuevo despues.
    //       gato.verInfo()
    //       pajaro.verInfo()

    //       document.write(perro.raza)





    // ------------------------------------20) METODOS DE CADENAS
    // let cadena = "cadena de prueba";
    // let cadena2 = "cadena";

    // resultado = cadena.concat(' bola')
    // Concat lo que hace es que solo junta dos valores o variables, automaticamente se hace un string

    // resultado = cadena.startsWith(cadena2)
    //Esto lo que hara es que checara si la variable cadena empieza con la variable cadena2 y devolvera un valor booleano
    //y hace lo mismo que endsWidth que lo que hace es que checa si termian con eso

    // resultado = cadena.includes(cadena2)
    // Esto lo que hara es que va a checar si una cadena esta dentro de otra sin importar su posicion y tambien devuelve u valor booleano


    // resultado = cadena.indexOf(cadena2)
    // Este te regresara un numero, la posicion en la que se encuentre la primera letra de el valor que se esta buscando, ya que como las cadenas de texto son un objeto, tienen posiciones por vcada letra,
    // Lo que esto hara es que va a buscar que rollo pues, va a buscar y te dara la posicion de la primera letra del valor que buscas, si no esta esa posicion te dara -1 ya que esa posicion no existe

    // resultado = cadena.lastIndexOf("prueba")
    // ESto dara la posicion del ultimo valor que inicia con esta letra o variable pues.

    // resultado = cadena.padStart(20,"1")
    // ESto es que rellenara la cadena hasta que tenga el valor que le pusimos ahi con el texto que le pusimos ahi al lado
    // Y padEnd lo que hace es lo mismo pero despues de la cadena

    // resultado = cadena.repeat(4)
    // Esto lo que hace es que repetira la cadena con el numero que se le puso ahi







     // --------------------------ESTAS MAS QUE NADA LAS TRANSFORMAN LAS CADENAS
     // let cadena = "Hola,como,estas?"

    // resultado = cadena.split("como")
    // // Este de split lo que hara es que por ejmeplo aqui cada que encuentre una coma va a separarlo, creando varios valores, que al final estan dentro de un mismo array
    // // Si se le pone como entre los parentesis se puede dividir los valores y se eliminara el como pasando a ser el valor 1 el estas


    // resultado = cadena.substring(0,2)
    // Esto lo que hace es que muestra nomas las letras, ya que tambien son strings, aqui solo muestra el "ho", del hola ya que solo mostrara del elemento 0 al 2
    // Con el que empieza esta incluido con el que termian no se mostrara


    // resultado = cadena.toLowerCase(cadena)
    // Este todo lo pasa a minuscula, y el toUpeerCase los pasa a mayuscula


    // let cadena = 50
    // let resultado = cadena.toString()
    // document.write(2 + resultado)
    // Este de toString lo que hace es que lo convierte a string por lo que se hace cadena de texto aunque sea un numero, por lo que termina concatenandolos, convierte a un string el dato

    // let cadena = "    pedro    "
    // resultado = cadena.trim(cadena)
    // document.write(resultado[0])
    // Este de trim lo que hace es que elimina los espacios que tenga una cadena de texto, si no aqui se mostraria un espacio y no la "p"
   //Luego esta trimEnd que elimina los espacios del final y trimStart elimina los del principio




// ------------- METODOS DE ARRAYS
// Estos solo transforman el array
   // let nombres = ["pedro", "maria", "jorge"]

    // POP Y SHIFT--------------------
   // let resultado = nombres.pop()
   // document.write(resultado)
   // Despues de que se le sque el ultimo al original solo le quedara pedro y maria
   // Este de pop lo que  hara es que te mostrara el valor de el ultimo valor que este ahi


  // let resultado = nombres.shift()
  // document.write(resultado)
  // // Este lo que hara es que va a sacar el primero

  // document.write("Array original: " + nombres + "<br>")
  //
  // document.write("Eklemento eliminado: " + nombres.pop() + "<br>")
  //
  // document.write("Array Modificado: " + nombres + "<br>")


  // -----------PUSH
  // document.write(nombres + "</br>")
  // let resultado = nombres.push("joselito", "robert")
  // // Este de push lo que hace es que añade un nuevo valor al array
  // document.write(resultado)
  // Si se le pone asi te dara el numero de valores que tiene esa variable

  // REVERSE
  // let resultado = nombres.reverse()
  // document.write(resultado)
  // ESte lo que hace es que invierte los valores del array, los pone del final al principio


  // UNSHIFT
  // document.write(nombres + "</br>")
  // let resultado = nombres.unshift("joselito")
  // document.write(nombres)
  // Es como push pero los agrega al principio y no al final


  // sort
  // let numeros = [2,3,4,6,5,7,1]
  // document.write(numeros + "<br>")
  // numeros.sort()
  // document.write(numeros)
// Este lo que hace es que los ordena ya sea con numeros de menor a mayor o si fuera por el titulo de forma alfabetica

// // ---------------------------SPLICE
// document.write(numeros + "<br>")
// numeros.splice(1,2,"jose")
// // Aqui lo que haces es que en el primer valor se pone la posicion em la que empezara a borrar y la otra cuantos borrara, y la tercera, se pone lo que quieras agregar ahi
// document.write(numeros)


// --------------METODOS ACCESORES

// -----JOIN
// let numeros = ["hola","creckes"]
// document.write(numeros + "<br>")
// let resultado = numeros.join("elemento:")
// document.write("elemento: "+ resultado)
// // Aqui en el elemento que se suma con el resultado es para el pirmar valor que nada lo puede separar
// Este de join lo que hace es que va a convertirlo en una cadena de texto
// La difernecia entre este y toString() es que con join puedes separarlo con lo que sea poniendo entre los aprentesis lo que quieras


//-----SLICE
// document.write(numeros + "<br>")
// let resultado = numeros.slice(0,1)
// // Este de slice lo que hace es que te muestra los elemento dentro de un array, desde un numero hasta Otro
// // Si quieres que se seleccionen todos los elementos si tienes muchos, tienes que poner un -1
// document.write(resultado)

// DE REPETICION
// let numeros = ["bobo", "crack", "poop", "buenardo", "pepe"];
// numeros.filter(numero => document.write(numeros + "<br>"))
// Esto lo que hace es que es un bucle, en el que se muestra numero y se deja un espacio en linea
// Filter lo que hace es que recibe como parametro una funcion y en cada vuelta se veria cada elemento que esta en el array

// filter y forEach son lo mismo- PEROOOOOOOO con filter se puede hacer asi

// resultado = numeros.filter(numero => numero.length > 4)
// document.write(resultado)

// Y con forEach no permite tener nuevos arrays solo con elementos con determinada condicion

// ----------------------OBJETOOOOOO MATHHHHH- BASICO

// --METODOS--

// SQRT- RAIZ CUADRADA
// let numero = Math.sqrt(25)
// document.write(numero)


//CBRT- RAIZ CUBICA
// let numero = Math.cbrt(25)
// document.write(numero)


//MAX- TE DA EL NUMERO MAXIMO
// let numero = Math.max(12,12,34,56,78,97,65,4,32,12,34,5,6,4)
// document.write(numero)


//MIN- TE DA EL NUMERO MENOR
// let numero = Math.min(12,12,34,56,78,97,65,4,32,12,34,5,6,4)
// document.write(numero)


//RANDOM- DA UN NUMERO PSEUDOALEATORIO
// Q es pseudo-aleatorio?- por que es exacto siempre, pero lo tomara aleatorio pa nosotros
// let numero = parseInt(Math.random()*100)
// document.write(numero)
// // Esto devuelve el valor de un numero aleatorio entre 2 numeros


//ROUND- Esto redondea a los numeros
// let numero = Math.random()*100
// numero = Math.round(numero)
// document.write(numero)


//FLOOR-Redondea para abajo
// let numero = Math.random()*99
// numero = Math.floor(numero + 1)
// document.write(numero)
// Se pone lo de el 99 para que pueda salir un numero del 1 al 99 que no salgan ni el 0 ni el 100 saldran del 1 al 99


// TRUNC
// let numero = Math.trunc(9.9)
// // Trunc lo que hace es que elimina los decimales sin redondear
// document.write(numero)


// let numero = Math.PI;
// document.write(numero)
// // Este es para tener pi







//-------------------------------- CAPITULO 5
//LA CONSOLA

// assert
// console.assert(5 > 3);
// Este de assert ya no se usa pero, lo que hace es que si le das un valor y es correcto no dira nada pero si no es cierto, te pondra un error;

//Clear
// console.clear()
// Esto limpia la consola

//Error
// console.error("capo que hiciste?");
// Esto lo que hace es que va a mostrar lo que pongas ahi en la consola cuando haya un error


//info
// console.info("muy bien tu trabajo, pero eso ya no se usa")
// Esto lo que hara es que mostrara lo que pongas ahi en el parentesis
//es igual a console.log() solo que uno es informativo y el log es de depuracion


//table
// console.table([4,5,4,2,34,3,2,2,2])
// Este lo que hara es que con la data que le pusiste ahi que por lo general es un array, u objeto, te hara una tabla, poniendo la posicion del elemento y cual es


//warn
// console.warn("che capo la vas a cagar en...");
// Eso lo que hace es que muestra una advertencia


//dir- OBSOLETO
// console.dir([5,4,3,3,4,5,3,2]);
// Este pone una lusta con las propuedades del objeto de js especificado



// count
// let sumar = (num1,num2)=>{
//   document.write(num1 + num2)
//   console.count()
// }
// Este nos dice las veces que ejectutamos esta funcion, por lo que es util


//countReset
// console.countReset()
// Este lo reinciia el conteo y se utiliza mas para ver cuantas veces se ejecuta algo


 // console.group()
// Este lo que hace es que genera un grupos que puedes abrir y cerrar en la consola


// console.groupEnd()
// Este termina el grupo


//console.groupCollapsed("frutas")
// Este lo que hace es que crea un grupo nomas que lo genera cerrado, para que tu lo escibras todo despues


//console.time()
// ESte lo que hace es que genera un temporizador


//console.timeLog()
//Este nos dice que tiempo paso desde que inciio el Time

// console.timeEnd()
//Este elimina directamente el temporizador


// Este de time puede ayudar a ver cuanto tiempo tarda el usuario en ejecutar una accion


// console.time()
// const sumar = (num1,num2)=>{
//   document.write(num1,num2)
//   console.timeLog()
// }
//
// sumar(2,4)
// sumar(2,4)
// sumar(2,4)
// sumar(2,4)
// sumar(2,4)
// sumar(2,4)
// console.timeEnd()



// console.log("%crancio","color:red;background:black;padding:20px 100px;border:3px solid blue;")
// Asi se le hace para cambiar el color de algun texto en la consola y darle mas propiedades.



//-----------------27) DOM

// Que es un nodo?
// Es cualqueier etiqueta del cuerpo como un parrafo, el body, o etiquetas de una lista

// TIPOS DE NODOS
// El nodo docuemnt, es el nodo mas grande de todos, del cual derivan todos los demas
// Nodo elemente: son nodos definidos por etiquetas html, una p, h1, div.
// Text: el texto de un nodo element
// Attribute: atributos que tienen las etiquetas, en js no se ven como nodos si no como, informacion asociada a un nodo element
// Comentarios, y los otros tipos como el doctype, tambien generan nodos


// 28) Metodos de seleccion de elementos- Document

// document.getElementById('id')- selecciona el elemento por ID
// document.getElementsByTagName('tagName')- selecciona los elementos que coincidan con el nombre de la tarea especificada
// document.querySelector()- devuelve el primer elementto que coincida con el grupo especificado de los selectores
// document.SelectroAll()- devuelve todos los eleementos que coincidan con el grupo especificado de selectores.



// let parrafo = document.getElementById('parrafo')
// Este lo que hara es que buscara el elemento con ese ID

// let parrafo = document.getElementsByTagName('p')
// no se recomienda este tipo de seleccion
// Esto lo que hara es que buscara por el nombre de la etiqueta, ya sea un div, un parrafo un h1, etc.
// Esto devolveria una coleccion, no un array es una lista de elementos


// document.querySelector('#parrafo')
// Este lo que hace es que devuelve el primer elemento que coincida con los selectores, y se usa con el punto la clase, con el # el id y asi

// parrafo = document.querySelectorAll("#parrafo")
// Si hay muchos de los elementos con esto lo que regresara es un node list que es una lista de nodos

// document.write(parrafo)



// 29) METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS

// -setAttribute()- Modifica el valor de un atributo

// -getAttribute()- Obtiene el valor de un atributo

// -removeAttribute()- Quita el valor de un atributo


// const rangoEtario = document.querySelector('.rangoEtario')

// CAMBAINDO UN ATRIBUTO
// rangoEtario.setAttribute("type","text")
// Aqui en el primer parametro se pone el tipo de input que tiene actualmente, y en el otro al que se quiere cambiar


// OBTENIENDO UN ATRIBUTO
// let atributo = rangoEtario.getAttribute("type")
// document.write("<br>" + atributo)
//aqui obtuve el valor del atributo type, y me lo devolvio


// ELIMINANDO UN ATRIBUTO
// let valorDelAtributo = rangoEtario.removeAttribute('type')
// Aqui ya elimine type


// 30) ATRIBUTOS GLOBALES- Todos los docuemntos html tienen esto
//  contenteditable- indica si el elemento puede ser modificable por el usuario (booleano)
// dir-Indica la direccionalidad del texto
// hidden- indica si el elemento aun no es o ya no es relevante
// style- conteniene declaraciones de estilos CSS para ser aplicadas al elemento
// tabindex- indica si el elemento puede obtener un focus de input
// title- contiene un textp con informacion relacionada al elemento al que pertenece


 // const titulo = document.querySelector(".titulo");


 // titulo.setAttribute("contentEditable",true)
 // Esto lo que hace es que permite que se edite el texto


 // titulo.setAttribute("dir","rtl")
 // Cambia la direccion del texto, pero se recomienda usarse en css mas que nada
 // Este tiene 2 valores:
 // 1)ltr
 // 2)rtl


 // titulo.setAttribute("hidden",false)
 // Esta no tiene forma de que no se muestre si ya esta definido


 // titulo.setAttribute("tabindex","0")
 // Este se muestra con numeros, y dependiendo del numero que tenga se mostrara primero que otros, va de menor a mayor, misntras mas grande sea el numero mas leugo se seleccionara al presioanr tab


// titulo.setAttribute("title","jajajaj xd")
// El title es lo que se muestra cuando se pone el mouse encima de un elemento





//31) ATRIBUTOS DE LOS INPUTS
// const input = document.querySelector(".input-normal")
// const formulario = document.getElementById('formulario')

// estos sirven para modificar directamente desd ele objeto

// -className
// -value
// -type
// -accept
// -form
// -minLength
// -placeholder
// -required

// document.write(input.className)
// Esto te muestra el nombre de la clase

// document.write(input.value)
// este te da lo que esta dentro del input

// document.write(input.type = "range")
// este lo que hace es que te permite cambiar el tipo de input

// document.write(input.type = "file")
// input.accept = "image/gif"
//este sirve para soloa ceptar un tipo de archivo por ejemplo en los tipo file

// document.write(input.setAttribute("form","formulario"))
// este de form sirve para poder añadirlo a un formulario con un id en especifico





// 32) PROPIEDAD STYLE
// const titulo = document.querySelector(".titulo");
// titulo.style.color = "#29f";
// Esto es asi para poder modificar el style

// titulo.style.backgroundColor = "#36c";
// estas son las propiedades camel case que es cuando tienen 2 palabras, se pone la priemra con minuscla y la segunda ya con una mayuscula

// si se quiere modificar el placeholder por ejemplo se pone elemento.placeholder y asi con varias propiedades




// 33) CLASES, CLASSLIST Y METODOS DE CLASSLIST
// ¿QUE ES CLASSLIST?
// Es una particularidad de las clases de los OBJETOS

// const titulo = document.querySelector(".titulo")




// METODOS:
// 1-add()--> añade una clase
// 2-remove()--> remueve una clase
// 3-item()--> devuelve la clase de la posicicon especificada especificado
// 4-contains()--> verifica si ese elemento tiene o no la clase especificada- devolviendo un valor booleano
// 5-replace()--> reemplaza una clase con otra
// 6-toggle()--> si no tiene la clase especificada la agrega y si no la tiene la elimina

// en este de TOGGLE, hay una variable que  es que si se le pone ",true" despues del nombre de la clase si la tiene no la quitaria, sis e le pone false siempre la saca
// toggle tambien devuelve un valor booleano, si la tenia y la borra poner true, y si no la tenia y la pone da true
// elemento.classList.toggle("clase",true)
// elemento.classList.toggle("clase",false)



// EJERCICIO
// const caja = document.getElementById('caja');

//1ERA FORMA SIN SIMPLIFICAR
// function agrandar() {
//   if (caja.classList.contains('reducir')) {
//     caja.classList.replace("reducir","agrandar")
//   }else {
//     caja.classList.add("agrandar")
//   }
// }
//
// function reducir() {
//   if (caja.classList.contains('agrandar')) {
//     caja.classList.replace("agrandar","reducir")
//   }else {
//     caja.classList.add("reducir")
//   }
// }
// function normalizar() {
//     caja.classList.remove("reducir","agrandar")
// }


// YA SIMPLIFICADO, CON TOGGLE- que se pued etomar como un if predefinir¡do para las clases





// OBJETO NEW DATE()
// estan:
//  .getDate() -- esto lo que hace es que te da el dia del mes
//  .getDay() -- este te dara el dia de la semana conforme a su posicion 
//  lunes = 0- -martes = 1- -miercoles = 2- -jueves = 3- -viernes = 4- -sabado = 5- -domingo = 6
// .getMonth()-- te dara el mes igual solo que da 11 por que tambien cuneta el 0
// .getFullYear() -- este lo que hace es que te dara por ejemplo ahorita 2020
// .getHours() -- te dara las horas del 1 al 24
// .getMinutes() -- te dara los minutos en los que estamos
// .toDateString()-- este solo te daria la fecha ejemplo: (thu mar 12 2020)
//.toLocaleString()-- este te dira una fecha mas humana y es ejemplo: (12/3/2020 19:23:02)
// .toLocaleDateString()-- este te lo daria mas humanamente aun asi: 12/3/2020



// 36)OBTENCION Y MODIFICACION DE ELEMENTOS:

// -textContent---devuelve el texto de cualquier nodo
// -innerHTML---devuelve el contenido html de un elemento
// -outerHTML---Devuelve el codigo HTML completo de un elemento





// textContent
// const titulo = document.querySelector(".titulo")
// let resultado = titulo.textContent;

// document.write(resultado)

// aqui nomas nos devuleve el texto que podemos ver pero sin el html, osea que en modifficar con una etiqued¡ta <b> nos lo devolveria como si no estuviera
// ni muestra los estilos tamopoco



// innerHTML
// const titulo = document.querySelector(".titulo")
// let resultado = titulo.innerHTML;

// alert(resultado)


// Este lo que hace es que te muetsrav rese contenido pero con el html que tenga dentro tambien
// aqui se muestra en el alert por qu ele alert no interpreta el codigo pero el document.write si




// outerHTML
// const titulo = document.querySelector(".titulo")
// let resultado = titulo.outerHTML;

// alert(resultado)

// Este lo que hace es que muestra todo el contenido pero con todo y las etiquetas que tiene por fuera




// 37) CREACION DE ELEMENTOS:
// -creatElements()
// -createTextNode()
// -appendCHild()
// -createDocumentFragment()



// PRIEMRA FORMA DE CREAR OTRO ELEMENTO CON UN TEXTO DENTRO

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI");

// en el createElement siempre se ocupa poner en mayusculas, ya que es camelcase

// const textoDelItem = document.createTextNode("hola cracks")

// item.innerHTML = textoDelItem-- esta forma es una pero esta mal para crear un elemento

// item.appendChild(textoDelItem);
// contenedor.appendChild(item);

// aqui lo que he hecho es que meti dentro del item un hijo que es un texto y el item lo converti en hijo del contenedor
// console.log(item)


// EL TEXTNODE ES UN OBJETO





// SEGUNDA FORMA SIMPLIFICADA
// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI");
// item.innerHTML = "hola cracks"
// // Aqui esto ya no seria un objeto, esto es una string, pero egneralmente asi se haria
// contenedor.appendChild(item);




// ¿COMO SE PODRIAN CREAR MUCHOS ELEMENTOS?
// OJO: UN ELEMENTO SOLO SE PEUDE AGREGAR UNA VEZ, NO SE PUEDE AGREGAR MAS D EUNA VEZ, SON UNICOS

// 1RA FORMA PROBLEMATICA DE HACERLO

// const contenedor = document.querySelector(".contenedor")

// for (let index = 0; index < 20; index++) {
//    const item = document.createElement("LI");
//    item.innerHTML = "hola cracks"
//    contenedor.appendChild(item);
// }

// POR QUE TRAE PROBLEMAS?
//          Por que esto consume muchso recursos, ya que el DOM, lo que hace es que no esta creando esto muchas veces y solo añadiendolo,
//          lo que pasa es que lo borra muchas veces esto, lo borra y añade el otro entonces auii por ejemplo lo borro 20 veces.




// ENTONCES... ¿COMO SE DEBERIA DE HACER?
// con createDocumentFragment();

// const contenedor = document.querySelector(".contenedor")

// const fragmento = document.createDocumentFragment()
// es la misma solo se le añade eso, para evitar el consumo de recursos ya que solo se borra una vez la pagina, por lo que tarda


// for (let index = 0; index < 20; index++) {
//       const item = document.createElement("LI");
//       item.innerHTML = "hola cracks"
//       fragmento.appendChild(item);
//    }
//    contenedor.appendChild(fragmento)




// 38) OBTENCION Y MODIFICACION DE CHILDS (HIJOS)
// -firstChild- te dice cual es el primer hijo
// -lastChild- te dice el ultimo hijo de un elemento
// -firstElementChild-
// -lastElementChild
// -childNodes
// -children



// FIRST CHILD
// const contenedor = document.querySelector(".contenedor")
// const primerHijo = contenedor.firstChild;
// console.log(primerHijo)


// LASTCHILD
// const contenedor = document.querySelector(".contenedor")
// const ultimoHijo = contenedor.lastChild;
// console.log(ultimoHijo)


// OJO: aqui en el console,log saltaria algo que tiene un  #text, por que el espacio que hay entre el padre y el primer hijo, tambien lo toma como texto
// Tendria que estar asi para que si muestre la etiqueta h2 con su texto dentro
{/* <div class="contenedor"><h2>Un h2 comun</h2> */}



// PARA YA NO TENER QUE USAR EL ESPACIO SE PUEDE USAR ASI CON :

// -firstElementChild
// -lastElementChild


// FIRSTELEMENTCHILD
// const contenedor = document.querySelector(".contenedor")
// const primerHijo = contenedor.firstElementChild;
// console.log(primerHijo)



// LASTELEMENTCHILD
// const contenedor = document.querySelector(".contenedor")
// const ultimoHijo = contenedor.lastElementChild;
// console.log(ultimoHijo)


// Asi ya no importan los espacios que hayan en eso seria la misma



// CHILDNODES
// Estos sirven para darnos todos los textos que haya  en un contenedor, todos los nodos hijos sin importar si es el primero, ultimo, etc.
// No es un array es un NodeList una lista de nodos
// Es diferente a un array, no se pueden usar los modificadores y accesores de arrays
// pero se puede recorrer con for each, eso si se puede hacer

// const contenedor = document.querySelector(".contenedor")
// const hijos = contenedor.childNodes;
// console.log(hijos)



// CHILDREN

// const contenedor = document.querySelector(".contenedor")
// const hijos = contenedor.children;
// console.log(hijos)

// // ESte de children solamente va a buscar solamente los elementos, solo salen elementos HTML
// // solo saldrian h2, h4, p


// // ESTE NO SE PUEDE RECORRER
// // Se puede recorrer con un for of  asi.

// for (hijo of hijos) {
//    console.log(hijo)
// }

// "for of" se usa para mostrar lo que esta dentro de los indicies
// "for in" devuelve los indices





// 39)METODOS DE CHILDS (HIJOS)
// 1- replaceChild()
// 2- removeChild()
// 3- hasChildNodes()



// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P")
// const h2_nuevo = document.createElement("H2")
// h2_nuevo.innerHTML = "hola cracks"
// parrafo.innerHTML = "soy el parrafo"

// const h2_antiguo = document.querySelector(".h2")

// REPLACE CHILD
// AQUI SE ESTA REMPLAZANDO EL H2 NUEVO POR EL ANTIGUO
// contenedor.replaceChild(h2_nuevo,h2_antiguo)


// REMOVE CHILD
// AQUI SE ESTA BORRANDO EL H2 ANTIGUO POR COMPLETO
// contenedor.removeChild(h2_antiguo)


// HASCHILDNODES
// DEVULEVE UN VALOR BOOLEANO
// let respuesta = contenedor.hasChildNodes()



// if (respuesta) {
//    document.write("El elemento tiene hijos")
// }else{
//    document.write("El elemento no tiene hijos")
// }


// 40)PROPIEDADES DE PARENTS

// 1-parentElement
// 2-parentNode


// casi siempre se usa mas el parentElement, por que son casi lo mismo, por que parentNode seleccionan el padre del elemento, y parentElement saca el padre del elemento

// parentNode busca un nodo padre
// parentElement busca un elemento HTML padre

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P")
// const h2_nuevo = document.createElement("H2")

// const h2_antiguo = document.querySelector(".h2")

// console.log(h2_antiguo.parentElement)




// 41)PROPIEDADES DE SIBLINGS ( HERMANOS)

// -nextSibling: este lo que hace es que da lo que sigue a el elemento sleccionado
// -PreviousSibling: te da el hermano anterior a el selecciomnado

// ESTOS 2 PRIMEROS TE DARIAN, "#text", POR QUE LOS ESPACIOS SE TOMAN COMO TEXTO, PARA ESO SE USAN ESTOS

// -nextElementSibling: Estos te daran la etiqueta del sigueiente, no te daran #text

// -previusElementSibling:  Estos te daran la etiqueta del anterior a ese elemento, no te daran #text


// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P")
// const h2_nuevo = document.createElement("H2")

// const h2_antiguo = document.querySelector(".h2")

// console.log(h2_antiguo.nextElementSibling)




// 43)Nodos - Extras
// -closest(): este lo que hace es que nos retorna, el elemento ascendente mas cercano, el elemento mas grande para afuera, nos toma el contenedor mas cercano que tenga el elemento seleccionado, se trabaja como si fuera queryselector

// const div = document.querySelector(".div-3")
// console.log(div.closest(".div"))








































































































// --------------------------PRACTICAS Y EJERCICIOS QUE HE HECHO
// EJERCICIO

// const btnA = document.getElementById('btn-agrandar');
// const btnR = document.getElementById('btn-reducir');
// const btnN = document.getElementById('btn-normalizar');



// function agrandar() {
//   caja.classList.toggle("agrandar");
//   caja.classList.remove("reducir");
// }

// function reducir() {
//   caja.classList.toggle("reducir");
//   caja.classList.remove("agrandar");

// }
// function normalizar() {
//   caja.classList.remove("reducir", "agrandar");
// }


// btnA.addEventListener("click", agrandar)
// btnR.addEventListener("click", reducir)
// btnN.addEventListener("click", normalizar)




// EJERCICIOS PARA MEJORAR LA LOGICA:
// 1)
// var a = {
// A:0,
// B:0,
// C:0,
// D:0,
// resultado: function() {
//   if(a.C > a.B &&
//      a.D > a.B &&
//      a.D > a.C &&
//      a.D < a.A){
//        return true;
//      }
//      return false;
// },
// intervalo: setInterval(function(){
//   a.A = Math.ceil(Math.random()*4)
//   a.B = Math.ceil(Math.random()*4)
//   a.C = Math.ceil(Math.random()*4)
//   a.D = Math.ceil(Math.random()*4)
//   // aqui estaria pidiendo del numero 1 al 4 y se le pone math.ceil para que se redodndee hacia arriba y si saque del 1 al 4
//   if(a.resultado()){
//     // aqui se le puede colocar  el == true pero ya asi seria verdadero, y si se le pone el !a.resultado(), quedaria falso
//     clearInterval(a.intervalo);
//     document.write("atleta A esta en la posicion: ", a.A + "<br>") 
//     document.write("atleta B esta en la posicion: ", a.B + "<br>")
//     document.write("atleta C esta en la posicion: ", a.C + "<br>")
//     document.write("atleta D esta en la posicion: ", a.D + "<br>")
//   }
// },10)
// }


// 2)
// var c = {
//   Mac: {edad:0, velocidad:0, tono: 0},
//   Smith: {edad:0, velocidad:0, tono: 0},
//   Jack: {edad:0, velocidad:0, tono: 0},
//   Willy: {edad:0, velocidad:0, tono: 0},
//   resultado: function(){
//     if(
//       c.Mac.tono > c.Smith.tono &&
//       c.Mac.velocidad > c.Jack.velocidad &&
//       c.Mac.edad > c.Jack.edad &&
//       c.Willy.velocidad > c.Jack.velocidad &&
//       c.Mac.edad > c.Willy.edad &&
//       c.Mac.edad > c.Smith.edad &&
//       c.Willy.tono > c.Smith.tono &&
//       c.Jack.velocidad < c.Smith.velocidad &&
//       c.Jack.tono > c.Smith.tono
//       ){
//       return true
//     }
//     return false
//   },
// intervalo: setInterval(function(){
//     c.Mac.edad = Math.ceil(Math.random() * 2)
//     c.Mac.velocidad = Math.ceil(Math.random() * 2)
//     c.Mac.tono = Math.ceil(Math.random() * 2)

//     c.Smith.edad = Math.ceil(Math.random() * 2)
//     c.Smith.velocidad = Math.ceil(Math.random() * 2)
//     c.Smith.tono = Math.ceil(Math.random() * 2)

//     c.Jack.edad = Math.ceil(Math.random() * 2)
//     c.Jack.velocidad = Math.ceil(Math.random() * 2)
//     c.Jack.tono = Math.ceil(Math.random() * 2)

//     c.Willy.edad = Math.ceil(Math.random() * 2)
//     c.Willy.velocidad = Math.ceil(Math.random() * 2)
//     c.Willy.tono = Math.ceil(Math.random() * 2)

//     if (c.resultado()){
//       clearInterval(c.intervalo)      
//       document.write("El caballo de mac es: " + c.Mac + "<br>");
//       document.write("El caballo de Smith es: " + c.Smith + "<br>");
//       document.write("El caballo de Jack es: " + c.Jack + "<br>");
//       document.write("El caballo de Willy es: " + c.Willy + "<br>");
//     }
//   },1)
//   }


// 3) INTERES COMPUESTO
// function range(start, end) {
//   var ans = [];
//   for (let i = start; i <= end; i++) {
//       ans.push(i);
//   }
//   return ans;
// }

// let años = parseInt(prompt(('cuantos años estara ahorrando?')))
// let principal = parseFloat(prompt(('cuanto dinero tiene en su cuenta?')))
// let inversion_mensual = parseFloat(prompt(('cuanto invertira cada mes?')))
// let interes = parseFloat(prompt(('ponga su interes en decimales (10% = 0.1)')))
// document.write(' ')
// let final_amount = 0
// inversion_mensual = inversion_mensual * 12

// for (i in range(0,años)) {
//   if (final_amount == 0) {
//     final_amount = principal
//   }else{
//     final_amount = (final_amount + inversion_mensual) * (1 + interes)
//   }
// }
// alert(`esto es lo que tendra en su cuenta luego de ${años} años: ${final_amount}`);





// 4)Funcion que cuenta el numero de caracteres de una string
// function contador(cadena) {
// if (cadena == "") {
//   alert('eso no es un texto')
// }else{
//   document.write(`el numero de caracteres de ${cadena} es de : ${cadena.length}`)
// }
// }

// contador(prompt('ponga un texto'))




// 5)funcion que devuelve el texto recortado con el numero de caracteres indicados:
// function cortador(a,b) {
//   a = prompt('¿cuantos caracteres quiere que tenga?');
//   b = prompt('cual es la cadena de texto?')
//   if (isNaN(a) == false && typeof b === 'string') {
//     res = b.substring(0,a)
//     return res
//   }
//   else{
//     document.write('no escribiste un numero en el primero')
//   }
// }
// cortador()
// document.write(res)




// 6) Programa una funcion que dada una string devuelve un arrat de textos separados
// function convertir(a) {
//   var res;
//   var tipoA = typeof(a);
//   if (tipoA === 'string') {
//     res = a.split(" ")
//   }else{
//     alert('no es un valor valido')
//   }
//   console.log(res)
// }
// convertir("hola mundo")

// convertir(prompt('que quiere hacer un array?'))



// 7)Programa que cuenta hacia atras del numero que le des
// var num = parseFloat(prompt('que numero quiere poner?'))
// for(let i = 1; i <= num; i++) {
//   document.write(i + "<br>")
// }


// 8) que pregunte hasta que numero quieres que llegue la alerta legue ahi que mande un mensaje y que ese 100 quede de fondo siendo sumado

// const puntos = (puntuacion) =>{

// }



// 9)un programa que cuente el numero de veces que se repite una palabra en un texto

// const textoEnCadena = (cadena = "", texto = "") =>{
//    if(!cadena) return console.warn("no ingresaste un texto largo");

//    if (!texto) return console.warn('no ingresaste la palabra a evaluar');

//     let i = 0;
//      contador = 0;
//       while (i !== -1) {
//         i = cadena.indexOf(texto,i)
//          // aqui en esto de el index of se le pone el i en el segundo parametro por que ahi vale 0, si es 0 empezara a buscar desde el primer elemento
//          if (i !== -1) {
//             i++;
//             contador++;
//          }
//       }
//       return console.info(`la palabra ${texto} aparece ${contador} veces en el texto`)
//    }

//    textoEnCadena("ey que rollo plebes plebes plebes", "plebes")



// 10)FUNCION QUE VALIDA SI UNA PALABRA ES UN PALINDROMO O NO
// const palindromo = (palabra = "")=>{
//    if (!palabra) return console.warn("no ingresaste una palabra o frase")

//    palabra = palabra.toLowerCase();
//    let alReves = palabra.split("").reverse().join("");

//   if (palabra === alReves) {
//      console.info(`la palabra "${palabra}" es un palindromo y al reves es: "${alReves}" `)
//   }else{
//      console.info(`la palabra "${palabra}" no es un palindromo y al reves es: "${alReves}"`);
//   }
// }

// palindromo("hannah")




// 11)Funcion que te de un numero aleatorio entre el 501 y el 600
// const aleatorio = ()=>{
//    console.info(Math.round(Math.random() * 100 + 500 )) 
// }

// aleatorio()




// 12)Funcion que reciba un numero y evalue si es capicua o Node, que sea igual en un sentido que en otro por ejemplo el 2002
// const capicua = (numero = 0) =>{
//    if (!numero) return console.warn("no ingresaste un numero");
//    if (typeof numero !== "number") return console.error(`el valor "${numero}" no es un numero`);

//    numero = numero.toString()
// let numeroReves = numero.split("").reverse().join("")
// if (numeroReves === numero) {
//    console.info(`el numero "${numero} es una capicua y al reves es : ${numeroReves}"`)
// }else{
//    console.info(`el numero "${numero}  NO es una capicua al reves es : ${numeroReves}"`)}} 

//    capicua(2004)


// 13)Sacar el factorial de un numero
// const factorial = (numero = undefined) =>{
//    if (typeof(numero) !== "number")alert('esto no es un numero');
//    let factorial = 1;
//    for (let i = numero; i > 1; i--) {
//       factorial *= i;
//    }
//    return alert(`el  numero: ${numero} tiene un factorial de ${factorial}`)
// }
// factorial(parseFloat(prompt('que numero quiere sacar el factorial?')))


// 14)(Programa una funcion que determine si un numero es primo) y que devuelva un valor boolenao
// const numPrimos = (numero = undefined) =>{
//    let res 
//    let prim = true
//    for (let i = 1; i < numero ; i++){
//       res = i / numero
//      if (i !== 1 && i !== numero && res % 1 === 0) {
//         alert(`el numero ${numero} NO es primo`)
//         break
//      }else{
//         if (i === numero && prim === true) {
//            alert(`el numero ${numero} es primo`)
//         }}}}
// numPrimos(20)


// CUAL FUE MI ERROR?
// Me compiqeu demasiado, aqui lo que pasa es que el algortimo buscara que prim sea true siempre en ese lado, por lo que siempre se mstraria el segundo mensaje, pero i no tniene que ser igual al numero
// me complique mucho el codigo





// asi lo hizo el maestro
// const numeroPrimo = (numero = undefined)=>{
//    let divisible = false
//    for (let i = 2; i < numero; i++) {
//       if ((numero % i) === 0) {
//          divisible = true
//          break
//       }
//    }
//    return divisible
//    ? alert(`el numero ${numero},No es primo`)
//    : alert(`el numero ${numero},es primo`)
// }

// numeroPrimo(parseInt(prompt('que numero quiere')))




// 15) Programa una funcion que determine si un numero es par o impar
// const numerosPares = (numero = undefined) =>{
//    if (numero % 2 === 0) {
//       alert('es un numero par')
//    }else{
//       alert('es un numero inpar')
//    }
// }

// numerosPares(parseInt(prompt('ponga un numero')))






// 16)Programa una funcion para convertir a grados celcius a fahrenheit y viceversa
// const grados = (gradosCelcius) =>{
//    let fahrenheit = 0

//    fahrenheit = (gradosCelcius * 1.8) + 32;
// return alert(`${gradosCelcius} grados celcius son igual a ${fahrenheit} grados fahrenheit`)
// }
// grados(parseFloat(prompt('cuales grados celcius son a fahrenheit?')))




// 17)aplicar decsuento a una cantidad dada
// const sacarDescuento = (cantidadInicial, descuento) =>{
//        descuento = descuento / 100;
//    cantidadFinal = cantidadInicial * descuento;
//    return alert(`usted pagara $${cantidadFinal} pesos por la cantidad inicial de: $${cantidadInicial}`);
// }
// sacarDescuento(parseFloat(prompt('cual es la cantidad sin descuento?')), parseInt(prompt('de cuento es el descuento en porcentaje?')))



// 18)Funcion que saque cuantos años han pasado desde el dia de hoy con una clase
// class fecha {
// constructor(dia,mes,año){
//    this.año = año
//    this.mes = mes
//    this.dia = dia
//    this.fechaActual = new Date()
// }
// mostrarDias(){
//    let hoy = new Date()
//    hoy = hoy.toLocaleDateString().split("/")
//    document.write(hoy[0])
//    const diasTranscurridos = (((parseInt(hoy[2]) - this.año) * 365) + ((parseInt(hoy[1]) - this.mes) * 30) + (parseInt(hoy[0]) - this.dia))
//    // let diasTranscurridos = (.diff())
//    alert(`desde la fecha ${this.dia}/${this.mes}/${this.año} hasta hoy ${hoy} han pasado ${diasTranscurridos} dias`)
// }
// }

//  let nacimiento = new fecha(8,5,2010)
//  nacimiento.mostrarDias();








