//Choisis le nombre de personnage
var nbrJoueurs = prompt("Choississez le nombre de personnages : ");

//génération tableau des personnages
let TableauPlayers = [];
var nbrPlayer = 0
while (nbrPlayer < nbrJoueurs) {
    TableauPlayers.push(new Personnage)
    nbrPlayer++
}

// Choix du nom des personnages
function Personnage() {
    NomPersonnage = function () {
        var userValue = "";
        while ((userValue != "") || (userValue != null)) {
            userValue = prompt("Choisissez un nom de personnage : ");
            if ((userValue != "") && (userValue != null)) {
                this.nom = userValue;
                console.log('Nouveau personnage créé : ' + userValue);
                return userValue;
            } else {
                alert('Vous devez choisir un nom ');
            };
        };
    };
    this.nom = NomPersonnage();
    this.vie = GenVieAleatoire();
    this.attaque = GenAttaqueAleatoire();
    this.defense = GenVDefenseAleatoire();

    //fonction d'attaque avec perte PV et vérification mort/vivant
    this.Attaquer = function (Def) {
        console.log("Nouvelle attaque de " + this.nom + " sur " + Def.nom + " !!\n"); // this est l'attaquant et Def le défenseur
        if (this.attaque > Def.defense) {
            Def.vie = Def.vie - 10;
            console.log("%cOuch !!!", "color: green")
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n")
        } else if (this.attaque == Def.defense) {
            Def.vie = Def.vie - 5;
            console.log("%cAie !!!", "color: green")
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n")
        } else {
            this.vie = this.vie - 5;
            console.log("%cBim !!!", "color: green")
            console.log("il reste " + this.vie + " points de vie à " + this.nom + "\n")
        }
        if (this.vie <= 30) {
            Def.vie = Def.vie - 20;
            Def.defense = Def.defense - 25;
            console.log(this.nom + " Utilise sa Super Attaque !!\n")
            console.log("%cKaboom !!!", "color: red")
            console.log("il reste " + Def.defense + " points de Défense à " + Def.nom + "\n")
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n")
        }
        else if (this.vie <= 0) {
            console.log("Le personnage " + this.nom + " est mort !!")
            alert("Victoire de " + Def.nom)
        }
        if (Def.vie <= 0) {
            console.log("Le personnage " + Def.nom + " est mort !!")
            alert("Victoire de " + this.nom)
        }
    }
}
console.log(TableauPlayers)

//boucle de combat
function Combat() {
    Attaquant = GenAttaquantAleatoire();
    Defenseur = GenDefenseurAleatoire();
    console.log("Attaquant " + TableauPlayers[Attaquant].nom);
    console.log("Defenseur " + TableauPlayers[Defenseur].nom);
    console.log(TableauPlayers[Attaquant].Attaquer(TableauPlayers[Defenseur]));
}

//génération de Point de vie aléatoires entre 50 et 100
function GenVieAleatoire() {
    return Math.floor(Math.random() * 50) + 50;
}

//génération de points d'attaque aléatoires entre 40 et 100
function GenAttaqueAleatoire() {
    return Math.floor(Math.random() * 60) + 40;
}

//génération de points de défense aléatoires entre 30 et 100
function GenVDefenseAleatoire() {
    return Math.floor(Math.random() * 70) + 30;
};

//génération de nombre aléatoires entre 20 et 100
function GenAleatoire() {
    return Math.floor(Math.random() * 80) + 20;
}

//attaquant et defenseur
var Attaquant ; 
var Defenseur ; 

//choix de l'attaquant aléatoires entre 1 et nbrJoueurs
function GenAttaquantAleatoire() {
    var Attaquant = Math.floor(Math.random() * nbrJoueurs);
    return Attaquant;
}

//choix du défenseur aléatoires différent de l'attaquant
function GenDefenseurAleatoire() {
    do {
        var Defenseur = Math.floor(Math.random() * nbrJoueurs);
    } while (Defenseur == Attaquant);
    return Defenseur;
}

var btncombat = document.getElementById('btncombat');
btncombat.addEventListener("click", Combat, false);