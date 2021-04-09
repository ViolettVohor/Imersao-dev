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
          ataque: 80,
          Defesa: 60,
          Magia: 90
      }
  }
  
  var cartaBulbasauro = {
      nome: "Bulbasauro",
      imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
      atributos: {
          Ataque: 70,
          Defesa: 65,
          Magia: 85
      }
  }
  
  var cartaFranky = {
      nome: "Franky",
      imagem: "data:image/jpeg;base64,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",
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
  
  var cartaLuffy5 = {
    nome: "Luffy Gear 5",
    imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c6b2845-9e5d-4603-b363-ce7bfe6990f6/davyj0q-e0ab326a-3725-4876-b10a-05d7971dd70e.jpg/v1/fill/w_622,h_350,q_70,strp/luffy_gear_5_anime_war_by_merimo_animation_davyj0q-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2M2YjI4NDUtOWU1ZC00NjAzLWIzNjMtY2U3YmZlNjk5MGY2XC9kYXZ5ajBxLWUwYWIzMjZhLTM3MjUtNDg3Ni1iMTBhLTA1ZDc5NzFkZDcwZS5qcGciLCJoZWlnaHQiOiI8PTU3NiIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzdjNmIyODQ1LTllNWQtNDYwMy1iMzYzLWNlN2JmZTY5OTBmNlwvbWVyaW1vLWFuaW1hdGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.MvMcSSvb1UiHZrbKIQU_R8ENdUCaWTHucOnAVHp-His",
    atributos: {
      Ataque: 100,
      Defesa: 100,
      Magia: 100
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaChopper, cartaLuffy, cartaShiryu, cartaSeiya, cartaFranky, cartaLol, cartaBatman, cartaBulbasauro, cartaMarvel, cartaHarry, cartaNaruto, cartaLuffy5]
  
  var pontosJog
  var pontosMaq
  
  function sortearCarta() {
    var cartaNumMaq = parseInt(Math.random() * 12)
    cartaMaquina = cartas[cartaNumMaq]
    var cartaNumJog = parseInt(Math.random() * 12)
    while (cartaNumJog == cartaNumMaq) {
      cartaNumJog = parseInt(Math.random() * 12)
    }
    cartaJog = cartas[11]
    
     document.getElementById("btnJogar").disabled = false
    
    var divResultado = document.getElementById("resultado")
    var htmlResultado = ""
    if (cartaNumJog == 11){
      document.getElementById("btnJogar").disabled = true
      document.getElementById("btnProximaRodada").disabled = false
      htmlResultado = "<p class='resultado-final'>Jogador venceu</p>"
    } else if (cartaNumMaq == 11){
      document.getElementById("btnJogar").disabled = true
      document.getElementById("btnProximaRodada").disabled = false
      htmlResultado = "<p class='resultado-final'>Maquina venceu</p>"
    }
    divResultado.innerHTML = htmlResultado
    
    document.getElementById("btnSortear").disabled = true
    
    exibeCarta()
  }
  
  var moldura = '<img src="https://cutt.ly/4ckkMQK" style=" width: inherit; height: inherit; position: absolute;">'
  
  var divCartaJg = document.getElementById("carta-jogador")
  
  function exibeCarta(){
    var opcoesTexto = ""
    divCartaJg.style.backgroundImage = `url(${cartaJog.imagem})`
    var nomeJg = `<p class='carta-subtitle'>${cartaJog.nome}</p>`
    for (var atributos in cartaJog.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributos + "'>" + atributos + ": " + cartaJog.atributos[atributos] + " <br>"
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
  
  function jogar(){
    var opcoesTexto = ""
    
    divCartaMq.style.backgroundImage = `url(${cartaMaquina.imagem})`
    divCartaMq.innerHTML = opcoesTexto
    var nomeMq = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`
    for (var atributos in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributos + "' >" + atributos + ": " + cartaMaquina.atributos[atributos] + " <br>"
  }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMq.innerHTML += moldura + nomeMq + html + opcoesTexto + "</p></div>"
    
    var divResultado = document.getElementById("resultado")
    var atribSel = obtAtribSel()
    var htmlResultado = ""
    if(cartaJog.atributos[atribSel] > cartaMaquina.atributos[atribSel]){
      htmlResultado = "<p class='resultado-final'>Jogador venceu</p>"
    } else if(cartaJog.atributos[atribSel] == cartaMaquina.atributos[atribSel]){
       htmlResultado = "<p class='resultado-final'>Empate</p>"
    } else {
       htmlResultado = "<p class='resultado-final'>Maquina venceu</p>"
    }
    divResultado.innerHTML = htmlResultado
  }