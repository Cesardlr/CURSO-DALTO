class App{
  constructor(cdd,puntuacion,peso){
  this.cantidadDeDescargas = cdd;
  this.punt = puntuacion;
  this.peso = peso;
  this.iniciada = false
  this.instalada = false
}
instalar(){
  if (this.instalada == false) {
this.instalada = true
      alert('se ha instalado correctamente')
  }}
abrir(){
  if (this.iniciada == false && this.instalada == true) {
    this.iniciada = true
    alert('la aplicacion se esta abriendo')
  }
}
  cerrar(){
    if (this.iniciada == true &&  this.instalada == true) {
      alert('la aplicacion se esta cerrando')
      this.iniciada = false
    }
  }

  desinstalar(){
    if (this.instalada == true) {
      this.instalada = false
        alert('se ha desinstalado correctamente')
    }}}

    app = new App("16.000", "5 estrellas", "900mb");

    app.instalar();
    app.abrir();
    app.cerrar();
    app.desinstalar();
