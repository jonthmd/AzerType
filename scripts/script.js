function afficherResultat(score, nbTotalMots) {
    let message = `${score} / ${nbTotalMots}`
    let spanZoneScore = document.querySelector(".zoneScore Span")
    spanZoneScore.innerText = message
}

function choisirPhrasesOuMots() {
    let choix = prompt("Quelle liste choisis-tu : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Quelle liste choisis-tu : 'mots' ou 'phrases' ?")
    }
    return choix
}

function lancerBoucleDeJeu(liste) {
    let score = 0;
    for (let i = 0; i < liste.length; i++) {

        let motUtilisateur = prompt("Entrez le mot : " + liste[i])
        if (motUtilisateur === liste[i]) {
            score++
        }
    }
    return score
}

function lancerJeu() {
    let score = 0
    let nbTotalMots = 0
    let choix = choisirPhrasesOuMots()

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbTotalMots = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbTotalMots = listePhrases.length
    }

    afficherResultat(score, nbTotalMots)
}


let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)

let divZoneProposition = document.querySelector(".zoneProposition")
console.log(divZoneProposition)

let spanZoneScore = document.querySelector(".zoneScore Span")
console.log(spanZoneScore)

let listeBtnRadio = document.querySelectorAll(".zoneOptions input")
console.log(listeBtnRadio)
for(let i = 0; i < listeBtnRadio.length; i++) {
    console.log(listeBtnRadio[i])
}