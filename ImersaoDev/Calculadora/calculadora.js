var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
var segundoValor = parseFloat(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para Somar, 2 para Subtrair, 3 para Multiplicar ou 4 para Dividir")

if (operacao == 1){
  var resultado = primeiroValor + segundoValor
  var tipo = " + "
} else if (operacao == 2){
  var resultado = primeiroValor - segundoValor
  var tipo = " - "
} else if (operacao == 3){
  var resultado = primeiroValor * segundoValor
  var tipo = " X "
} else if (operacao == 4){
  var resultado = primeiroValor / segundoValor
  var tipo = " / "
} else {
  document.write("<h2>Opção inválida</h2>")
  window.stop()
}

document.write("<h2>" + primeiroValor + tipo + segundoValor + " = " + resultado + "</h2>")