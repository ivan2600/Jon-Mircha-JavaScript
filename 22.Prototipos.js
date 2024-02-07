function Disco(banda, nombre) {
  this.banda = banda;
  this.nombre = nombre;
}

Disco.prototype.play = function(){
  console.log(`${this.nombre} está sonando...`);
}

const MasterOfPuppets = new Disco('Metallica', 'Master of Puppets'),
  RustInPeace = new Disco('Megadeth', 'Rust In Peace');

console.log(MasterOfPuppets, RustInPeace);

MasterOfPuppets.play();
RustInPeace.play();