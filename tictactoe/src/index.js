const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let newGame = new Game();
  let figure = document.querySelector(".ttt")
  let ul = document.querySelector("#grid")
  let newView = new View(newGame, ul)


  // ul.addEventListener("click", newView.handleClick)
  newView.bindEvents();
  // ul.addEventListener("click", ()=> {
  //   console.log('clicked');
  // })

});
