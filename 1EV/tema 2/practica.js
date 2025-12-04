let libros = [
    {
        codigo: 1,
        titulo: "Access para Windows",
        autor: "Charles Siegel",
        editorial: "Anaya",
        tema: "Informática",
        isbn: "84-7614-759-7",
        paginas: 450,
        precio: 45.67
    },
    {
        codigo: 2,
        titulo: "Salud",
        autor: "Eduardo Almansa",
        editorial: "Deusto",
        tema: "Medicina",
        isbn: "24-3547-590-1",
        paginas: 153,
        precio: 23.18
    },
    {
        codigo: 3,
        titulo: "Redes de Computadores",
        autor: "Luis Cárcel",
        editorial: "Paraninfo",
        tema: "Informática",
        isbn: "47-8829-435-7",
        paginas: 215,
        precio: 32.86
    }
];

function buscarLibro() {
    let codigoIngresado = parseInt(document.getElementById("codigo").value);
    let libro = libros.find(l => l.codigo === codigoIngresado);

    let celdas = {
        codigo: document.getElementById("codigoCelda"),
        titulo: document.getElementById("tituloCelda"),
        autor: document.getElementById("autorCelda"),
        editorial: document.getElementById("editorialCelda"),
        tema: document.getElementById("temaCelda"),
        isbn: document.getElementById("isbnCelda"),
        paginas: document.getElementById("paginasCelda"),
        precio: document.getElementById("precioCelda"),
    };

    let mensaje = document.getElementById("mensaje");

    if (libro) {
        celdas.codigo.textContent = libro.codigo;
        celdas.titulo.textContent = libro.titulo;
        celdas.autor.textContent = libro.autor;
        celdas.editorial.textContent = libro.editorial;
        celdas.tema.textContent = libro.tema;
        celdas.isbn.textContent = libro.isbn;
        celdas.paginas.textContent = libro.paginas;
        celdas.precio.textContent = libro.precio + " €";

        mensaje.textContent = "";
    } else {
        
        for (let key in celdas) {
            celdas[key].textContent = "";
        }

        mensaje.textContent = "El libro solicitado no existe!!";
    }
}
