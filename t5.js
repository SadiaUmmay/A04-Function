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
let result = resultReport(100);
console.log(result)