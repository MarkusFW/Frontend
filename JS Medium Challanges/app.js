
function yoo (string) {
    let reversedString = ``;
    for (let i = 0; i < string.length; ++i) {
       reversedString = string[i] + reversedString
    }
    return reversedString
}

console.log(yoo(`abc`))