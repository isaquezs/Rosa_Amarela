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