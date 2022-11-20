let cash = 100
let price = 200
let difference = cash - price

if (cash > price) {
    console.log (`you paid extra , here is your ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact price, have a nice day!")
}
else {
    console.log (`you dont have enough cash , you still owe ${difference * 1} dollars`)
}