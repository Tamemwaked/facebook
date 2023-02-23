//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  loadUserData() {
    return $.get("https://randomuser.me/api/?results=7").then((randomUsers) => {
      const firstName = randomUsers.results[0].name.first;
      const lastName = randomUsers.results[0].name.last;
      const picture = randomUsers.results[0].picture.medium;
      const city = randomUsers.results[0].location.city;
      const state = randomUsers.results[0].location.state;
      const mainUser = {
        FirstName: firstName,
        LastName: lastName,
        Picture: picture,
        city: city,
        state: state,
      };
      this.data.mainUser = mainUser;

      let friends = {};
      for (let i = 1; i < randomUsers.results.length; i++) {
        const firstName = randomUsers.results[i].name.first;
        const lastName = randomUsers.results[i].name.last;
        friends[i] = { firstName: firstName, lastName: lastName };
      }
      this.data.friends = friends;

      return mainUser;
    });
  }

  loadQuoteData() {
    return $.get("https://api.kanye.rest/").then((loadedQuote) => {
      this.data.quote = loadedQuote.quote;
      return loadedQuote;
    });
  }

  loadTextData() {
    return $.get("https://baconipsum.com/api/?type=all-meat&paras=1").then(
      (loadedText) => {
        this.data.text = loadedText[0];
        return loadedText;
      }
    );
  }

  loadPokemonData() {
    let randomId = Math.floor(Math.random() * 949);
    return $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
      (loadedPokemon) => {
        const pokemonName = loadedPokemon.name;
        const pokemonPicture = pokemon.sprites.front_default;
        let pokemonUpperCase =
          pokemonName[0].toUpperCase() + pokemonName.substring(1);
        this.data.pokemonName = pokemonUpperCase;
        this.data.pokemonPicture = pokemonPicture;
        return loadedPokemon;
      }
    );
  }

  loadData() {
    this.loadUserData()
      .then(this.loadQuoteData)
      .then(this.loadTextData)
      .then(this.loadPokemonData);
  }
}
