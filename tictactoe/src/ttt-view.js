const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    // let grid = document.getElementById("grid")
    // create 3x3 grid, 9 li elements needed
    for(let i=0; i < 3; i++){
      for (let j=0; j < 3; j++) {
        let pos = [i, j]
        let newLi = document.createElement("li")
        newLi.dataset.indexNumber = pos;
        this.el.appendChild(newLi);
      }
    }
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick)

  }

  handleClick(e) {
    console.log(e.target.dataset.indexNumber);
    
    e.stopPropagation();
    let clickedLi = Array.from(e.target.data-index-number)
    alert("reached handleClick!")
    this.game.playMove(clickedLi);
    
  }


  // makeMove(square) {}

}

module.exports = View;
