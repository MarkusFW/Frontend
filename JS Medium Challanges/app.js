
function yoo (array) {
    let unFalse = []
    for (let i = 0; i < array.length; ++i) {
        if (!!array[i] === true) {
            unFalse.push(true)
        }
        else if (!!array[i] === false)
            unFalse.push(false)
    }
    return unFalse
}

console.log(yoo([`banana`, `apple`, 0, ``, 100]))