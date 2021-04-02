const getInfo = async()=>{
    let aprovados = document.querySelector(".num-aprovados")
    let desaprovados = document.querySelector(".num-desaprovados")
    try{
        resultado = await axios("informcion.txt");
        aprovados.innerHTML = resultado.    data.aprovados
        desaprovados.innerHTML =        resultado.data.desaprovados
    } catch(e){
        aprovados.innerHTML = "LA API FALLO"
        desaprovados.innerHTML = "LA API FALLO"
    }
}

document.getElementById("getInfo").addEventListener('click',getInfo)
