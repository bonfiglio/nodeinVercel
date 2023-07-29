function speak(line) {

    console.log(`The ${this.type} robot says '${line}'`);
  
  }
  function speakIt(line) {

    console.log(`La ${this.type} di robot dice '${line}'`);
  
  }  
  let r1Robot = {type: "1° Serie Modello R", speak};
  
  let x2Robot = {type: "2° Serie Modello X", speak,speakIt};
  
  
  //x2Robot.speak("Ciao io sono la serie Terrestre più evoluta, " + "Ma non posso nuotare!");
  
  
  //r1Robot.speak("Io uso le patate come batteria.");
  speak.call(r1Robot, "Brum Brum!");
module.exports = x2Robot;
/*module.exports = (base, esponente) => {
    let risultato = 1;
    for (let count = 0; count < esponente; count++) {
        risultato *= base; }
    return risultato;
}; */
