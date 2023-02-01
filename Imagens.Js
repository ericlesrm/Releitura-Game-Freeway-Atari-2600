//Imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//Sons do jogo
let somDaTrilha;
let somDaColisão;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("Images/estrada.png");
  imagemDoAtor = loadImage("Images/ator-1.png");
  imagemCarro = loadImage("Images/carro-1.png");
  imagemCarro2 = loadImage("Images/carro-2.png");
  imagemCarro3 = loadImage("Images/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2,
  imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
  }

