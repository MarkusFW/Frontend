// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)


let grades = [`A+`, `A`, `FAIL`]

let goodGrades = grades.filter(element => element !== `FAIL` )
console.log(goodGrades)



let grades1 = [`FAIL`, `FAIL`, `B`]

let newArr2 = grades1.filter(element => element < `FAIL` )
console.log(newArr2)


let grades2 = [`FAIL`]

let newArr3 = grades2.filter(element => element < `FAIL` )
console.log(newArr3)