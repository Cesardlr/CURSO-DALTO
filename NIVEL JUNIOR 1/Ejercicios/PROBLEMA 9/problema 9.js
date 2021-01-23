const contenedor = document.querySelector(".flex-container");
let boton = document.querySelector(".send-button")
let valorAntiguo = boton.value
boton.value = valorAntiguo.toUpperCase();

// aqui nomas es para poner en mayusculas con js

function crearLLave(nombre,modelo,precio) {
    img = "<img class='llave-img' src='llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`
    return [img,nombre,modelo,precio]
}

// const LLave = crearLLave("llave 1","modelo x","1500")

// document.write(LLave[0],LLave[1],LLave[2])

const changeHidden = (number)=>{
document.querySelector(".key-data").value = number
}
// Este de aqui es para poder sacar el modelo y enviarlo a la base de datos para poder saber que modelo quizo el cliente

let documentFragment = document.createDocumentFragment();

for (let i = 0; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()* 10 + 30);
    let llave = crearLLave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item')
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment)