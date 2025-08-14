// Problem-01 : Train TT's Fine Calculator

function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0){
        return 'Invalid';
    }
    let fine = fare + fare * (20/100) + 30;
    return fine;
}
// console.log(totalFine(-35));

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
// console.log(onlyCharacter("  h e llo wor   ld" ))