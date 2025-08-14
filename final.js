// Problem-01 : Train TT's Fine Calculator

function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0){
        return 'Invalid';
    }
    let fine = fare + fare * (20/100) + 30;
    return fine;
}

// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return 'Invalid';
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
            
        }
    }
    return result.toUpperCase();
}


// Problem-03 : FIFA Best Team Award 

function  bestTeam( player1, player2 ) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }
    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;
    if (score1 < score2) return player1.name;
    if (score2 < score1) return player2.name;
    return "Tie";
}