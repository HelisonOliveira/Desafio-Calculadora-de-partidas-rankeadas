
let numberOfVictories = Math.floor(Math.random() * 10)
console.log("numeros de vitorias " + numberOfVictories);

let numberOfDefeats = generateNumberOfDefeats(numberOfVictories)
console.log("numeros de derrotas " + numberOfDefeats);

generateNumberOfDefeats(numberOfVictories)
function generateNumberOfDefeats(numberOfVictories) {

    if (numberOfVictories <= 10) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)
        return numberOfDefeats
    }

}
