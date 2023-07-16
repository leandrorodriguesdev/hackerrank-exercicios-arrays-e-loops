const resultados = ["V", "E", "V", "E"];

let pontos = 0;

for(let partida of resultados){
  if(partida === "V"){
    pontos += 3;
  } else if(partida === "E"){
    pontos += 1;
  }
}
console.log(pontos);