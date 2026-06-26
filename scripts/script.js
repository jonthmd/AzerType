function afficherResultat(score, nbTotalMots) {
    console.log("Votre score est de " + score + " / " + nbTotalMots + " !")
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