const ticTacToe = (xName,oName) => {
    const X = "X";
    const O = "O";
    
    const players = {
        X: xName,
        O: oName
    };

    let currentPlayer = X;
    const nextPlayer = {
        X: O,
        O: X,
    }

    const board = [
        "ongoing", 
        "","","",
        "","","",
        "","","",
    ];

    const isValidMove = (move) => {
        return (1 <= move && move <= 9) && board[move] === "";
    }

    const computeStatus = () => {
        let result = "ongoing";

        const winningCombos = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            //columns
            [1,4,7],
            [2,5,8],
            [3,6,9],
            //Diagonals
            [1,5,9],
            [3,5,7]
        ]

        winningCombos.forEach(([i1,i2,i3]) => {
            if(board[i1] === board[i2] && 
                board[i2] === board[i3] &&
                board[i3] === currentPlayer 
                ) {
                    return `win-${currentPlayer}`;
                }
        });

        let boardFilled =  false;
        for(let i=1;i<=9;i++){
            if(board[i] !== ""){
                boardFilled = true;
            }
        }

        if(boardFilled)
            return "draw";

        return "ongoing";
    }

    return (player,move) => {
        if(player != currentPlayer){
            return [false, `Not your turn. It's ${currentPlayer}'s turn.`]
        }

        if(!isValidMove(move)){
            return [false, "invalid move, try again"]
        }

        board[move] = currentPlayer;
        board[0] = computeStatus();
        currentPlayer = nextPlayer[currentPlayer];

        return [true, board];
    };

};

module.exports = {ticTacToe};