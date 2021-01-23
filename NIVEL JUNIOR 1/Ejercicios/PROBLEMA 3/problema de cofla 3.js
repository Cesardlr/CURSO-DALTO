let cantidad = prompt('¿Cuantos alumnos son en total?')
if (cantidad == ""){
  alert('Ponga un numero no unas letras')
}
let alumnosTotales = []
// Esta es otra forma de un array donde no se le ponen variables

for (i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt('nombre del alumno ' + (i+1)),0]
}
// Aqui en esta parte como i comienza con 0 se va a poner el nombre del primer alumno que escriba y si son 3 alumnos el numero de cantidad, lo que hara es que va a ejecutar ese codigo 3 veces
// y el 0 de la derecha es el numero de asistencias que haya
// Luego el que esta entre parentesis de (i+1) es para ponerle el numero al lado de donde dce nombre del alumno y poder ponerle nombre del alumno 1, nombre dle alumno 2 y eso por que i vale 0

const tomarAsistencia = (nombre,p)=>{
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[p][1]++; }}
// lucas, 0 -> Eso es lo que mostraria
//Aqui lo que esta haciendo es que selecciona el segundo elemento en este caso el 0 y el elemento 0 seria lucas elemento esta en el
//Este lo que hace es que donde dice [p][1], va a acceder a la posicion 1 de p lo que es el numero de asitencias que hay

for  (i = 0; i < 30; i++) {
  for (alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0],alumno)}}
    // Este lo que va a hacer es que va a dar el numero de posicion que tiene, pero primero mostrara el nombre
    // Ya que muestra el nombre que dice alumnosTotales[alumno][0] y como tiene el 0 va a mostrar el nombre ya que es el de la posicion 0
    // y despues se muestra donde dice alumno que es el puro numero de posicion el numero de lista del alumno por asi decirlo


      for (alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
               Asistencias: ${alumnosTotales[alumno][1]} <br>
               Ausencias: ${30 - alumnosTotales[alumno][1]}`
   // Esto lo que hace es que va a definir el resultado que se mostrara, por lo que pone al alumno y su nombre, y empieza en el 0 y conforme todo aumenta, luego las asistencias, es eso de alumnosTotales
   // Pero ahora con el numero ya que estara en la posicion 1 lo que dara el numero de ausencias y presencias, pero el otro lo mostrara restandole 30 para poder saber las faltas que hay ya que son 30 dias
   // por lo que si tienen faltas se les restaria de esos dias los numeros que no tienen presencias, ya que presencia quedo como: alumnosTotales[alumno][1] y las ausencias salen restandole a las presencias de los dias un 30.
  if (30 - alumnosTotales[alumno][1] > 18) {
    // Esta parte de aqui va a sacar 18 que es mas del 10% si eso pasa reprobaria por lo que abajo dice lo de reprobar
    resultado+= "REPROBADO POR INASISTENCIA <br> <br>";
    // Esto le agregaria lo de reprobado por... y dos saltos de linea
  }else{
    resultado+= "<br><br>";}
    // Y si no pasa eso pues nomas se pone el resultado asi
    // Esto lo que hace es que a resultado le sumaria dos saltos de linea
  document.write(resultado)}
  // Esto de resultado
