const {ticTacToe} = require("./tic-tac-toe");

const play = ticTacToe("abc", "xyz");

const printBoard = (board) => {
    console.log("========");
    for(let i=0;i<3;i++){
        for(let j=1;j<=3;j++){
            process.stdout.write((`${board[3 * i + j]  + " "}`) || " _ ")
        }
        process.stdout.write("\n");

    }
    console.log("========");
}

let result, boardOrMessage;

[result, boardOrMessage] = play("X",1);

if(result){
    printBoard(boardOrMessage);
}else{
    console.log(boardOrMessage);

}



[result, boardOrMessage] = play("O",5);


if(result){
    printBoard(boardOrMessage);
}else{
    console.log(boardOrMessage);

}


[result, boardOrMessage] = play("X",2);


if(result){
    printBoard(boardOrMessage);
}else{
    console.log(boardOrMessage);

}


[result, boardOrMessage] = play("O",6);


if(result){
    printBoard(boardOrMessage);
}else{
    console.log(boardOrMessage);

}


[result, boardOrMessage] = play("X",3);


if(result){
    printBoard(boardOrMessage);
}else{
    console.log(boardOrMessage);

}