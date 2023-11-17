
let numberOfVictories = Math.floor(Math.random() * 10)
console.log(numberOfVictories);

generateNumberOfDefeats()
function generateNumberOfDefeats(numberOfVictories) {

    if (numberOfVictories <= 10) {
        let numberOfDefeats = Math.floor(Math.random() * numberOfVictories)

        return numberOfDefeats
    }

}

console.log(numberOfDefeats);
