class Disco {
  constructor(disco, banda){
    this.disco = disco;
    this.banda = banda;
  }
  play(){
    console.log(`Está sonando el disco ${this.disco} de ${this.banda}`);
  }
  elogio(){
    console.log("Tremendo disco");
  }
}

class Cancion extends Disco {
  constructor(disco, banda, nombre){
    super(disco, banda);
    this.nombre = nombre;
  }

  play(){
    console.log(`Está sonando el tema ${this.nombre} de ${this.banda}`);
  }

  elogio2(){
    console.log('Tremendo tema');
  }
}

const BlackAlbum = new Cancion('Black Album', 'Metallica', 'Enter Sandman'),
  PhysicalGraffiti = new Disco('Physical Graffiti', 'Led Zeppelin');

console.log(BlackAlbum, PhysicalGraffiti);

BlackAlbum.play();
BlackAlbum.elogio2();
BlackAlbum.elogio();
PhysicalGraffiti.play();
PhysicalGraffiti.elogio();