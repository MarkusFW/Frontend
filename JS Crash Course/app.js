
let users = [{
    username: `Markus`,
    email: `markus@gmail.com`,
    password: `test123`, 
    subscirptionStatus: `VIP`,
    discordId: `Markus FW#0001`,
    lessonsCompleted: [0, 1]
},  
{
    username: `Allu`,
    email: `Allu@gmail.com`,
    password: `allu123`, 
    subscirptionStatus: `VIP`,
    discordId: `Allu FW#0002`,
    lessonsCompleted: [0, 1, 2 , 3]
}]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        
        if (users[i].email === email) {
            console.log(email, password)
            if (users[i].password === password) {
                console.log(`Log the user in - the details are correct`)
            }
        }
    }
}

login(`Allu@gmail.com`, `allu123`)