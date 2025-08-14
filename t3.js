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
const result = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France")
    console.log(result)