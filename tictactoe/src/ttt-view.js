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
        newLi.dataset.indexNumber = JSON.stringify(pos);
        this.el.appendChild(newLi);
      }
    }
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick.bind(this))
  }

  handleClick(e) {
    
    e.stopPropagation();
    let clickedLi = JSON.parse(e.target.dataset.indexNumber)
    this.game.playMove(clickedLi);
    this.makeMove(clickedLi)
  }

  makeMove(square) {
    //square =[0,0]
    let currentP = this.game.currentPlayer //a mark
    let clicked = document.querySelector(`[data-index-number= "[${square}]"]`)
    clicked.innerHTML = currentP;
    clicked.className = "placed"
  }

}

module.exports = View;
