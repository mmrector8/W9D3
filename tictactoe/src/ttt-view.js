const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    let grid = document.getElementById("grid")
    // create 3x3 grid, 9 li elements needed
    let idx=0, count=0;
    for(let i=0; i < 3; i++){
      for (let j=0; j < 3; j++) {
        let pos = [i, j]
        let newLi = document.createElement("li")
        newLi.dataset.indexNumber = pos;
        newLi.innerHTML = "X"
        grid.appendChild(newLi);
      }
    }
  }
  
  // bindEvents() {}

  // handleClick(e) {}

  // makeMove(square) {}

}

module.exports = View;
