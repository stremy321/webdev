const readlineSync = require('readline-sync');

let name = readlineSync.question('Welcome, what is your name?')

let inventory = {
    armor: 100,
    weapons: 50
}

let player = {
    health: 100,
    power: 20
}

let monster = {
    health: 100,
    power: 20

    



}
const run = () => {
    let playerrun = math.floor(math.random() * 5)
    if (playerrun <= 100) {
        console.log(playerrun)
    }else {
        console.log(Monster)
    }


}

const attack = () => {
    let playerAttack = math.floor(Math.random() * player.power)
    if (playerAttack >= player.power) {
         console.log(Won)
    }else {
         console.log(Dead)
}

const isGameOver = (health) => {
    return health <= 0;
}

const printToScreen = () => {
    document.getElementById('monster-health').innerText = monster.health;

    document.getElementById('player-health').innerText = player.health;
}


    let action = readlineSync.question("Hello  please press w to leave,  to check your inventory, press esc to end game")
    
    if (action === "w") {
        return leave()
    } else if (action === "print") {
    console.log(inventory)
    } else if (action === "x"){
       
    }
  }