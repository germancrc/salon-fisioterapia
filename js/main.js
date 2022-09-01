//FIXED NAV

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
  })


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader, #logoLoad").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader, #logoLoad").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

// ANIMACION ELEMENTOS

const servTextCont = document.getElementById('servTextCont');
const servic2 = document.getElementById('servic2');
const ubica = document.getElementById('ubica');
const comunicar = document.getElementById('comunicar');
const servicio1 = document.getElementById('servicio1');
const servicio2 = document.getElementById('servicio2');
const servicio3 = document.getElementById('servicio3');
const servicio4 = document.getElementById('servicio4');
const servicio5 = document.getElementById('servicio5');
const servicio6 = document.getElementById('servicio6');
const servicio7 = document.getElementById('servicio7');
const servicio8 = document.getElementById('servicio8');
const servicio9 = document.getElementById('servicio9');
const servicio10 = document.getElementById('servicio10');
const servicio11 = document.getElementById('servicio11');
const servicio12 = document.getElementById('servicio12');


const mostrarServicio = (tarjetas, observador) => {

  tarjetas.forEach((tarjeta) => {
    if(tarjeta.isIntersecting){
      tarjeta.target.classList.add('visible')
    }
  });
}

const observador = new IntersectionObserver(mostrarServicio, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});

observador.observe(servTextCont);
observador.observe(servic2);
observador.observe(ubica);
observador.observe(comunicar);
observador.observe(servicio1);
observador.observe(servicio2);
observador.observe(servicio3);
observador.observe(servicio4);
observador.observe(servicio5);
observador.observe(servicio6);
observador.observe(servicio7);
observador.observe(servicio8);
observador.observe(servicio9);
observador.observe(servicio10);
observador.observe(servicio11);
observador.observe(servicio12);



