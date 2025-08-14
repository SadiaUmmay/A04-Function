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

// Problem-04: Same Same But Different

function isSame(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return "Invalid";
    }
    if (array1.length !== array2.length)
        return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
}

// Problem-05: Exam Result Report Generator

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let total = 0;
    let pass = 0;
    let fail = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) pass++;
        else fail++;
    }
    let finalScore = marks.length === 0 ? 0 : Math.round(total / marks.length);
    return { finalScore: finalScore, pass: pass, fail: fail };
}