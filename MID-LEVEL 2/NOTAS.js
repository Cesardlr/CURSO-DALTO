// 1) INTRODUCCION A WINDOW
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

