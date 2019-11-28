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
let novice_button = document.getElementById("button-novice");
let intermediate_button = document.getElementById("button-intermediate");
let expert_button = document.getElementById("button-expert");
let difficulty_selection = document.getElementById("div_selection");
let game;



class Sudoku {

    novice_boards = 
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

    // 
    intermediate_boards = [
        ["2", "", "3", "", "", "4", "", "8", ""],
        ["", "7", "", "3", "", "", "6", "", ""],
        ["8", "", "", "", "5", "1", "", "", ""],
        ["4", "", "9", "", "", "", "", "3", ""],
        ["", "", "1", "", "", "", "8", "", ""],
        ["", "8", "", "", "", "", "4", "", "6"],
        ["", "", "", "8", "1", "", "", "", "2"],
        ["", "", "5", "", "", "7", "", "6", ""],
        ["", "3", "", "9", "", "", "5", "", "4"]
    ]

    expert_boards = [
        ["", "", "", "2", "", "", "", "", "3"],
        ["7", "4", "", "", "3", "", "9", "8", ""],
        ["", "", "2", "9", "", "", "", "", "6"],
        ["", "6", "", "", "", "", "4", "", "7"],
        ["", "", "", "", "6", "", "", "", ""],
        ["5", "", "8", "", "", "", "", "3", ""],
        ["2", "", "", "", "", "6", "3", "", ""],
        ["", "5", "3", "", "7", "", "", "6", "1"],
        ["9", "", "", "", "", "5", "", "", ""]
    ]

   easy_solutions = 
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

    // 213674985574389621896251743459168237361742859782593416647815392925437168138926574
    intermediate_solutions = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    // 689247513745631982132958746361892457497563128528714639274186395853479261916325874
    expert_solutions = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
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
    

    board_difficulty;

    constructor(difficulty) {
        this.board_difficulty = difficulty;
        // initialize game board
        if (this.board_difficulty == "novice") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.novice_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.novice_boards[i][x];
                    }
                }
            }
        } else if (this.board_difficulty == "intermediate") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.intermediate_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.intermediate_boards[i][x];
                    }
                }
            }
        } else {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.expert_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.expert_boards[i][x];
                    }
                }
            }
        }
    }

    clearBoard() {
        this.user_board.length = 0;
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                game_board.rows[i].cells[x].innerHTML = "<input type = 'text' maxlength = 1 autocomplete='off'>";
            }
        }
    }


    solvePuzzle() {
         
        if (this.board_difficulty == "novice") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.novice_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.easy_solutions[i][x];
                    } else {
                        game_board.rows[i].cells[x].children[0].value = this.easy_solutions[i][x];
                    }
                }
            }
        } else if (this.board_difficulty == "intermediate") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.intermediate_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.intermediate_solutions[i][x];
                    } else {
                        game_board.rows[i].cells[x].children[0].value = this.intermediate_solutions[i][x];
                    }
                }
            }
        } else {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.expert_boards[i][x] != "") {
                        game_board.rows[i].cells[x].innerHTML = this.expert_solutions[i][x];
                    } else {
                        game_board.rows[i].cells[x].children[0].value = this.expert_solutions[i][x];
                    }
                }
            }
        }

        this.compare_boards();

        if (confirm("You took the easy road, would you like to play again?")) {
            this.clearBoard();
            game = new Sudoku();
        } else {
            alert("Thanks for playing!");
        }

    }

    compare_boards() {

        let solved = true;

        if (this.board_difficulty == "novice") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.novice_boards[i][x] != "") {
                        this.user_board[i][x] = game_board.rows[i].cells[x].innerHTML;
                    } else {
                        this.user_board[i][x] = game_board.rows[i].cells[x].children[0].value;
                    }
                }
            }
        
        
            for (var x = 0; x < this.user_board.length; x++) {
                for (var y = 0; y < this.user_board[x].length; y++) {
                    if (this.user_board[x][y] == this.easy_solutions[x][y]) {
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
        } else if (this.board_difficulty == "intermediate") {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.intermediate_boards[i][x] != "") {
                        this.user_board[i][x] = game_board.rows[i].cells[x].innerHTML;
                    } else {
                        this.user_board[i][x] = game_board.rows[i].cells[x].children[0].value;
                    }
                }
            }
        
        
            for (var x = 0; x < this.user_board.length; x++) {
                for (var y = 0; y < this.user_board[x].length; y++) {
                    if (this.user_board[x][y] == this.intermediate_solutions[x][y]) {
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
        } else {
            for (var i = 0; i < game_board.rows.length; i++) {
                for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                    if (this.expert_boards[i][x] != "") {
                        this.user_board[i][x] = game_board.rows[i].cells[x].innerHTML;
                    } else {
                        this.user_board[i][x] = game_board.rows[i].cells[x].children[0].value;
                    }
                }
            }
        
        
            for (var x = 0; x < this.user_board.length; x++) {
                for (var y = 0; y < this.user_board[x].length; y++) {
                    if (this.user_board[x][y] == this.expert_solutions[x][y]) {
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
        }

        return solved;
    }

}

validate_button.addEventListener("click", function(clickEvent) {

if (game.compare_boards()) {
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


    difficulty_selection.classList.remove("hidden");
    instructions.classList.add("hidden");

});

novice_button.addEventListener("click", function(clickEvent) {

    difficulty_selection.classList.add("hidden");
    game_div.classList.remove("hidden");
    validate_button.classList.remove("hidden");
    solve_button.classList.remove("hidden");
    game = new Sudoku("novice");

});

intermediate_button.addEventListener("click", function(clickEvent) {

    difficulty_selection.classList.add("hidden");
    game_div.classList.remove("hidden");
    validate_button.classList.remove("hidden");
    solve_button.classList.remove("hidden");
    game = new Sudoku("intermediate");

});

expert_button.addEventListener("click", function(clickEvent) {

    difficulty_selection.classList.add("hidden");
    game_div.classList.remove("hidden");
    validate_button.classList.remove("hidden");
    solve_button.classList.remove("hidden");
    game = new Sudoku("expert");

});
