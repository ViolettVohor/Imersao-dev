//var preco = parseFloat(prompt("Qual o valor do produto em dolares?"))
//var valor = preco * 5.52
//alert("Preço em reais: R$" + valor.toFixed(2))

//var price = parseFloat(prompt("Qual o valor do produto em libras?"))
//var value = price * 1.32
//alert("O valor em dolares é US$" + value.toFixed(2))

//var distance = parseFloat(prompt("Qual a distância em anos-luz?"))
//alert("A distância em kilometros é: " + distance * 9460800000000)

function mostrar(){
    var temperature = parseFloat(document.getElementById("input").value)
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "A temperatura em Celsius é " + ((temperature - 32) * (5/9)).toFixed(2) + "°C"
  }