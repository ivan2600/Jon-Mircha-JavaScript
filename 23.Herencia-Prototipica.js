function Disco(banda, disco) {
  this.banda = banda;
  this.disco = disco;
}

Disco.prototype.play = function(){
  console.log(`${this.disco} está sonando...`);
}

function Cancion(nombre, banda, disco, duracion){
  this.super = Disco;
  this.super(banda, disco);
  this.duracion = duracion;
  this.nombre = nombre;
}

//Cancion esta heredando de Disco
Cancion.prototype = new Disco();
Cancion.prototype.constructor = Cancion;

//Sobreescribir metodo
Cancion.prototype.play = function (){
  console.log(`Está sonando ${this.nombre} de ${this.disco}`);
}

Cancion.prototype.tiempo = function() {
  console.log(`Este tema dura ${this.duracion} minutos`);
}

const MasterOfPuppets = new Disco('Metallica', 'Master of Puppets'),
  RustInPeace = new Disco('Megadeth', 'Rust In Peace');

const HolyWars = new Cancion( 'Holy Wars', 'Megadeth', 'Rust In Peace', '6:32');

console.log(MasterOfPuppets, RustInPeace, HolyWars);

MasterOfPuppets.play();
RustInPeace.play();
HolyWars.play();
HolyWars.tiempo();