const sendButton = document.getElementById('snd-nota')


sendButton.addEventListener('click', () => {
    let resultado, mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)) {
            throw "Gracioso"
            // Aqui se esta checando si no es un numero el de la caja, lo que pasara es que va a lanzar el mensaje de error del catch, pero se le pone el texto ese para que se mande el mensaje de error
        }

        
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprovacion(8,5,prevRes);
    } catch (e) {
        resultado = '¿SOS GRACIOSO?';
        mensaje = 'He descubierto que trataste de hackear este sitio';
    }
    abrirModal(resultado, mensaje);
})


const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "tienes mucho que trabajar" 
            break;
        case 2: resultado = "muy mal" 
            break;
        case 3: resultado = "que mala calificacion" 
            break;
        case 4: resultado = "reprobable" 
            break;
        case 5: resultado = "muy mal" 
            break;
        case 6: resultado = "minimo pasaste una mitad" 
            break;
        case 7: resultado = "Bien pero se puede mejorar" 
            break;
        case 8: resultado = "Buena calificacion " 
            break;
        case 9: resultado = "que bien" 
            break;
        case 10: resultado = "excelente" 
            break;
    
        default: resultado = "Esa no es una calificacion valida"
            break;
    }
    return resultado
}


const verificarAprovacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3
    if (promedio >= 7) {
        let resultado = "<span class='green'>APROBADO</span>";
        return resultado;
    }
    return "<span class='red'>REPROBADO</span>"
}






const abrirModal = (res, msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;

    let modal = document.querySelector(".modal-bg");
    modal.style.animation = "aparecer 1s forwards"
    modal.style.display = "flex"
}