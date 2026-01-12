var salida = document.getElementById("salida");
 
var empresa = prompt('Nombre empresa y código (ej: "MiEmpresa-123")');
var fecha = prompt('Fecha apertura (ej: "01-12-2025")');
var direccion = prompt('Dirección (ej: "Avenida Sol Patio 3 Piso 2 Pta A")');
var empleados = prompt('Empleados (ej: "Ana/Luis/Pepe")');
var productos = prompt('Productos (ej: "Pan_Leche_Agua")');
 
var partesEmpresa = empresa.split("-");
var nombreEmpresa = partesEmpresa[0];
var codigoEmpresa = partesEmpresa[1];
 
var partesFecha = fecha.split("-");
 
var partesDir = direccion.split(" ");
 
var avenida = partesDir[1];
var patio = partesDir[3];
var piso = partesDir[5];
var puerta = partesDir[7];
 
var listaEmpleados = empleados.split("/");
var numEmpleados = listaEmpleados.length;
 
var listaProductos = productos.split("_");
 
var texto = "";
texto += "Nombre empresa: " + nombreEmpresa + "\n";
texto += "Código empresa: " + codigoEmpresa + "\n";
texto += "Avenida: " + avenida + "\n";
texto += "Patio: " + patio + "\n";
texto += "Piso: " + piso + "\n";
texto += "Puerta: " + puerta + "\n";
texto += "Número de empleados: " + numEmpleados + "\n";
 
for (var i = 0; i < listaProductos.length; i++) {
  texto += "Producto " + (i + 1) + ": " + listaProductos[i] + "\n";
}
 
salida.textContent = texto;
 