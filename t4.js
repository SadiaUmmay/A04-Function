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
result = isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]);
console.log(result)