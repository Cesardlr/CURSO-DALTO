// CAPITULO 7

// 43) INTRODUCCION A WINDOW
// Window es toda la pestaña y es el mas grande enm toda la jerarquia de leementos, contiene al DOM y a todos los elementos, ademas de muchas mas propiedades

// -Hereda las propiedades de EventTarget

// -open() - carga un recurso en el contexto de un nuevo navegador o uno que ya existe

// ventana = window.open('https://youtube.com')
// ventana.close()

// esto de aqui cerraria 

// -close() - cierra la ventana actual, o la ventana que ya se llamo



// -closed() - indica si la ventana referenciada esta cerrada o no con un boolean

// - stop - detiene la cvarga de recursos en el contexto de navegacion actual
// Este simula como si le picaramos a la cruz para dejar de cargar la ventana

// - alert() - muestra un cuadro de alerta con el contenido especificado y un boton aceptar

// - print() - abre el cuadro de dialogo imprimir para imprimir el documento actual.
// Esto saca el cuadro para poder imprimir automaticamente

// -prompt() - abre un cuadro de dialogo con el mensaje que solicita al usuario un dato string()


// -confrim() - abre un cuadro de dialgoo con un mensaje y dos botones 
// 1-Acepotar y 2- cancelar

// let confriacion = confirm("Quieres entrar a este sitio web?")
// if (confriacion == true){alert('ha sido abierto')}

// Esto puede devolver true si lo aceptas y false si no lo aceptas






// ESTAS SON MUY UTILES

// -screen - devuelve una referencia al objeto de pantalla asociado con la ventana

// const screen = window.screen
// El screen lo devuelve como objeto

// -screenleft - devuelve la distancia horizontal ente el borde izquierp del navegadpr y el borde izquiero de la pantalla


// -ScreenTop - devuelve la distancia vertical entre el bvorde superior del navegadopr y el borde superior de la pantalla

// const screenLeft = window.screenLeft;
// const screenRight = window.screenTop;

// console.log(screenLeft)
// console.log(screenTop)

// ESTE NOS DA EL VALOR CONMFORME A LA PANTALLA DE NUESTRA COMPUTADORA, EN DONDE ESTA POSICIONADO EL NAVEGADOR DE GOOGLE

// !!ESTAS SOLO SE PUEDEN LEER NO SE PUEDNE MODIFICAR!!



// -scrollX - devuelve el numero de pixeles que el docuemnto se desplaza actrualmentre horizontalmente

// -scrollY - devuelve el numero de pixeles que el doumento se desplaza actualmente verticalmente

// scrollX = window.scrollX
// scrollY = window.scrollY

// console.log(scrollX + " " + scrollY)

// Aqui scrollY te da cuantos pixzeles se scrollea en vertical y el scrollX te da cuanto se ha desplazado en horizontal


// -scroll() - desplaza la ventana a un lugar particulas en el documento con options y con posiciones

// window.scroll(0,100)
// Esto lo que hara es que va a hacer scroll en la pagina hasta esas coordenadas en pixeles




// ESTAS NO SON TAN UTILES
// -resizeBy() - cambia el tamaño de la ventana actual en una cantidad especificada
// window.resizeBy(100,200)


// -resizeTo() - redimensiona dinamicamente la ventana.+
// window.resizeTo(100,200)

// resizeBy y resizeTo son lo mismo nomas que resizeBy es relativo y el otro no

// -moveBy() - Mueve la ventana en una ubicacion relativa
// window.moveBy(100,200)

// -moveTo() - mueve la ventana en una ubicacion  absoluta
// window.moveTo(100,200)


// ESTOS DE ARRIBA SOLO SE PUEDEN USAR SI ESTAS DESDE UN SERVIDOR PERO CASI NI SE USAN



// -Objetos barProp:
// -locationbar
// -menubar
// -personalbar
// scrollbarsstatusbar
// toolbar

// Estos solo sirven para ver si estan visibles asi:

// window.locationbar.visible

// y te devuelve un valor booleano pero casi ni se usan





// 44)LOCATION
// -window.location.href  --> devuelve el href (URL) de la pagina actual
// -window.location.hostname --> devuelve el nombre del docminio del servidor web
// window.location.pathname --> devuelve la ruta y el nombre de archivo de la pagina actual
// -window.location.protocol --> devuelve el protocolo web utilizado (http: o https:)
// -window.location.assign() --> carga un nuevo documento



// href
//  const href = window.location.href;
//  document.write(href)
// Este es como que el mas general de todos, lso contiene a todos


// hostname
//  const hostname = window.location.hostname;
//  document.write(hostname)


// pathname
//  const pathname = window.location.pathname;
//  document.write(pathname)
// ESTO DEL PATHNAME ES TODO LO QUE VIENE LUEGO DEL DOMINIO


// protocol
//  const protocol = window.location.protocol;
//  document.write(protocol)

//  esto devuelve el protocolo si es seguro es https: si no seria http: ya que la 's' en https: es de ssl que es el certificado de seguridad de que todos tus datos estan protegidos


// assign

// window.location.assign('https:/www.youtube.com')
// Esto me llevaria a youtube ya que se añade otra direccion al archivo

// ENTENDER ESTOS CONCEPTOS ES MUY BUENO AL APRENDER NODE.JS
// HREF, HOSTNAME, PATHNAME, PROTOCOL










// ------------------- CAPITULO 8) WEB DEVELLOPING TOOLS ----------------

// COSAS QUE SE PUEDEN COPIAR DE LOS ELEMENTOS DESDE LA CONSOLA

// -outerHtml - se copia lo que has cambaido en el codigo desde la consola

// -jspath - te dice como seleccioanrlo a traves de un queryselector asi:
// document.querySelector("body > div > h2")

// -styles - este te permite copiar los estilos que tiene el elemetno seleccioando

// -xpath - te da en donde esta ese elemento conforme al documento
// /html/body/div/h2





// PODEMOS USAR EL FROCE STATE
// Esto nos permite forzar estados como el :hover o el ::before o el :active, eso sin tener que realizar la accion, osea permite que alfo sea un hover, sin tener que poner el cursos encima del elemetno


// DESPUES ESTAN LOS DOM BREAKPOINTS que veremos mas adelante


// En eso puedes trabajar condiferentes resolcuoones, luyefgo puedes ver el 75% de lo que vemos y eso, y luego en los 3 puntos puedes ver los mediaqueries, y un monton de cosas diferentes luego puedes tomar ss nomas al epdasito que quisieras, tienees el panel que se abre con ctrl + shift + p

// y puedes hacer ss


// En la pestaña Elements puedes buscar algun elemento en especifico presionando ctrl + f y se te abrira para poder filtrar en la pagina




// PESTAÑA SOURCES
// eSTE TE PERMITE VER TODOS LOS ARCHIVOS QUE ESTAN EN UNA PAGINA WEB

// Puedes guardar y eliminr cosas y todo eso se empezara a guardar en el codigo que tienes en vs code se guarda el cambio en tiempo real


// SNIPPETS
// ara en la consola no tener que poner siemrpe el mismo codigo podemos crear snippets, que estos son fragementos de codigo que podemos llamar solo con el nombre del snippet

// Estos siempre se quedartan ahi aunque apagues a la pagina, pero no solo en esa pagina si no que en todas, tambien los puedes guardar en tu computadora  dandole click derecho y save as





// PESTAÑA NETWORK
// Este sirve para poder ver el tiempo de carga que tiene cada uno de los documentos de la pagina, por lo que tenemos que picarle a All en el menu arriba de la grafica, te dice cuanto pesan cada uno de los documents, ya sea de CSS, html y js y te dice cuanto tiempo tardan en cargar cada pagina, te dice desde que milisegundo empieza a cargar eso sale en la grafica y te sale cuanto tiempo tarda en cargar toda la pagina

// Eso te sale hasta la parte de abajo de la pagina, cuanto termina de cargar, cuantas requests tiuene, cuanto pesa todo, cuanto tardo en cargar el DOM y toda la pagina, y todo eso puedes ver para pdoer optimizar el tiempo de carga de la pagina, y el gasto de recursos


// Si das click derecho puedes usar la ocpion de sort by que ordenara por diferente tipo de datos qu e tu le pongas, tiempo de carga, nombre, peso, etc.


// Luegos puedes ordenar por archivos, al lado de donde esta lo de AbortController, para pooder ver archivos .xhr o solo los .js, .css o los MD, o las fuentes, o los websoquets, o los otrso como los .ico


// Puedes bloquear algfuna cosa, con un archivo o algfo, incluso todo el dominio, algunas cosas, se cargan en cache, para que no se tenga que cargar todo de nuevo, esto seria un gasto de recursos muy malo, para eso pueden lelgar a servir las cookies

// , al final de el menu que esta ahi arriva de la grafica al final todo son herramientas de filtrado, peudes ver loq eu has bloqueado


// TODO ESTO SIRVE PARA OPTIMIZAR ARCHIVOS, REDUCIR TIEMPOS Y TODO ESO







// PESTAÑA TIMELINE O PERFORMANCE
// -Mientras mas vayas usando una pagina mas recursos esta usando, esto se puede ver en administrador de tareas y eso

// Puedes ver cuanto te consume cada cosa



// si le das ctrl + shift + p y le das show performance monitor, te enseña eso mismo pero que solo esta gastando esa pagina


// cuando le das click a la poestaña performance, puedes grabar y puedes dar al de reload button:

// GRABAR: esto lo que hace es que va a grabar ell rendimiento de la pagina  web pero desde que tu le has daod click a el boton de grabar

// RELOAD: Este lo que ahra es qyue va a reiniciar la pagina y grabara desde que la pagina se cargo


// El de grabar te grabaria toda la pantalla, dandote todos los frames en esa pantalla, y te los opuedes guiardar en un formaqto json






// TODO ESTO LO PUSE EN UN DOCUEMTNO DE GOOGLE CON SS
// https://docs.google.com/document/d/1zVLwRwDtT5dA-CKZOnRhS4VUJmSRO2xX9kYwH9GUtsk/edit?usp=sharing














// ---------------------- 49) EVENTOS -----------------------------------

// Estos son cualquier cambio que esta en la pagina, cualquier cosa que pasa en la pagina




// ¿COMO QUITAR UN EVCENTLISTENER?
// const button = document.querySelector(".button")
// button.addEventListener('click',saludar)
// function saludar(){
//         alert('hola')
//         button.removeEventListener('click',saludar)
// }

// Aqui se uso removeEventlistener para pdoer quitarselo
// ESTO SOLO FUNCIONA CUANDO LA FUNCION ESTA POR FUERA Y ESTA ASOCIADA, SI NO NO SE PUEDE



// ¿COMO PODEMOS VER A QUE SE LE DIO CLICK?

// const button = document.querySelector(".button")
// button.addEventListener('click',(e) =>{
// console.log(e.target)
// })

// El parametro 'e' lo que hara es que va a ser como el evento, y seria buscado con la propiedad target,q ue es donde se dio click, en quue elemento del html, aqui esto devuelve esto

{/* <button class="button">aprietame rata</button> */ }





// FLUJO DE EVENTOS
// const button = document.querySelector('.button')
// const contenedor = document.querySelector('.contenedor')

// button.addEventListener('click',() => {
//         alert('diste click en un boton')
// })

// contenedor.addEventListener('click',() => {
//         alert('diste click en un contenedor')
// })


// AQUI EL FLUJO DE EVENTOS IRIA NORMAL, IRIA DEL MAS ESPECIFICO AL MENOS ESPECIFICO

// +ESPECIFICOS = HIJOS
// -ESPECIFICOS = CONTENEDORES



// DIFERENCIA ENTRE 'EVENT BUBBLING' Y 'EVENT CAPTURING'
// EL BUBBLING ESTA POR DEFECTO Y EL OTRO NO ESTA POR DEFECTO

// bubbling va desde el mas especifico al menos especifico

// ¿COMO SE CAMBIA ESTO?

//------------------BUBBLING = FALSE--------------
// button.addEventListener('click',() => {
//         alert('diste click en un boton')
// },false)

// contenedor.addEventListener('click',() => {
//         alert('diste click en un contenedor')
// },false)


//                   CAPTURING = TRUE

// button.addEventListener('click',() => {
//         alert('diste click en un boton')
// },true)

// contenedor.addEventListener('click',() => {
//         alert('diste click en un contenedor')
// },true)





//------------------------- STOP PROPAGATION ---------------------------
// Esto sirve para evitar que es tipo de eventos se propagen a los demas, detiene la ejecucion de los siguientes pues

// const button = document.querySelector('.button')
// const contenedor = document.querySelector('.contenedor')

// button.addEventListener('click',(e) => {
//         alert('diste click en un boton')
//         e.stopPropagation()
// })

// contenedor.addEventListener('click',() => {
//         alert('diste click en un contenedor')
// })


// Aqui estan con el flujo normal osea el bubbling, despues lo que pasa es que al dar click en el boton no se ejecutara tambein el de el contenedor, ya que paramos la propagacion

// SOLO SE EJECUTA EL DEL BOTON




//---------------- TIPOS DE EVENTOS ---------------


// EVENTOS DEL MOUSE )

// -click - ocurre con un click
// -dbclick - ocurre con doble click
// -mouseover - cuando el mouse se mueve sobre un elemento
// -mouseout - cuando el mouse sale de un elemento

// ----------- otros ---------
// -contextmenu - con un clik derecho en un elemento para abrir un menu contextual

// -mousenter - cuando el mouse se mueve dentro de un elemento

// -mouseleave - cuando el punterp se mueve fuera de un elemento

// -mouseup - pasa cuando un usuaroio suelta un boton del mouse sobre un elemento aunque se haya hecho el presionar fuera del elemento si se suelta el click, dentro de este se activa

// -mousemove - cuando el puntero se mueve mientras esta sobre un elemento




// EVENTOS DEL TECLADO)

// -keypress - ocurre cuando una tecla se presiona
// -keydown - ocurre cuando una tecla se deja de presionar y se suelta en el mismo elemento
// -keyup - es cuando se sulta una tecla
// -onkeyup - ocurre despues de que los 2 eevntos anteriores hayan concluido consecutivamente





// EVENTOS DE LA INTERFAZ)

// -abort - ocurre cuando un elemento madre elimina a su hijo

// -error - oucrre cundo sucede un error durante la carga de un archivo multimedia

// -load - ocurre cuando un objeto se ha cargado

// -beforeunload - ocurre antes de que el documento este a punto de descragarse

// -unload - ocurre una vez que se ha descargado la pagina

// -resize - ocurre cuando se cambia el tamaño de la vista del documento

// -scroll - ocurre cuando se desplaza la barra de desplazamientro de un elemento

// -select - ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>



// EJEMPLOS


// ERROR
// const img = document.querySelector(".img-prueba")
// img.addEventListener('error',()=>{
//         console.log('ha sucedido un error')
// })

// Aqui si la imagen no se alcanza a cargar saldria un error



// LOAD
// window.addEventListener(("load"),() => {
//         console.log('ha cargado el body')
// })

// Esta se ejecutara cuando cargue toda la pagina y de hecho se puede hacer asi: ya que el evento window no ocupa ser llamado

// addEventListener(("load"),() => {
//         console.log('ha cargado el body')
// })



// BEFOREUNLOAD

// addEventListener('beforeunload',()=>{
//         console.log('te estas por ir del sitio')
// })

// Esto te lo dira despues de que le des click al enlace que te va a redireccionar



// RESIZE
// addEventListener('resize',()=>{
//         console.log('se ha actualizado el tamaño de la pantalla')
// })

// ESTO AVISARA CADA VEZ QUE SE CAMBIE LA RESOLUCION



// SCROLL
// addEventListener('scroll',()=>{
//         console.log('se ha scrolleado')
// })

// DETECTARA CUANDO SE HAGA SCROLL -. TAMBIEN SE PUEDE ORIENTAR PARA ELEMENTOS, POR EJEMPLO SI HAY UN DIV Y SE LE PONE AHI ASI SE PUEDE




// SELECT

// const input = document.querySelector('.input-prueba')
// input.addEventListener('select',()=>{
//         console.log('se ha seleccionado')
// })



// ESTO SE PUEDE USAR PARA MUCHAS COSAS:

// input.addEventListener('select',(e)=>{
//         console.log(e)
// })

// AQUI TRE ENSEÑARIA TODAS LAS PROPIEDADES PERO POR EJEMPLO:

// Te puede decir la posicion en la que empezo la seleccion ya posicion en la que termino TODO CON EL TARGET

// input.addEventListener('select',(e)=>{
//         console.log(e.target.selectionStart)
//         console.log(e.target.selectionEnd)
// })


// E incluso mostrarlo

// const contenedor = document.querySelector('.seleccionado')

// input.addEventListener('select',(e)=>{
//         let start = e.target.selectionStart;
//         let end = e.target.selectionEnd;
//         let textoCompleto = input.value;
//         contenedor.innerHTML = textoCompleto.substring(start,end);
// })


// ESTE ES UN CODIGO QUE LO QUE HARIA ES QUE TODO LO SELECCIONADO LO ESCRIBIRIA EN EL DIV, Y ESOO SE PUEDE HACER CON TODO LO ANTERIOR Y CON TODOS LOS DATOS QUE NOS BRINDA EL TARGET, SOLO HAY QUE SER CREATIVOS AL USARLOS

// OTRO EJEMPLO:

// const contenedor = document.querySelector('.seleccionado')

// input.addEventListener('keyup',(e)=>{
//         let tecla = e.key;
//         let nuevoContenido = `la ultima tecla presionada fue: ${tecla}`
//         contenedor.innerHTML = nuevoContenido
// })

// CADA QUE QUIERAS VER QUE PASA CON UN EVENTO, PUEDES PONER que en consola ponga el parametro "e" y mostrara todo lo que se puede ver en el y despues poner "e.target.Loquequierasver"









// ------------------- TEMPORIZADORES ----------

// -setTimeout() - RECIOBE UNA FUNCION, y ejecuta una funcion, despues de el tiempo especificado
// -clearTimeout() - para pararlo se tiene que guardar en una variable el setTimeout antes y poner el nombre de la variable 



// -setInterval() - Recibe una funcion y ejecuta una funcion cada que pase el periodo de tiempo especificado

// -clearInterval() - para pararlo se tiene que guardar en una variable el setInterval antes y poner el nombre de la variable 






// 9) CONTROL DE FLUJO Y MANEJO DE ERRORES

// X) SWITCH CASE



// No se si recuerdes el segun hacer que se hace en las clases de informatica del colegio, pues en js eso se puede hacer asi:

// let expr =  "Manzana"

// switch (expr) {
//         case "Banana":
//                 console.log("Esta fruta es amarilla")
//                 break;
//         case "Pera":
//                 console.log('tiene forma de mi tio roberto')
//                 break;
//         case "Manzana":
//                 console.log('es roja')
//                 break;
//         default:
//                 console.log('no es ninugna')
// }


// ALGO MUY IMPORTANTE AQUI ES PONERLE EL BREAK DESPUES DE CADA UNO DE LOS CASOS, PARA QUE SE DEJE DE EJECUTAR




// ESTO DE ARRIBA REEMPLAZA ESTO OTRO:

// if(expr==="Banana") console.log('es amarilla')
// else if(expr==="Pera")console.log('tiene forma de mi tio roberto')
// else if(expr==="Manzana")console.log('es roja')





// Y BUEN CUAL ES MEJOR??????
// Pues a nivel de rendimiento es mejor el if pero a nivel de efectividad al escribir el codigo es mejor el switch












// X) MANEJO DE ERRORES CON TRY ... CATCH

// try{

// }catch(error){

// }


// Aqui lo que pasa es que try ejecuta una funcion y catch lo toma como parametro para ejectura la funcion si es que eso es un error, a la hora de nosotros usa try y catch, el navegador desactiva el manejo de errores y pasamos a dominarlo nosotros, entonces pues es eso nomas, ahorita haremos unos ejemplos con eso


// try{

// }catch(error){

// }



// EJEMPLO:

// try{
// NJDSHBNCXJKSDC
// }catch(error){
// console.log('ha ocurrido un error de referencia')
// }


// Aqui lo que dira al aparecer un error sera esto:
// ha ocurrido un error de referencia


// esto no puede manejar errores de sin taxis por ejemplo si escribo :
// console.logg('esto es un error por que dice logg')
// No diria nada por que pues eso es un error de sintaxis no de referencia





// TAMBIEN SE PUEDEN HACER CATCH CONDICIONALES


// try{
// NJDSHBNCXJKSDC
// }catch(error){
//         if (3 > 5) {
//                 console.log("3 no es mayor que 5")
//         }else{
//                 console.log('crack')
//         }

// Aqui cachara el error pero ejecutara el de crack ya que el condicional no permite la otra accion
// }





// FINALLY
// El finally lo que hace es que ejectutrara siempre el codigo que este dentro de el pase lo que pase, inlcuos cuando no hayan errores



// try{
// console.log('no hay errores')
// }

//         catch(error){
//                 if (3 > 5) {
//                         console.log("3 no es mayor que 5");
//                 }else{
//                         console.log('crack');
//                 }
//         }finally{
//                 console.log('me muestro pase lo que pase')
//         }






// const pruebaTry = ()=>{
//         try {
//                 return 1
//         } catch (error) {
//                 return 2
//         }finally{
//                 return 3
//         }
// }


// Aqui esta prueba devolveria el 3 por que el finally es tan poderoso que sobreescribe el 1 que no devuelve ningun error, ya que solo se puede retornar una vez


// console.log(pruebaTry())








// SENTENCIA THROW
// ¿Que hace el throw?
// El throw lo que hace es que lanza un error de una 


// THROW CON TEXTO
// try {
//        throw 'hola'
// } catch (e) {
//         console.log(e)
// } finally {

// }


// THROW CON OBJETOS
// try {
//         throw {
//                 error:"NombreDelError",
//                 info:"Info del error",
//         }
// } catch (e) {
//         console.log(e)
// } finally {}




// THROW CON ARRAYS
// try {
//         throw ['PEDRO','JOSE']
// } catch (e) {
//         console.log(e[0])
// } finally {

// }




// ¿CUANDO SE DEBE DE USAR TRY?
// Cuando es un programa muy grande, o algo asi y que ya todos los bugs estan arreglados, pero aun asi puede haber un minimo error, no se debe de abusar del try y catch