

async function firstSixIncomplete (usi) {
    const promise = await fetch `https://jsonplaceholder.typicode.com/todos`
    const result = await promise.json()
    
    let incompleteTasks = result.filter(elem => !elem.completed).slice(0, usi)

    console.log(incompleteTasks)
}


firstSixIncomplete(6)