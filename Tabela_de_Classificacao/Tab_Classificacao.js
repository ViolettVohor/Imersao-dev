function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 10 + jogador.empates * 5 - jogador.derrotas * 5
    return pontos
  }
  
  var paulo = {nome: "Paulo", vitorias: 2, empates: 5, derrotas: 1, pontos: 11}
  
  var rafa = {nome: "Rafa", vitorias: 1, empates: 5, derrotas: 2, pontos: 8}
  
  var jogadores = [paulo, rafa]
  
  exibirJogadores(jogadores)
  
  function exibirJogadores(jogadores) {
    
    var html = ""
    for (var i = 0; i < jogadores.length; i++){
      jogadores[i].pontos = calculaPontos(jogadores[i])
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      jogadores[i].pontos = calculaPontos(jogadores[i])
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitórias</button><td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empates</button><td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrotas</button><td></tr>"
      var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
    }
  }
  
  function adicionarVitoria(i){
    if(i == 0) {
      var id = 1
    } else {
      var id = 0
    }
    jogadores[i].vitorias++
    jogadores[id].derrotas++
    exibirJogadores(jogadores)
  }
  
  function adicionarEmpate(i){
    if(i == 0) {
      var id = 1
    } else {
      var id = 0
    }
    jogadores[i].empates++
    jogadores[id].empates++
    exibirJogadores(jogadores)
  }
  
  function adicionarDerrota(i){
    if(i == 0) {
      var id = 1
    } else {
      var id = 0
    }
    jogadores[i].derrotas++
    jogadores[id].vitorias++
    exibirJogadores(jogadores)
  }