let free = false
const validarCliente = (time = parseFloat(prompt('pon la hora que es')))=>{
let edad = parseFloat(prompt('¿cual es tu edad?'));
if (edad >= 18) {
  if (time >= 2 && free == false && time < 7) {
    alert('puedes pasar gratis capo')
    free = true;
  }else{
    alert('pasas pagando cruck')
  }
}else {
  alert('mira papu eres menor de edad, vete a tomar una chocolatada')
}
}
validarCliente()
validarCliente()
validarCliente()
validarCliente()
// Este codigo lo que hara es que admitirra a personas mayores de edad nomas, y la primera eprsona que entre despues de las 2:00 am va a entrar gratis los demas ya no
