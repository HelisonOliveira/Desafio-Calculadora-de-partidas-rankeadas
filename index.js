
let numberOfVictories = Math.floor(Math.random() * 150)
console.log("numeros de vitorias " + numberOfVictories);

let numberOfDefeats = generateNumberOfDefeats(numberOfVictories)
console.log("numeros de derrotas " + numberOfDefeats);

let level = generateLevel(numberOfVictories)
console.log(level);

function generateNumberOfDefeats(numberOfVictories) {
    let numberOfDefeats = 0
    if (numberOfVictories <= 10) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories <= 20) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories <= 50) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories <= 80) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories <= 90) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories <= 100) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories >= 101) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }
}

function generateLevel(numberOfVictories) {
    let level = 0
    if (numberOfVictories <= 10) {
        let level = 10
        return level
    } else if (numberOfVictories <= 20) {
        let level = 20
        return level
    } else if (numberOfVictories <= 50) {
        let level = 50
        return level
    } else if (numberOfVictories <= 80) {
        let level = 80
        return level
    } else if (numberOfVictories <= 90) {
        let level = 90
        return level
    } else if (numberOfVictories <= 100) {
        let level = 100
        return level
    } else if (numberOfVictories >= 101) {
        let level = 150
        return level
    }
}
