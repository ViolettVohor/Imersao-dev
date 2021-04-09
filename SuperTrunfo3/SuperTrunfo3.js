var cartaShiryu = {
    nome: "Shiryu",
    imagem: "https://cutt.ly/Zcs6LCL",
    atributos: {
      Ataque: 70,
      Defesa: 80,
      Magia: 80
    }
  }
  
  var cartaLuffy = {
    nome: "Luffy",
    imagem: "https://cutt.ly/Ccs6S62",
    atributos: {
      Ataque: 100,
      Defesa: 60,
      Magia: 40,
    }
  }
  
  var cartaChopper = {
    nome: "Tony Tony Chopper",
    imagem: "https://cutt.ly/Ycs6bgk",
    atributos: {
      Ataque: 70,
      Defesa: 90,
      Magia: 60
    }
  }
  
  var cartaSeiya = {
      nome: "Seiya de Pegaso",
      imagem: "https://cutt.ly/YckhjbZ",
      atributos: {
          Ataque: 80,
          Defesa: 60,
          Magia: 90
      }
  }
  
  var cartaBulbasauro = {
      nome: "Bulbasauro",
      imagem: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
      atributos: {
          Ataque: 70,
          Defesa: 65,
          Magia: 85
      }
  }
  
  var cartaFranky = {
      nome: "Franky",
      imagem: "https://pm1.narvii.com/7201/205ad085bbe90c9fa168d79f5a2fbdea4a7ecf29r1-720-720v2_128.jpg",
      atributos: {
          Ataque: 88,
          Defesa: 62,
          Magia: 90
      }
  }
  
  var cartaLol = {
      nome: "Caitlyn",
      imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      atributos: {
          Ataque: 95,
          Defesa: 40,
          Magia: 10
      }
  }
  
  var cartaNaruto = {
      nome: "Naruto",
      imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
      atributos: {
          Ataque: 80,
          Defesa: 60,
          Magia: 100
      }
  }
  
  var cartaHarry = {
      nome: "Harry Potter",
      imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
      atributos: {
          Ataque: 70,
          Defesa: 50,
          Magia: 95
      }
  }
  
  var cartaBatman = {
      nome: "Batman",
      imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
      atributos: {
          Ataque: 95,
          Defesa: 70,
          Magia: 0
      }
  }
  
  var cartaMarvel = {
      nome: "Capitã Marvel",
      imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
      atributos: {
          Ataque: 90,
          Defesa: 80,
          Magia: 0
      }
  }
  
  var cartaZoro = {
    nome: "Zoro",
    imagem: "https://i.pinimg.com/originals/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.png",
    atributos: {
      Ataque: 95,
      Defesa: 90,
      Magia: 30
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaChopper, cartaLuffy, cartaShiryu, cartaSeiya, cartaFranky, cartaLol, cartaBatman, cartaBulbasauro, cartaMarvel, cartaHarry, cartaNaruto, cartaZoro]
  
  var pontosJog = 0
  var pontosMaq = 0
  
  atualizaPlacar()
  atualizaQtCartas()
  
  function sortearCarta() {
    var cartaNumMaq = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[cartaNumMaq]
    cartas.splice(cartaNumMaq, 1)
    var cartaNumJog = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[cartaNumJog]
    cartas.splice(cartaNumJog, 1)
    
    document.getElementById("btnJogar").disabled = false
    document.getElementById("btnSortear").disabled = true
    
    atualizaQtCartas()
    exibeCarta()
  }
  
  function atualizaPlacar(){
    var divPlacar = document.getElementById("placar")
    var html = "Jogador: " + pontosJog + " / Maquina: " + pontosMaq
    divPlacar.innerHTML = html
  }
  
  function atualizaQtCartas(){
    var divQtCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidades de cartas no jogo: " + cartas.length
    divQtCartas.innerHTML = html
  }
  
  var moldura = '<img src="https://cutt.ly/4ckkMQK" style=" width: inherit; height: inherit; position: absolute;">'
  
  var divCartaJg = document.getElementById("carta-jogador")
  
  function exibeCarta(){
    var opcoesTexto = ""
    divCartaJg.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nomeJg = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`
    for (var atributos in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributos + "'>" + atributos + ": " + cartaJogador.atributos[atributos] + " <br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJg.innerHTML += moldura + nomeJg + html + opcoesTexto + "</div>"
  }
  
  function obtAtribSel(){
    var radioAtrib = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtrib.length; i++){
      if (radioAtrib[i].checked){
        return radioAtrib[i].value
      }
    }
  }
  
  var divCartaMq = document.getElementById("carta-maquina")
  
  function exibeCartaMq(){
    var opcoesTexto = ""
    divCartaMq.style.backgroundImage = `url(${cartaMaquina.imagem})`
    divCartaMq.innerHTML = opcoesTexto
    var nomeMq = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`
    for (var atributos in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributos + "' >" + atributos + ": " + cartaMaquina.atributos[atributos] + " <br>"
  }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMq.innerHTML += moldura + nomeMq + html + opcoesTexto + "</p></div>"
  }
  
  function jogar(){
    exibeCartaMq()
    var divResultado = document.getElementById("resultado")
    var atribSel = obtAtribSel()
    var htmlResultado = ""
    if(cartaJogador.atributos[atribSel] > cartaMaquina.atributos[atribSel]){
      htmlResultado = "<p class='resultado-final'>Jogador venceu</p>"
      pontosJog++
    } else if(cartaJogador.atributos[atribSel] == cartaMaquina.atributos[atribSel]){
       htmlResultado = "<p class='resultado-final'>Empate</p>"
    } else {
       htmlResultado = "<p class='resultado-final'>Maquina venceu</p>"
      pontosMaq++
    }
    divResultado.innerHTML = htmlResultado
    atualizaPlacar()
    
    document.getElementById("btnJogar").disabled = true
    
    if (cartas.length == 0){
      alert("Fim de Jogo!!!")
      if(pontosMaq > pontosJog){
        htmlResultado = "<p class='resultado-final'>A Maquina Venceu a Partida</p>"
      } else if (pontosMaq == pontosJog){
        htmlResultado = "<p class='resultado-final'>Empate</p>"
      } else {
        htmlResultado = "<p class='resultado-final'>O Jogador Venceu a Partida</p>"
      }
      divResultado.innerHTML = htmlResultado
    } else {
      document.getElementById("btnProximaRodada").disabled = false
    }  
  }
  
  function proximaRodada(){
    divCartaJg.innerHTML = ""
    divCartaMq.innerHTML = ""
    divCartaMq.style.backgroundImage = ""
    
    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
  
    sortearCarta()
    
    document.getElementById("btnJogar").disabled = false
    document.getElementById("btnProximaRodada").disabled = true
  }