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
let inputs = game_board.getElementsByTagName("input");

let boards = 
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

let solution = 
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


class Sudoku {
    
    constructor() {
        for (var i = 0; i < game_board.rows.length; i++) {
            for (var x = 0; x < game_board.rows[i].cells.length; x++) {
                if (boards[i][x] != "") {
                    game_board.rows[i].cells[x].innerHTML = boards[i][x];
                }
            }
        }
    }
}

validate_button.addEventListener("click", function(clickEvent) {

    var user_board = [[],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []]


    for (var i = 0; i < game_board.rows.length; i++) {
        for (var x = 0; x < game_board.rows[i].cells.length; x++) {
            if (boards[i][x] != "") {
                user_board[i][x] = game_board.rows[i].cells[x].innerHTML;
            } else {
                user_board[i][x] = game_board.rows[i].cells[x].children[0].value;
            }
        }
    }

    console.log(user_board);
    console.log(solution);

    // TODO: Iterate through each cell and highlight/modify color of those incorrect instead of checking for full solution and make sure board is full before allowing validation
    if (user_board === solution) {
        alert("You won!");
    }

});

let game = new Sudoku();