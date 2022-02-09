/*
escape del castillo
es un juego multijugador de 2 jugadores,
 que iran saltando diferente obstaculos,
 en caso de caer fuera de las plataformas estaria comenzado el juego,
se moveran de izquierda a derechea y hacia arriba con las teclas de direccion
el segundo jugador se movera con las letras de direccion A, W, D
*/
function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
}

function draw() {
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
