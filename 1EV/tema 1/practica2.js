var libros = [
  {codigo: 1, titulo: "Access para Windows", autor: "Charles Siegel", editorial: "Anaya", tema: "Informática", isbn: "84-7614-759-7", paginas: 450, precio: 45.67},
  {codigo: 2, titulo: "Salud", autor: "Eduardo Almansa", editorial: "Deusto", tema: "Medicina", isbn: "24-3547-590-1", paginas: 153, precio: 23.18},
  {codigo: 3, titulo: "Redes de Computadores", autor: "Luis Cárcel", editorial: "Paraninfo", tema: "Informática", isbn: "47-8829-435-7", paginas: 215, precio: 32.86}
];

function buscarLibro() {
  var codigo = parseInt(document.getElementById("codigo").value);
  var resultado = document.getElementById("resultado");
  var libroEncontrado = null;

  for (var i = 0; i < libros.length; i++) {
    if (libros[i].codigo === codigo) {
      libroEncontrado = libros[i];
      break;
    }
  }

  if (libroEncontrado != null) {
    var tabla = "<table border='1'>";
    tabla += "<tr><td><b>Código</b></td><td>" + libroEncontrado.codigo + "</td></tr>";
    tabla += "<tr><td><b>Título</b></td><td>" + libroEncontrado.titulo + "</td></tr>";
    tabla += "<tr><td><b>Autor</b></td><td>" + libroEncontrado.autor + "</td></tr>";
    tabla += "<tr><td><b>Editorial</b></td><td>" + libroEncontrado.editorial + "</td></tr>";
    tabla += "<tr><td><b>Tema</b></td><td>" + libroEncontrado.tema + "</td></tr>";
    tabla += "<tr><td><b>ISBN</b></td><td>" + libroEncontrado.isbn + "</td></tr>";
    tabla += "<tr><td><b>Páginas</b></td><td>" + libroEncontrado.paginas + "</td></tr>";
    tabla += "<tr><td><b>Precio</b></td><td>" + libroEncontrado.precio + " €</td></tr>";
    tabla += "</table>";

    resultado.innerHTML = tabla;
  } else {
    resultado.innerHTML = "<p><b>El libro solicitado no existe!!</b></p>";
  }
}
