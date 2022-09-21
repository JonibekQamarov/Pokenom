// var elSearchPokemon = document.querySelector([data - search - pokemon]);
var elHeightPokemon = document.querySelector("[data-height-pokemon]");
var elWeightPokemon = document.querySelector("[data-weight-pokemon]");
var elImgUrlPokemon = document.querySelector("[data-img-url-pokemon]");
var elNamePokemon = document.querySelector("[data-name-pokemon]");
var elForm = document.querySelector("[data-form]");
var elBoxAdd = document.querySelector("[data-add-box-pokemon]");

renderPokemon();
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var pokemon = {
    name: null,
    img: null,
    height: null,
    weight: null,
  };

  pokemon.height = elHeightPokemon.value;
  pokemon.img = elImgUrlPokemon.value;
  pokemon.weight = elWeightPokemon.value;
  pokemon.name = elNamePokemon.value;

  pokemons.unshift(pokemon);
  elBoxAdd.prepend(createElBox(pokemon));
});

function renderPokemon() {
  elBoxAdd.innerHTML = "";
  for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    elBoxAdd.appendChild(createElBox(pokemon));
  }
}
function createElBox(pokemon) {
  var elPokemonsBox = document.createElement("div");
  var elImage = document.createElement("img");
  var elH2Name = document.createElement("h2");
  var elPInfo = document.createElement("p");
  var elWeight = document.createElement("h3");
  var elHeight = document.createElement("h3");

  elImage.src = `${pokemon.img}`;
  elH2Name.textContent = `${pokemon.name}`;
  elPInfo.textContent = `${pokemon.type}`;
  elWeight.textContent = `${pokemon.weight}`;
  elHeight.textContent = `${pokemon.height}`;

  elPokemonsBox.appendChild(elImage);
  elPokemonsBox.appendChild(elPInfo);
  elPokemonsBox.appendChild(elWeight);
  elPokemonsBox.appendChild(elHeight);

  elPokemonsBox.classList.add("box-pokemons-style");
  return elPokemonsBox;
}
