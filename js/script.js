
// NAV 
const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links");
const icon = hamb.querySelector("i");

hamb.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Cambia entre hamburguesa y X
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Cierra el menú al pulsar un enlace
const enlaces = navLinks.querySelectorAll("a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});



/// Datos de las entradas
var entradas = [
  { id: 'e1', nombre: 'Entrada General', precio: 80 },
  { id: 'e2', nombre: 'VIP', precio: 180 },
  { id: 'e3', nombre: 'Abono Festival', precio: 120 }
];
 
var MAXIMO_POR_TIPO = 10;
 
// Cantidad elegida de cada tipo
var cantidades = { e1: 0, e2: 0, e3: 0 };
 
// Suma o resta una entrada (lo llaman los botones + y −)
function cambiar(id, cambio) {
  var nueva = cantidades[id] + cambio;
  if (nueva >= 0 && nueva <= MAXIMO_POR_TIPO) {
    cantidades[id] = nueva;
    costeTotal();
  }
}
 
// Recalcula cantidades, resumen y coste total
function costeTotal() {
  var total = 0;
  var numero = 0;
  var lineas = '';
 
  for (var i = 0; i < entradas.length; i++) {
    var e = entradas[i];
    var cantidad = cantidades[e.id];
 
    document.getElementById('cant-' + e.id).textContent = cantidad;
    document.getElementById('menos-' + e.id).disabled = (cantidad === 0);
    document.getElementById('mas-' + e.id).disabled = (cantidad === MAXIMO_POR_TIPO);
 
    var tarjeta = document.getElementById('tarjeta-' + e.id);
    if (cantidad > 0) {
      tarjeta.classList.add('seleccionada');
      lineas += '<li><span>' + cantidad + ' × ' + e.nombre + '</span><strong>' + (cantidad * e.precio) + ' €</strong></li>';
    } else {
      tarjeta.classList.remove('seleccionada');
    }
 
    numero += cantidad;
    total += cantidad * e.precio;
  }
 
  if (lineas === '') {
    lineas = '<li class="vacio">Todavía no has elegido ninguna entrada.</li>';
  }
 
  document.getElementById('resumen-lista').innerHTML = lineas;
  document.getElementById('coste').textContent = total + ' €';
 
  // Solo se puede comprar si hay al menos una entrada
  document.getElementById('boton-comprar').disabled = (numero === 0);
}
 
// Al enviar el formulario: rellena y abre el modal
function comprar() {
  var tipos = '';
  var numero = 0;
 
  for (var i = 0; i < entradas.length; i++) {
    var cantidad = cantidades[entradas[i].id];
    if (cantidad > 0) {
      if (tipos !== '') {
        tipos += ', ';
      }
      tipos += cantidad + ' × ' + entradas[i].nombre;
      numero += cantidad;
    }
  }
 
  document.getElementById('nom').textContent = document.getElementById('nombre').value;
  document.getElementById('corr').textContent = document.getElementById('correo').value;
  document.getElementById('ex').textContent = tipos;
  document.getElementById('num').textContent = numero;
  document.getElementById('ct').textContent = document.getElementById('coste').textContent;
 
  document.getElementById('modal').style.display = 'flex';
  return false; // no recargar la página
}
 
// Cierra el modal y deja el formulario a cero
function cerrarVentana() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  cantidades = { e1: 0, e2: 0, e3: 0 };
  costeTotal();
}
 
// Estado inicial
costeTotal();