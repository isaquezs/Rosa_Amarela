//count representa qual radio button está selecionado (qual imagem está sendo mostrada)
let count = 1;
document.getElementById("radio1").checked = true;

//Tempo de transição entre as imagens
setInterval(() => {
  nextImage();
}, 4000);

function nextImage() { 
  count++;
  if(count > 4) {
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}

//Scroll suave
const botoesScroll = document.querySelectorAll(".header a[href^='#']"); 
const header = document.getElementById("header");
const alturaHeader = header.offsetHeight;

function getDistanceFromTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTop) {
  window.scrollTo({
    top: distanceFromTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  //Removendo passagem do href pra URL da página e scrollagem brusca
  event.preventDefault();
  const distanceFromTop = getDistanceFromTop(event.target) - alturaHeader;
  nativeScroll(distanceFromTop);
}

botoesScroll.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});