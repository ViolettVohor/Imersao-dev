var listaFilmes = ["https://cutt.ly/xxVusA8", "https://cutt.ly/1xVug1A", "https://cutt.ly/txVukmx", "https://cutt.ly/txVuxDp"]

var nomeFilmes = ["Matrix", "One Piece", "Os Sem Floresta", "Scott Pilgrim Vs. The World"]

var url = ["https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0388629/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0327084/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0446029/?ref_=fn_al_tt_1"] 

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
  document.write("<h2><a href='" + url[i] + "' target='_blank'>"+ nomeFilmes[i] + "</a></h2>")
}