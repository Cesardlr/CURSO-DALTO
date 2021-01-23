const suma = (num1,num2)=>{
   return parseFloat(num1) + parseFloat(num2);
 }
const division = (num1,num2)=>{
   return parseFloat(num1) / parseFloat(num2);
 }
const resta = (num1,num2)=>{
   return parseFloat(num1) - parseFloat(num2);
 }
const multiplicacion = (num1,num2)=>{
   return parseFloat(num1) * parseFloat(num2);
 }
const raizCuadrada = (num1)=>{
  return Math.sqrt(parseFloat(num1))
}
const raizCubica = (num1)=>{
  return Math.cbrt(parseFloat(num1))
}
const potenciar = (num1,exp)=>{
  return Math.pow(num1, exp)
}
 // Primero cree las funciones fleca

 alert('que operacion quieres realizar?')
 // Lugo puse que operacion queria
 let operacion = prompt("1:suma---2:resta---3:multiplicacion---4:division---5:Raiz cuadrada---6:Raiz:cubica---7,potencia")
 // Puse un menu

 while (operacion == "1") {
   let resultado = suma(num1 = parseFloat(prompt('ponga el numero sumar 1')), num2 = parseFloat(prompt('ponga el numero 2')))
   // Aqui defini num1 y num2 en la funcion de suma con un parseFloat en un prompt
  alert(`tu resultado es: ${resultado}`)
  break;
 }
 while (operacion == "2") {
 let resultado = resta(num1 = parseFloat(prompt('ponga el numero restar 1')), num2 = parseFloat(prompt('ponga el numero 2')))
  alert(`tu resultado es: ${resultado}`)
  break;
 }
 while (operacion == "3") {
   let resultado = multiplicacion(num1 = parseFloat(prompt('ponga el numero multiplicar 1')), num2 = parseFloat(prompt('ponga el numero 2')))
  alert(`tu resultado es: ${resultado}`)
  break;
 }
 while (operacion == "4") {
   let resultado = division(num1 = parseFloat(prompt('ponga el numero dividir 1')), num2 = parseFloat(prompt('ponga el numero 2')))
  alert(`tu resultado es: ${resultado}`)
  break;
 }
 while (operacion == "5") {
   let resultado = raizCuadrada(num1 = parseFloat(prompt('ponga el numero sacar raiz cuadrada 1')))
  alert(`tu resultado es: ${resultado}`)
  break;
 }
 while (operacion == "6") {
   let resultado = raizCubica(num1 = parseFloat(prompt('ponga el numero sacar raiz cubica 1')))
  alert(`tu resultado es: ${resultado}`)
  break;
 }

 while (operacion == "7") {
   let resultado = potenciar(num1 = parseFloat(prompt('ponga el numero sacar potencia 1')), exp = parseFloat(prompt('ponga el numero al que lo quiere potenciar')))
  alert(`tu resultado es: ${resultado}`)
  break;
}
