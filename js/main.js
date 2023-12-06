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


/* carrusel */
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider___section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider___section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.3s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function () {
  Next();
});

function Preview() {
  let sliderSection = document.querySelectorAll(".slider___section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.3s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnLeft.addEventListener("click", function () {
  Preview();
});
