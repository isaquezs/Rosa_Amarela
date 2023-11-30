//? count representa qual radio button está selecionado (qual imagem está sendo mostrada)
let count = 1;
document.getElementById("radio1").checked = true;

//! Tempo de transição entre as imagens
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

//! Scroll suave
document.addEventListener("DOMContentLoaded", function () {
  const botoesScroll = document.querySelectorAll(".header a[href^='#']"); 
  const header = document.getElementById("header");
  const alturaHeader = header.offsetHeight;

  function getDistanceFromTop(element) {
    const id = element.getAttribute("href");
    const targetElement = document.querySelector(id);
  
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const headerHeight = document.getElementById("header").offsetHeight;
  
      return rect.top + window.scrollY - headerHeight;
    }
  
    return 0;
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
});

//! Mudando imagem do carrossel de acordo com o tamanho da tela:
function obterCaminhoImagem(resolucao, numeroImagem) {
  var paths = {
      '320': 'img/carrossel/320/',
      '400': 'img/carrossel/400/',
      '768': 'img/carrossel/768/',
      '1280': 'img/carrossel/1280/',
      'Desktop': 'img/carrossel/Desktop/'
  };

  if (!paths[resolucao]) {
      console.error('Resolução inválida: ' + resolucao);
      return '';
  }

  var caminhoImagem = `${paths[resolucao]}${numeroImagem}_${resolucao}p.png`;

  return caminhoImagem;
}

let imagensCarrossel1 = document.getElementById('imagemCarrossel1');
let imagensCarrossel2 = document.getElementById('imagemCarrossel2');
let imagensCarrossel3 = document.getElementById('imagemCarrossel3');
let imagensCarrossel4 = document.getElementById('imagemCarrossel4');

//Para definir a altura da imagem
var imagensSlides = document.querySelectorAll('.slide img');

function ajustarImagensETamanho() {
  var tamanho = window.innerWidth;

  if ((tamanho <= 1920 && tamanho > 1280) || tamanho > 1920) {
    imagensCarrossel1.src = obterCaminhoImagem('Desktop', 1);
    imagensCarrossel2.src = obterCaminhoImagem('Desktop', 2);
    imagensCarrossel3.src = obterCaminhoImagem('Desktop', 3);
    imagensCarrossel4.src = obterCaminhoImagem('Desktop', 4);

    imagensSlides.forEach(function (imagemSlide) {
      imagemSlide.style.height = '100%';
    });
  } else if (tamanho <= 1280 && tamanho > 768) {
    imagensCarrossel1.src = obterCaminhoImagem('1280', 1);
    imagensCarrossel2.src = obterCaminhoImagem('1280', 2);
    imagensCarrossel3.src = obterCaminhoImagem('1280', 3);
    imagensCarrossel4.src = obterCaminhoImagem('1280', 4);

    imagensSlides.forEach(function (imagemSlide) {
      imagemSlide.style.height = '100%';
    });
  } else if (tamanho <= 768 && tamanho > 400) {
    imagensCarrossel1.src = obterCaminhoImagem('768', 1);
    imagensCarrossel2.src = obterCaminhoImagem('768', 2);
    imagensCarrossel3.src = obterCaminhoImagem('768', 3);
    imagensCarrossel4.src = obterCaminhoImagem('768', 4);

    imagensSlides.forEach(function (imagemSlide) {
      imagemSlide.style.height = '40%';
    });
  } else if (tamanho <= 400 && tamanho > 320) {
    imagensCarrossel1.src = obterCaminhoImagem('400', 1);
    imagensCarrossel2.src = obterCaminhoImagem('400', 2);
    imagensCarrossel3.src = obterCaminhoImagem('400', 3);
    imagensCarrossel4.src = obterCaminhoImagem('400', 4);

    imagensSlides.forEach(function (imagemSlide) {
      imagemSlide.style.height = '20%';
    });
  } else {
    imagensCarrossel1.src = obterCaminhoImagem('320', 1);
    imagensCarrossel2.src = obterCaminhoImagem('320', 2);
    imagensCarrossel3.src = obterCaminhoImagem('320', 3);
    imagensCarrossel4.src = obterCaminhoImagem('320', 4);

    imagensSlides.forEach(function (imagemSlide) {
      imagemSlide.style.height = '20%';
    });
  }
}

ajustarImagensETamanho();

// Adicionar o evento de redimensionamento
window.addEventListener('resize', ajustarImagensETamanho);