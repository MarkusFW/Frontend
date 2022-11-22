let users = [
  {
    username: `Markus`,
    email: `markus@gmail.com`,
    password: `test123`,
    subscirptionStatus: `VIP`,
    discordId: `Markus FW#0001`,
    lessonsCompleted: [0, 1],
  },
  {
    username: `Allu`,
    email: `Allu@gmail.com`,
    password: `allu123`,
    subscirptionStatus: `VIP`,
    discordId: `Allu FW#0002`,
    lessonsCompleted: [0, 1, 2, 3],
  },
];




function register(potet) {
    users.push(potet)
}

register({
  username: `potet`,
  email: `potet@gmail.com`,
  password: `potet123`,
  subscirptionStatus: `VIP`,
  discordId: `Potet PP#0001`,
  lessonsCompleted: [0, 1],
});

console.log(users)