var numero = parseInt((Math.random() * 20) + 1)
var tentativas = 3

try {
  while (tentativas > 0) {
    var chute = parseInt(prompt("Tente adivinhar o número que pensei, entre 1 e 20"))

    if (numero == chute) {
      throw new MyError("Fim!");
      //break
      //tentativas = tentativas - 3
    } else if (chute < numero) {
        alert("O número secreto é maior que o que você chutou")
    } else if (chute > numero) {
        alert("O número secreto é menor que o que você chutou")
    } 
      tentativas = tentativas - 1
  }
} catch(myError) {
    alert("Parabéns!! Você acertou") 
}

if (chute != numero) {
  alert("Você errou, que pena! O número secreto era " + numero)
}