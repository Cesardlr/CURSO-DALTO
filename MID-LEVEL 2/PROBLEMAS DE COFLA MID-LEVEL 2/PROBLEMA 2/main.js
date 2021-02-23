const nombre = document.getElementById('nombre')
// Esto de value es importante ya que ahi se puede poner el valor dentro de esos

const email = document.getElementById('email')
const materia = document.getElementById('materia')
const boton = document.getElementById('btn-enviar');
const resultado =  document.querySelector('.resultado')
boton.addEventListener('click',(e)=>{
    e.preventDefault()
    // Ese de prevent default prviene el movimeiento predeterminado de el evento
    let error = validarCampos()
    if (error[0]) {
       resultado.innerHTML = error[1]
       resultado.classList.add('red')
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add('green')
        resultado.classList.remove("red")
    }
})

const validarCampos = ()=>{
    let error = []
    if (nombre.value.length < 5) {
        error[0] = true
        error[1] = "El nombre no puede contener menos de 5 caracteres"
        return error
    }else if(nombre.value.length > 40){
        error[0] = true
        error[1] = "El nombre no puede contener mas de 40 caracteres"
        return error
    }else if(
        email.value.length < 5 || 
        email.value.length > 40 || 
        email.value.indexOf("@") == -1 ||
        // Aqui se les pone que el valor de email si no contiene el @ hayq eu recordar que devuelve -1, entonces si devuleve menos 1 no
        email.value.indexOf(".") == -1 ) {
            error [0] = true;
            error[1] = 'el mail es invalido';

            return error
        }else if(materia.value < 4|| materia.value > 40){
            error[0] = true;
            error[1] = "la materia no existe"
        }


    error[0] = false
    return error
}
