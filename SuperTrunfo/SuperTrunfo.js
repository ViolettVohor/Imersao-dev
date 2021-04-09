var cartaShiryu = {
    nome: "Shiryu",
    atributos: {
      ataque: 70,
      defesa: 80,
      magia: 80
    }
  }
  
  var cartaLuffy = {
    nome: "Luffy",
    atributos: {
      ataque: 100,
      defesa: 60,
      magia: 40,
    }
  }
  
  var cartaChopper = {
    nome: "Tony Tony Chopper",
    atributos: {
      ataque: 70,
      defesa: 90,
      magia: 60
    }
  }
  
  var imgAtr = ["https://cutt.ly/wcua7It", "https://cutt.ly/ecusvWX", "https://cutt.ly/jcusf0A"]
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaChopper, cartaLuffy, cartaShiryu]
  
  function sortearCarta() {
    var numCarta = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numCarta]
    
    var cartaNumJogador = parseInt(Math.random() * 3)
    while (cartaNumJogador == numCarta) {
      cartaNumJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[cartaNumJogador]
    
    exibirOpcoes()
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for (var atributos in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributos + "' >" + atributos
    }
    opcoes.innerHTML = opcoesTexto
  }
  
  function obtAtribSel(){
    var radioAtrib = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtrib.length; i++){
      if (radioAtrib[i].checked){
        return radioAtrib[i].value
      }
    }
  }
  
  function jogar(){
    var atribSel = obtAtribSel()
    console.log(atribSel)
    if(cartaJogador.atributos[atribSel] > cartaMaquina.atributos[atribSel]){
      alert("Jogador ganhou")
    } else if(cartaJogador.atributos[atribSel] == cartaMaquina.atributos[atribSel]){
      alert("Empate")
    } else {
      alert("Maquina venceu")
    }
    alert("Carta da Jogador: " + cartaJogador.nome + "\nValor do Atributo: " + cartaJogador.atributos[atribSel])
    alert("Carta da Maquina: " + cartaMaquina.nome + "\nValor do Atributos: " + cartaMaquina.atributos[atribSel])
  }