const palavras = ["amora","abacate","laranja"];
const letra = "a"

let perdeu = 0;

for(let i = 0; i < palavras.length; i++){
  if(palavras[i][0] === letra){
    //ignora
  } else {
    perdeu += 1;
  }
}
console.log(perdeu);