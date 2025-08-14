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
