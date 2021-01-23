// Dom ayuda a poder modificar elementos del html y añadirle efectos
var cajas = document.getElementsByTagName('div')
// Este busc con la etiqueta
// Este busca con la clase
var primeraCaja = document.getElementById('primeraCaja')
// Los id's son mas para javascript y las clases para css

// --------- CREANDO NODOS
var caja = document.createElement('div')
var contenido = document.createTextNode('hola mundo')
caja.appendChild(contenido);
// Este es para agregar dentro de un elemento un elemento hijo con js
caja.setAttribute('class','caja naranja')
// Aqui es para ponerle algun atributo como el de la clase de caja en este caso

// Esto puede srrvir para poder agregar

var contenedor = document.getElementById('contenedor')
contenedor.appendChild(caja)


// MODICFICANDO LA CLASE O EL ID DE UN ELEMENTO
caja.id = 'primera'
// Aqui ya lee cambiamos el ID

caja.className = 'caja naranja';
// Asi se cambia la clase

// --------------Conociendo al elemetno padre
var padre = cajas[0].parentNode;
padre.insertBefore(caja, cajas[2])
// Esto es para poder mover y ponerlo donde tu quiera

padre.replaceChild(caja, cajas[2])
// Este de replace child es para poder poner un elemento en el lugar de otro

padre.removeChild(cajas[3])
// Este lo que hace es que elimina el elemento que tu quieras eliminar

//PASOS:
// 1-Crear elemento
// 2- crear nodo de texto
// 3-agregar atributos
// 4-agregar el elemento al documento
//5-posicionar la caja
