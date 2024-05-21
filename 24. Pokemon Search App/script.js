const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const imgEl = document.getElementById("sprite");
const typesEl = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const pokemonObj = {
  name: "",
  id: "",
  weight: "",
  height: "",
  imgUrl: "",
  types: [],
  hp: "",
  attack: "",
  defense: "",
  specialAttack: "",
  specialDefense: "",
  speed: "",
};

const resetUI = () => {
  nameEl.textContent = "";
  idEl.textContent = "";
  weightEl.textContent = "";
  heightEl.textContent = "";
  imgEl.src = "";
  typesEl.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  searchInput.value = "";
};

const fetchPokemon = async () => {
  const pokemonNameId = searchInput.value;
  const isId = isNaN(parseInt(pokemonNameId));
  const pokemonNameIdLower = isId ? pokemonNameId.toLowerCase() : pokemonNameId;
  const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameIdLower}`;
  const response = await fetch(apiUrl);
  if (response.status === 200) {
    const data = await response.json();
    const pokemon = data;
    const { id, name, weight, height, types, stats, sprites } = pokemon;
    pokemonObj.id = id;
    pokemonObj.name = name;
    pokemonObj.weight = weight;
    pokemonObj.height = height;
    pokemonObj.imgUrl = sprites.front_default;
    pokemonObj.types = types;
    pokemonObj.hp = stats[0].base_stat;
    pokemonObj.attack = stats[1].base_stat;
    pokemonObj.defense = stats[2].base_stat;
    pokemonObj.specialAttack = stats[3].base_stat;
    pokemonObj.specialDefense = stats[4].base_stat;
    pokemonObj.speed = stats[5].base_stat;

    nameEl.textContent = pokemonObj.name.toUpperCase();
    idEl.textContent = `#${pokemonObj.id}`;
    weightEl.textContent = `Weight: ${pokemonObj.weight}`;
    heightEl.textContent = `Height: ${pokemonObj.height}`;
    imgEl.src = pokemonObj.imgUrl;

    typesEl.innerHTML = ``;
    pokemonObj.types.forEach((type) => {
      const typeEl = document.createElement("div");
      typeEl.classList.add("type");
      typeEl.style.backgroundColor = "#f7dc6f";
      typeEl.style.padding = "4px";
      typeEl.textContent = type.type.name.toUpperCase();
      typesEl.appendChild(typeEl);
    });

    hp.innerText = pokemonObj.hp;
    attack.innerText = pokemonObj.attack;
    defense.innerText = pokemonObj.defense;
    specialAttack.innerText = pokemonObj.specialAttack;
    specialDefense.innerText = pokemonObj.specialDefense;
    speed.innerText = pokemonObj.speed;
    searchInput.value = "";
  } else {
    alert("Pokemon not found");
    resetUI();
  }
};

searchBtn.addEventListener("click", fetchPokemon);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
