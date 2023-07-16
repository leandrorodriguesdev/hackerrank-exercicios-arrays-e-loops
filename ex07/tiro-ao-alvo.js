const disparos = [0, 50, 90, 80, 100, 80, 40];

let tiro = 0;

//se pontuacao >= 70, mais um tiro armazenado
for(let pontuacao of disparos){
  if(pontuacao > 70){
    tiro += 1;
  }
}

//se 3 tiros aramazenados, entao aprovado
if(tiro >= 3){
  console.log(tiro);
} else {
  console.log("ELIMINADO");
}