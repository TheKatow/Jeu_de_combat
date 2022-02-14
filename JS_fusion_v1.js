function Personnage(LaVie, Lattaque, Ladefense) {
    this.NomPersonnage = function () {
        var userValue = "";
        while ((userValue != "") || (userValue != null)) {
            userValue = prompt("Choisissez un nom de personnage : ");
            Personnage.nom = userValue;
            if ((userValue != "") && (userValue != null)) {
                console.log('Nouveau personnage créé : ' + userValue);
                return userValue;
            }
            else {
                alert('Vous devez choisir un nom ');
            };
        };
    };
    this.nom = this.NomPersonnage();
    this.vie = LaVie;
    this.attaque = Lattaque;
    this.defense = Ladefense;
};

//création perso1 et perso2
var perso1 = new Personnage(GenAleatoire(), GenAleatoire(), GenAleatoire());
var perso2 = new Personnage(GenAleatoire(), GenAleatoire(), GenAleatoire());

console.log('Vie du ' + perso1.nom + " : " + perso1.vie);
console.log('Attaque du ' + perso1.nom + " : " + perso1.attaque);
console.log('Defense du ' + perso1.nom + " : " + perso1.defense);

console.log('Vie du ' + perso2.nom + " : " + perso2.vie);
console.log('Attaque du ' + perso2.nom + " : " + perso2.attaque);
console.log('Defense du ' + perso2.nom + " : " + perso2.defense);

//var attaquant et defenseur
var Attaquant = perso1;
var Defenseur = perso2;

//fonction d'attaque avec perte PV et vérification mort/vivant
function Attaquer() {
    console.log("Nouvellez attaque de " + Attaquant.nom + " sur " + Defenseur.nom + " !!\n");
    if (Attaquant.attaque > Defenseur.defense) {
        Defenseur.vie = Defenseur.vie - 10;
        console.log("%cOuch !!!" , "color: green")
        console.log("il reste " + Defenseur.vie + " points de vie à " + Defenseur.nom + "\n")
    } else if (Attaquant.attaque == Defenseur.defense) {
        Defenseur.vie = Defenseur.vie - 5;
        console.log("%CAie !!!" , "color: green")
        console.log("il reste " + Defenseur.vie + " points de vie à " + Defenseur.nom + "\n")
    } else {
        Attaquant.vie = Attaquant.vie - 5;
        console.log("%cBim !!!" , "color: green")
        console.log("il reste " + Attaquant.vie + " points de vie à " + Attaquant.nom + "\n")
    }
    if (Attaquant.vie <= 30) {
        Defenseur.vie = Defenseur.vie - 20;
        Defenseur.defense = Defenseur.defense - 25;
        console.log(Attaquant.nom + " Utilise sa Super Attaque !!\n")
        console.log("%cKaboom !!!" , "color: red")
        console.log("il reste " + Defenseur.defense + " points de Défense à " + Defenseur.nom + "\n")
        console.log("il reste " + Defenseur.vie + " points de vie à " + Defenseur.nom + "\n")
    }
    if (Attaquant.vie <= 0) {
        console.log("Le personnage " + Attaquant.nom + " est mort !!")
        alert("Victoire de " + Defenseur.nom)
    }
    if (Defenseur.vie <= 0) {
        console.log("Le personnage " + Defenseur.nom + " est mort !!")
        alert("Victoire de " + Attaquant.nom)
    }

}

//boucle de combat avec altérnance des combatant Attaquant/Defenseur
function Combat() {
    do {
        if (Attaquant == perso1) {
            Attaquant = perso2;
            Defenseur = perso1;
        } else {
            Attaquant = perso1;
            Defenseur = perso2;
        }
        Attaquer();
    }
    while (perso2.vie > 0 && perso1.vie > 0);
}

//génération de nombre aléatoires entre 20 et 100
function GenAleatoire() {
    return Math.floor(Math.random() * 80) + 20;
}

// //créer des stats aléatoire pour les personnages
// var NewPersonnage = new Personnage(GenAleatoire(), GenAleatoire(), GenAleatoire());

// //créer 2 joueurs
// const nbrJoueurs = 2

// //tableau personnage vide
// var NewPlayer = [0, 0, 0, 0];

// //boucle génération de personnages
// do {

// } while (nbrNewPlayer < nbrJoueurs);

var btncombat = document.getElementById('btncombat');
btncombat.addEventListener("click", Combat, false);