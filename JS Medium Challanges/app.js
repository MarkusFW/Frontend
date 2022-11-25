
function yoo (array) {
    return array.map (elem => !!elem ? true : false)
}

console.log(yoo([`banana`, `apple`, 0, ``, 100]))