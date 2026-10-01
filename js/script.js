const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links")

hamb.addEventListener("click", function() {
    // alert("HOLA NOS QUEREMOS IR")
    console.log("Con esto podemos mandar mensajitos a la consola");

    navLinks.classList.toggle("active");

    
}) 