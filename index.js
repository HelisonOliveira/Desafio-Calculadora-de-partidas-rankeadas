
let numberOfVictories = Math.floor(Math.random() * 150)
console.log("numeros de vitorias " + numberOfVictories);

let numberOfDefeats = generateNumberOfDefeats(numberOfVictories)
console.log("numeros de derrotas " + numberOfDefeats);

let levelCreated = generateLevel(numberOfVictories)
console.log(levelCreated);

let level = levelClassification(levelCreated)
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

function levelClassification(levelCreated) {
    switch (levelCreated) {
        case 10: return "Ferro"
            break;
        case 20: return "Bronze"
            break;
        case 50: return "Prata"
            break;
        case 80: return "Ouro"
            break;
        case 90: return "Diamante"
            break;
        case 100: return "Lendario"
            break;
        case 150: return "Imortal"
            break;
    }
}