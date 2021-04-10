alert("Quem é esse pokemon?")
var pokemons = ["https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/250px-131Lapras.png", "https://img.pokemondb.net/artwork/lucario.jpg", "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png", "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"]

var pokeNumero = parseInt(Math.random() * pokemons.length)

var img = pokemons[pokeNumero]
document.getElementById('pokemon').src = img

function adivinhar(){
  var pokemon = parseInt(prompt("Digite: \n1- Lapras \n2- Lucario \n3- Charmander \n4- Pikachu"))
  if(pokemon == pokeNumero + 1) {
    document.write("Você acertou, Parabéns!")
  } else {
    document.write("Você errou!")
  }
}