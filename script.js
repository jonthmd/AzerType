const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score = 0

let choix = prompt("Quelle liste choisis-tu : 'mots' ou 'phrases' ?")
while (choix !== "mots" && choix !== "phrases") {
     choix = prompt("Quelle liste choisis-tu : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {

        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])

        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " / " + listeMots.length + " !")

} else {
    for (let i = 0; i < listePhrases.length; i++) {

        let phraseUilisateur = prompt("Entrez la phrase : " + listePhrases[i])

        if (phraseUilisateur === listePhrases[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " / " + listePhrases.length + " !")
}


