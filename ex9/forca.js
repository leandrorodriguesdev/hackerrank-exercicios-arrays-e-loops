const palavra = "abelha";
const palpite = "a";

let acertos = 0;

//compara cada caractere da string com o do palpite
for(let i = 0; i < palavra.length; i++){
  if(palavra[i] === palpite){
    acertos += 1;
  }
}
console.log(acertos);