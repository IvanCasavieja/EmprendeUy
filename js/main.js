function ocultarSeleccion() {
  let optionBtn = document.getElementById("rubros-laborales");
  let primerElemento = document.getElementById("primerElemento");
  let elementos = optionBtn.value;

  console.log(elementos);

  if (primerElemento !== "") {
    primerElemento.style.display = "none";
  }
}

/* btn idioma */

let divIdiomaAbierto = false;
let divIdioma = document.querySelector("#divIdioma");
document.querySelector("#idioma").addEventListener("click", abrirIdioma);
document.querySelector("html").addEventListener("click", cerrarIdioma);

function abrirIdioma(event) {
  // Detiene la propagación del evento para que no se cierre inmediatamente
  event.stopPropagation();
  
  if (!divIdiomaAbierto) {
    divIdioma.style.display = "block";
    divIdiomaAbierto = true;
  } else {
    divIdioma.style.display = "none";
    divIdiomaAbierto = false;
  }
}

function cerrarIdioma() {
  if (divIdiomaAbierto) {
    divIdioma.style.display = "none";
    divIdiomaAbierto = false;
  }
}
