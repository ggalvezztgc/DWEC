let coche = {
    marca: "Honda",
    modelo: "Civic Type-R",
    fecha: 2022,
    cilindrada: "1800cc",
    motor: "Gasolina",
    potencia: "122cv"
};

let resultado = "";
for (let clave in coche) {
    resultado += clave + ": " + coche[clave] + "<br>";
}

document.getElementById("resultado").innerHTML = resultado;
