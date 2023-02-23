class Renderer {
  constructor() {}

  renderUser(mainUser) {
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(mainUser);
    $(".user-container").empty().append(newHTML);
  }

  renderFriends(friends) {
    const source1 = $("#friends-template").html();
    const template1 = Handlebars.compile(source1);
    const newHTML1 = template1(friends);
    $(".friends-container").empty().append(newHTML1);
  }

  renderQuote(quote) {
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(quote);
    $(".quote-container").empty().append(newHTML);
  }

  renderText(text) {
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(text);
    $(".meat-container").empty().append(newHTML);
  }

  renderPokemon(pokemon) {
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(pokemon);
    $(".pokemon-container").empty().append(newHTML);
  }
  render(loadData) {
    this.renderUser(loadData.mainUser);
    this.renderFriends(loadData);
    this.renderQuote(loadData);
    this.renderText(loadData);
    this.renderPokemon(loadData);
  }
}
