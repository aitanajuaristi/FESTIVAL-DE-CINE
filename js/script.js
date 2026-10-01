const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links");
const icon = hamb.querySelector("i");

hamb.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Cambia entre hamburguesa y X
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});



// Formulario 

function costeTotal() {
    console.log("-----------función costeTotal");
    let numeroEntradas = document.getElementById("numero").value;
    console.log("num entradas = " + numeroEntradas);
    let costePorEntrada = 0;
    let valorExposicion = document.getElementById("exposicion").value;
    if (valorExposicion === "e1") {
        costePorEntrada = 80;
    } else if (valorExposicion === "e2") {
        costePorEntrada = 110;
    } else {
        costePorEntrada = 150;
    }
    console.log("coste por entrada = " + costePorEntrada);
    let costeEntradas = (numeroEntradas * costePorEntrada) + " €";
    console.log("coste = " + costeEntradas);
    document.getElementById("coste").innerHTML = costeEntradas;
}

function comprar() {
    console.log("-----------función comprar");
    document.getElementById("nom").innerHTML = document.getElementById("nombre").value;
    document.getElementById("corr").innerHTML = document.getElementById("correo").value;
    document.getElementById("num").innerHTML = document.getElementById("numero").value;
    document.getElementById("ct").innerHTML = document.getElementById("coste").innerHTML;

   
    let valorExposicion = document.getElementById("exposicion").value;
    let nombreExposicion = "";
    if (valorExposicion === "e1") {
        nombreExposicion = "Entrada General - 80 €";
    } else if (valorExposicion === "e2") {
        nombreExposicion = " Entrada Front row - 110 €";
    } else {
        nombreExposicion = "Entrada Vip - 150 €";
    }
    document.getElementById("ex").innerHTML = nombreExposicion;

    document.getElementById("modal").style.display = "flex";
    return false;
}

function cerrarVentana() {
    console.log("-----------función cerrarVentana");
    document.getElementById("modal").style.display = "none";
}