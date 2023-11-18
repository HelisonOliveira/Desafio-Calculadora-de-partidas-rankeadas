
let numberOfVictories = Math.floor(Math.random() * 150)
console.log("numeros de vitorias " + numberOfVictories);

let numberOfDefeats = generateNumberOfDefeats(numberOfVictories)
console.log("numeros de derrotas " + numberOfDefeats);


function generateNumberOfDefeats(numberOfVictories) {
    let numberOfDefeats = 0
    if (numberOfVictories <= 10) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }else if (numberOfVictories <= 20) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }else if (numberOfVictories <= 50) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }else if (numberOfVictories <= 80) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }else if (numberOfVictories <= 90) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }else if (numberOfVictories <= 100) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    } else if (numberOfVictories >= 101) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }
}