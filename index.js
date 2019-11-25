/*
TODO:
- Allow user to select difficulty
- Generate board dynamically
- API request for board?
- CSS
*/


let game_board = document.getElementById("board");
let play_button = document.getElementById("button-play");
let validate_button = document.getElementById("button-validate");
let solve_button = document.getElementById("button-solve");
let inputs = game_board.getElementsByTagName("input");
let game;



class Sudoku {

    boards = 
    [
        ["","","9","","","","4","",""],
        ["","","","","6","4","","5",""],
        ["","","2","","","","9","6","1"],
        ["6","1","5","7","","2","8","",""],
        ["","2","4","8","","6","7","1",""],
        ["","","8","5","","9","6","2","4"],
        ["2","5","1","","","","","",""],
        ["","7","","6","8","","","",""],
        ["","","6","","","","1","",""]
    ]

   solution = 
    [
    ["3","6","9","1","2","5","4","7","8"],
    ["1","8","7","9","6","4","2","5","3"],
    ["5","4","2","3","7","8","9","6","1"],
    ["6","1","5","7","4","2","8","3","9"],            
    ["9","2","4","8","3","6","7","1","5"],
    ["7","3","8","5","1","9","6","2","4"],
    ["2","5","1","4","9","7","3","8","6"],
    ["4","7","3","6","8","1","5","9","2"],
    ["8","9","6","2","5","3","1","4","7"]
    ]

    user_board = [[],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []]
    
    constructor() {
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                if (this.boards[i][x] != "") {
                    game_board.rows[i].cells[x].innerHTML = this.boards[i][x];
                }
            }
        }
    }

    clearBoard() {
        this.user_board.length = 0;
    }

    solvePuzzle() {
         
      for (var r = 0; r < game_board.rows.length; r++) {
          for (var c = 0; c < game_board.rows[r].cells.length; c++) {
              if (this.boards[r][c] != "") {
                    this.user_board[r][c] = game_board.rows[r].cells[c].innerHTML;
              } else {
                    this.user_board[r][c] = game_board.rows[r].cells[c].children[0].value;
              }
          }
      }

    }

    compareBoards() {

        // Gather all user inputs to the user_board array
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                if (this.boards[i][x] != "") {
                    this.user_board[i][x] = game_board.rows[i].cells[x].innerHTML;
                } else {
                    this.user_board[i][x] = game_board.rows[i].cells[x].children[0].value;
                }
            }
        }
    
    
        for (var x = 0; x < this.user_board.length; x++) {
            for (var y = 0; y < this.user_board[x].length; y++) {
                if (this.user_board[x][y] == this.solution[x][y]) {
                    if (confirm("You have won, would you like to play again?")) {
                        this.clearBoard();
                        return true;
                    } else {
                        // they won, but no longer want to play
                    }
                    
                } else {
                    // Change color of wrong cells
                    return false;
                }        
            }
        }
    }
}

validate_button.addEventListener("click", function(clickEvent) {

if (game.compareBoards()) {
    alert("You have won!");
    
} else {
    alert("Incorrect!");
}
    
});

solve_button.addEventListener("click", function(clickEvent) {

game.solvePuzzle();
console.log("You cheater!");

});

play_button.addEventListener("click", function(clickEvent) {

    game = new Sudoku();

});
