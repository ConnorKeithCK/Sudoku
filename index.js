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
let instructions = document.getElementById("instructions");
let game_div = document.getElementById("div_game");
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

        // initialize game board
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
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                game_board.rows[i].cells[x].innerHTML = "";
            }
        }
    }


    // TODO
    solvePuzzle() {
         
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                if (this.boards[i][x] != "") {
                    game_board.rows[i].cells[x].innerHTML = this.solution[i][x];
                } else {
                    game_board.rows[i].cells[x].children[0].value = this.solution[i][x];
                }
            }
        }

        this.compareBoards();

        if (confirm("You took the easy road, would you like to play again?")) {
            this.clearBoard();
            game = new Sudoku();
        } else {
            alert("Thanks for playing!");
        }

    }

    compareBoards() {

        let solved = true;

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
                    if (game_board.rows[x].cells[y].className == "incorrect") {
                        game_board.rows[x].cells[y].className = "";
                        game_board.rows[x].cells[y].children[0].className = "";
                    } 
                } else {
                    game_board.rows[x].cells[y].className = "incorrect";
                    game_board.rows[x].cells[y].children[0].className = "incorrect-input";
                    solved = false;
                }        
            }
        }

        return solved;
    }

}

validate_button.addEventListener("click", function(clickEvent) {

if (game.compareBoards()) {
    if (confirm("You have solved the puzzle, would you like to play again?")) {
        game.clearBoard();
        game = new Sudoku();
        console.log(game.user_board);
    } else {
        alert("Thanks for playing!");
    }
    
} else {
    alert("Review the red squares for mistakes!");
}
    
});

solve_button.addEventListener("click", function(clickEvent) {

game.solvePuzzle();
console.log("You cheater!");

});

play_button.addEventListener("click", function(clickEvent) {

    instructions.classList.add("hidden");
    game_div.classList.remove("hidden");
    validate_button.classList.remove("hidden");
    solve_button.classList.remove("hidden");
    game = new Sudoku();

});
