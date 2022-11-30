const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    let grid = document.getElementById("grid")
    // create 3x3 grid, 9 li elements needed
    for(let i=0; i < 9; i ++){
      let newLi = document.createElement("li")
      newLi.innerHTML = "hi Kaushal"
      grid.appendChild(newLi);
    }
  }
  
  // bindEvents() {}

  // handleClick(e) {}

  // makeMove(square) {}

}

module.exports = View;
