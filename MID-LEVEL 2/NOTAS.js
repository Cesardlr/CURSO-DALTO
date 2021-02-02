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








