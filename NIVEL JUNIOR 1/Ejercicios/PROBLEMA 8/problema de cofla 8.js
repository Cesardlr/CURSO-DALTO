let  materias = {
    fisica: ["perez","juan","jose","cofla","maria"],
    programacion: ["rodriguez","pedro","juan","cofla","maria"],
    logica: ["dalto","pedro","juan","jose","maria"],
    quimica: ["hernandez","pedro","juan","jose","cofla"],
    reposteria: ["tia cristina", "wawis", "walter", "sergio","la patch", "la denis", "la erika","la bris"]
  }
  const inscribir = (alumno,materia)=>{
    personas = materias[materia]
    if(personas.length >= 21){
      document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
    } else {
      personas.push(alumno)
      if (materia == "fisica") {
        materias = {
           fisica: personas,
           programacion: materias['programacion'],
           logica: materias['logica'],
           quimica: materias['quimica'],
           reposteria:materias['reposteria']
      }}
      else if(materia == "programacion"){
      materias = {
         fisica: materias["fisica"],
         programacion: personas,
         logica: materias['logica'],
         quimica: materias['quimica'],
         reposteria:materias['reposteria']
    }}
    else if(materia == "logica"){
      materias = {
         fisica: materias["fisica"],
         programacion: materias["programacion"],
         logica: personas,
         quimica: materias['quimica'],
         reposteria:materias['reposteria']
  }}
    else if(materia == "quimica"){
      materias = {
         fisica: materias["fisica"],
         programacion: materias["programacion"],
         logica: materias["logica"],
         quimica: personas,
         reposteria: materias['reposteria']
  }}
    else if(materia == "reposteria"){
      materias = {
         fisica: materias["fisica"],
         programacion: materias["programacion"],
         logica: materias["logica"],
         quimica: materias['quimica'],
         reposteria: personas
  }}
  document.write(`felicidades ${alumno}, te inscribiste a la clase de ${materia}`)
}
}
document.write(materias['reposteria'] + "<br>")
inscribir(prompt("como te llamas?"), prompt("que clase quieres?"))
document.write("<br>" + materias['reposteria'] + "<br>")
