const stringCorrompida = "*Canis %lupus )familiaris";

let dadoPurificado = "";
    
  for(let caractere of stringCorrompida){
      if(caractere === "!" || caractere === "@" || caractere === "#" || caractere === "$" || caractere === "%" || caractere === "&" || caractere === "*" || caractere === "(" || caractere === ")"){
          //ignora
      } else {
          dadoPurificado += caractere;
      }
  }
console.log(dadoPurificado);