let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto} y el ancho es : ${ancho}`)

if (comprar) {
    alert('compra realizada correctamente');
} else{
    alert('compra cancelada');
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br><br>`;
html += `hostname: <b>${hostname}</b><br><br>`;
html += `pathname: <b>${pathname}</b><br><br>`;
html += `href: <b>${href}</b><br>`;

document.write(html)
