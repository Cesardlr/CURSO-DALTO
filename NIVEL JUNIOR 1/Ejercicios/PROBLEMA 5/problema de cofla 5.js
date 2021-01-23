class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.ram = ram;
    this.encendido = false
    this.camaraPrendida = true
  }
  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert('celualr prendido')
      this.encendido = true
    } else {
      alert('celular apagado')
      this.encendido = false;
    }
  }

reiniciar(){
  if (this.encendido == true) {
    alert('reiniciando')
  } else{
    alert('el celular esta apagado prednalo pa reiniciar')
  }
}

tomarFoto(){
  alert(`foto tomada en una resolucion de : ${this.resolucionDeCamara}`);
}
tomarVideo(){
  alert(`video tomado en una resolucion de : ${this.resolucionDeCamara}`);
}
mobileInfo(){
  return `
  El color es:  <b>${this.color}</b><br>
  El peso es <b>${this.peso}</b><br>
  La resolucion de la pantalla es <b>${this.resolucionDePantalla}</b><br>
  La resolucion de la camara ea <b>${this.resolucionDeCamara}</b><br>
  La ram es <b>${this.ram}</b><br>`;
}
}

class CelularAltaGama extends Celular{
  // Este es para poder añadir las caracteristicas de los otros celulares a los de alta gama mas las que tienen estos aparte
  constructor(color, peso, rdp, rdc, ram, rdce){
  super(color, peso, rdp, rdc, ram)
  // El super va despues de el constructor ya que lo que hace es que extiende esas cualidades
    this.resolucionDeCamaraExtra = rdce;
  }
  grabarEnCamaraSuperLenta(){
    alert('Se esta tomando video en camara super lenta')
  }
  reconocimientoFacial(){
    alert('vamos a inciiar el reconocimiento facial')
  }
  mobileInfoAltaGama(){
    return this.mobileInfo() + `Resolucion de camara extra ${this.resolucionDeCamaraExtra}`
  }
}

// const celular1 = new Celular("rojo", "500g", "5", "full hd", "8")
// const celular2 = new Celular('azul', '1000g', '6', 'full hd', '9')
// const celular3 = new Celular('verde', '400g', '8', 'full hd', '10')
// eStos son celulares normales

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.tomarVideo();
// celular1.reiniciar();

const celularAltaGama1 = new CelularAltaGama('rojo', '130g', '5.2', '4k', '3gb', 'full hd')
const celularAltaGama2 = new CelularAltaGama('negro', '150g', '6', '4k', '4gb', 'hd')

document.write(
`${celularAltaGama1.mobileInfoAltaGama()}
 ${celularAltaGama2.mobileInfoAltaGama()}`)

// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>
//   `);



  // Esto es para poder mostrarlo todo eso en pantalla
