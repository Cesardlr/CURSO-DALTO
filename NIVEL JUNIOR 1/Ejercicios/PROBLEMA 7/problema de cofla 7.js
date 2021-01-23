const obtenerInformacion = (materia)=>{
const  materias = {
    fisica: ["perez","juan","jose","cofla","maria"],
    programacion: ["rodriguez","pedro","juan","cofla","maria"],
    logica: ["dalto","pedro","juan","jose","maria"],
    quimica: ["hernandez","pedro","juan","jose","cofla"]
  }
  if (materias[materia] !== undefined) {
    return [materias[materia],materia,materias];
    // Esto ya se convirtio en otro arreglo que tiene un arreglo dentro por lo que el primer valor dentro del arreglo mayor es 0
  }else {
    return materias
  }
}

const mostrarInformacion = (materia)=>{
  let informacion = obtenerInformacion(materia)
  if (informacion !== false) {
    let profesor = informacion[0][0]
    let alumnos = informacion[0]
    alumnos.shift()
    // Este de shift se usa asi para poder sacar a perez que saca el primer elemento
    // Esto lo que hara es que en la pocion 0 del array buscara lo que se returna en el if y buscara el primere elemento que es el array de materias[materia] y dentro de fisica buscara la psoicion 0 que es el profe
    document.write(`alumnos presentes en: ${informacion[1]}: ${alumnos} <br> <b>Profesor:<b/> ${profesor} <br><br>`)
    // Aqui este pedo del informacion[1] y el [0] lo que hacen es que llaman al return que esta dentro del if que lo que hace es que devuelve un array con 2 elementos el de la
    // Posicion 0 es los alumnos y el de solo materia es el de la materia
  }
}

// PARA MOSTRAR EL NUMEOR DE CLASES EN LAS QUE ESTA COFLA
const cantidadDeClases = (alumno)=>{
  let informacion = obtenerInformacion(materias)
  let clasesPresentes =  []
  let cantidadTotal = 0;
  for (info in informacion){
    if (informacion[info].includes(alumno)) {
      // Aqui lo que paso es que recorrio el array
      cantidadTotal++
      clasesPresentes.push(" " + info)
    }
  }
  return `<b style='color:blue'> ${alumno} </b> esta en ${cantidadTotal} clases </b><br>
  Esta cursando las clases: ${clasesPresentes}<br><br>`
}



mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("quimica")
mostrarInformacion("logica")

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria"))
document.write(cantidadDeClases("pedro"))
document.write(cantidadDeClases("juan"))
