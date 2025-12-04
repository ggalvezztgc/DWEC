function introducir(){
    var nombre = document.getElementById("Nombre").value;
    document.getElementById("resultado1").innerHTML = nombre;

    var apellidos = document.getElementById("Apellidos").value;
    document.getElementById("resultado2").innerHTML = apellidos;

    var edad = document.getElementById("Edad").value;
    document.getElementById("resultado3").innerHTML = edad;

    var direccion = document.getElementById("Direccion").value;
    var partesDireccion = direccion.split(" nº ");
    var calle = partesDireccion[0];
    var resto = ["", ""];
    if (partesDireccion.length > 1){
        resto = partesDireccion[1].split(" Pta ");
    }

    document.getElementById("resultado4a").innerHTML = calle;
    document.getElementById("resultado4b").innerHTML = resto[0];
    document.getElementById("resultado4c").innerHTML = resto[1];

    var cpYpoblacion = document.getElementById("CodigoPostal").value.split("-");
    document.getElementById("resultado5a").innerHTML = cpYpoblacion[0];
    document.getElementById("resultado5b").innerHTML = cpYpoblacion[1];

    var idiomasTexto = document.getElementById("Idiomas").value;
    var idiomasArray = idiomasTexto.split(",");
    var salidaIdiomas = "";
    for (var i = 0; i < idiomasArray.length && i < 5; i++){
        salidaIdiomas += idiomasArray[i] + "<br>";
    }
    document.getElementById("resultado6").innerHTML = salidaIdiomas;

    var hijosTexto = document.getElementById("Hijos").value;
    if (hijosTexto == ""){
        document.getElementById("resultado7").innerHTML = 0;
    } else {
        var hijosArray = hijosTexto.split(",");
        document.getElementById("resultado7").innerHTML = hijosArray.length;
    }
}
