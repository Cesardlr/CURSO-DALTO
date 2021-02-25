alumnos = [{
    nombre: "Cesar Del rio",
    email: "cesardelriodlr@outlook.com",
    materia:"Fisica 3"
},{
    nombre: "Joselito capo",
    email: "joselito@outlook.com",
    materia:"Fisica 1"
},{
    nombre: "Pepe pecas",
    email: "pepon@outlook.com",
    materia:"calculo"
},{
    nombre: "pancho rodriguez",
    email: "pancho@outlook.com",
    materia:"literatura"
},{
    nombre: "emilio ramon",
    email: "emilio@outlook.com",
    materia:"qumica"
}]

const boton = document.querySelector(".btnConfirmar")
const contenedor =document.querySelector(".grid-container")

for(alumno in alumnos){
    let datos = alumnos[alumno]
    let nombre = datos["nombre"]
    let email = datos["email"]
    let materia = datos["materia"]
    let htmlCode = `   
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
    <select class="semana-elegida">
        <option value="Semana 1">Semana 1</option>
        <option value="Semana 2">Semana 2</option>
    </select>
    <div/>`
    ;
contenedor.innerHTML+= htmlCode
}
// Si se pueden hacer bucles anidados wow

boton.addEventListener("click",()=>{
    let confirmar = confirm("realmente quyieres confirmar las mesas?");
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    if (confirmar) {
        document.body.removeChild(boton)
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})

