const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let newGame = new Game();
  let figure = document.querySelector(".ttt")
  //let newView = new View(newGame, figure)

  let ul = document.querySelector("#grid")
  console.log(ul)
  ul.addEventListener("click", handleClick)

});
