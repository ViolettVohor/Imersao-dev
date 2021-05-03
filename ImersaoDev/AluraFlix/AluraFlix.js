var listaFilmes = ["https://cutt.ly/xxVusA8", "https://cutt.ly/1xVug1A", "https://cutt.ly/txVukmx", "https://cutt.ly/txVuxDp"]

var nomeFilmes = ["Matrix", "One Piece", "Os Sem Floresta", "Scott Pilgrim Vs. The World"]

var url = ["https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0388629/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0327084/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0446029/?ref_=fn_al_tt_1"] 

var filmeExibido = ""

function exibirFilme(){
  var filme = parseInt(prompt("Qual Filme você quer? \n1-Matrix \n2-One Piece \n3-Os Sem Floresta \n4-Scott Pilgrim"))

  var teste = document.getElementById("teste")
  if(filmeExibido != filme){
    if(filme > 0 && filme < 5){
      teste.innerHTML = "<img src=" + listaFilmes[filme-1] + "><h2><a href='" + url[filme-1] + "' target='_blank'>" + nomeFilmes[filme-1] + "</a></h2>"
    } else {
      teste.innerHTML = "<h2>Digite um valor válido</h2>"
    }
  } else {
    teste.innerHTML = "<h2>Você já viu esse filme!</h2>"
  }
  filmeExibido = filme
}

/*for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
  document.write("<h2><a href='" + url[i] + "' target='_blank'>"+ nomeFilmes[i] + "</a></h2>")
}*/
