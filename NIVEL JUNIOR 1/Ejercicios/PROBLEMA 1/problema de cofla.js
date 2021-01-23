// PROBLEMA DE COFLA
dineroCofla = prompt('Cuanto dinero tienes cofla?');
dineroRoberto = prompt('Cuanto dinero tienes roberto?');
dineroPedro = prompt('Cuanto dinero tienes pedro?');

dineroCofla = parseFloat(dineroCofla)
// Recuerda que parseFloat es para poder cambiarlo a numero decimal y parseInt es para nuero entero

dineroPedro = parseFloat(dineroPedro)
dineroRoberto = parseFloat(dineroRoberto)


if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert('Cofla pueden comprar la paleta de helado de agua')
  alert('tu vuelto Cofla es: ' + (dineroCofla - 0.6) + ' pesos')}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert('Cofla pueden comprar una paleta de helado de crema')
  alert('tu vuelto Cofla es: ' + (dineroCofla - 1) + ' pesos')}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert('Cofla pueden comprar un bombon de helado heladix')
alert('tu vuelto Cofla es: ' + (dineroCofla - 1.6) + ' pesos')}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert('Cofla pueden comroar una marca de helado heladovich')
  alert('tu vuelto Cofla es: ' + (dineroCofla - 1.7) + ' pesos')}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert('Cofla pueden comprar un bombon marca helardo')
alert('tu vuelto Cofla es: ' + (dineroCofla - 1.8) + ' pesos')}

else if (dineroCofla >= 2.9) {
  alert('Cofla pueden comprar un piotecito de helados con confites y tambien pueden comprar un pote de 1/4 kg')
  alert('tu vuelto Cofla Cofla es: ' + (dineroCofla - 2.9) + ' pesos')}
else {
  alert('no les alcanza')
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert('Roberto pueden comprar la paleta de helado de agua')
  alert('tu vuelto Roberto  es: ' + (dineroRoberto - 0.6) + ' pesos')}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert('Roberto pueden comprar una paleta de helado de crema')
  alert('tu vuelto Roberto es: ' + (dineroRoberto - 1) + ' pesos')}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert('Roberto pueden comprar un bombon de helado heladix')
alert('tu vuelto Roberto es: ' + (dineroRoberto - 1.6) + ' pesos')}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert('Roberto pueden comroar una marca de helado heladovich')
  alert('tu vuelto Roberto es: ' + (dineroRoberto - 1.7) + ' pesos')}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert('Roberto pueden comprar un bombon marca helardo')
alert('tu vuelto Roberto es: ' + (dineroRoberto - 1.8) + ' pesos')}
else if (dineroRoberto >= 2.9) {
  alert('Roberto pueden comprar un piotecito de helados con confites y tambien pueden comprar un pote de 1/4 kg')
  alert('tu vuelto Roberto es: ' + (dineroRoberto - 2.9) + ' pesos')}
else {
  alert('Roberto no les alcanza')}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert('Pedro pueden comprar la paleta de helado de agua')
  alert('tu vuelto Pedro es: ' + (dineroPedro - 0.6) + ' pesos')}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert('Pedro pueden comprar una paleta de helado de crema')
  alert('tu vuelto Pedro es: ' + (dineroPedro - 1) + ' pesos')}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert('Pedro pueden comprar un bombon de helado heladix')
alert('tu vuelto Pedro es: ' + (dineroPedro - 1.6) + ' pesos')}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert('Pedro pueden comroar una marca de helado heladovich')
  alert('tu vuelto Pedro es: ' + (dineroPedro - 1.7) + ' pesos')}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert('Pedro pueden comprar un bombon marca helardo')
alert('tu vuelto Pedro es: ' + (dineroPedro - 1.8) + ' pesos')}
else if (dineroPedro >= 2.9) {
  alert('Pedro pueden comprar un piotecito de helados con confites y tambien pueden comprar un pote de 1/4 kg')
  alert('tu vuelto Pedro es: ' + (dineroPedro - 2.9) + ' pesos')}
else {
  alert('Pedro no les alcanza')
}
