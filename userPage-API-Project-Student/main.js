const apiManager = new APIManager();
const renderer = new Renderer();

$("#load").click(function () {
  apiManager.loadData();
});

$("#display").click(function () {
  renderer.render(apiManager.data);
});
