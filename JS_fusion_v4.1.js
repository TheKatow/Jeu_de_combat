var TableauPlayers = [];

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
    this._rage = 0;
    this.__attaquespe1 = true;
    this.__attaquespe2 = true;

    //fonction d'attaque avec perte PV et vérification mort/vivant
    this.Attaquer = function (Def) {
        console.log("Nouvelle attaque de " + this.nom + " sur " + Def.nom + " !!\n"); // this est l'attaquant et Def le défenseur
        if (this.attaque > Def.defense) {
            Def.vie = Def.vie - 10;
            console.log("%cOuch !!!", "color: green");
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n");
        } else if (this.attaque == Def.defense) {
            Def.vie = Def.vie - 5;
            console.log("%cAie !!!", "color: green");
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n");
        } else {
            this.vie = this.vie - 5;
            console.log("%cBim !!!", "color: green");
            console.log("il reste " + this.vie + " points de vie à " + this.nom + "\n");
        }
        if (this.vie <= 30) {
            Def.vie = Def.vie - 20;
            Def.defense = Def.defense - 25;
            console.log(this.nom + " Utilise sa Super Attaque !!\n");
            console.log("%cKaboom !!!", "color: red");
            console.log("il reste " + Def.defense + " points de Défense à " + Def.nom + "\n");
            console.log("il reste " + Def.vie + " points de vie à " + Def.nom + "\n");
        }
    };
};


//Choisis le nombre de personnage
var nbrJoueurs = prompt("Choississez le nombre de personnages : ");

//génération tableau des personnages

for (let i = 0; i < nbrJoueurs; i++) {
    TableauPlayers.push(new Personnage());
}
console.log(TableauPlayers);

// //génération tableau des vainqueurs
// var TableauWinners = TableauPlayers.slice();



//attaquant et defenseur


// GenererCombattant = function () {
//     Attaquant = Math.floor(Math.random() * TableauPlayers.length);
//     ObjetAttaquant=TableauPlayers[Attaquant];
//     console.log("KAttaquant " + ObjetAttaquant.nom);
//     Defenseur = Math.floor(Math.random() * TableauPlayers.length );
//     ObjetDefenseur=TableauPlayers[Defenseur]
//     console.log("KDefenseur " + ObjetDefenseur.nom);
    
// }

//boucle de combat
function Combat() {
    var Attaquant;
var Defenseur;
var OldAttaquant;

var ObjetAttaquant;
var ObjetDefenseur;

OldAttaquant = -1;

    while (TableauPlayers.length > 1) {
        Attaquant = Math.floor(Math.random() * TableauPlayers.length);
        ObjetAttaquant=TableauPlayers[Attaquant];
       
        Defenseur = Math.floor(Math.random() * TableauPlayers.length );
        ObjetDefenseur=TableauPlayers[Defenseur];

        if ((Attaquant != OldAttaquant) && (Attaquant != Defenseur)) {
            console.log("Attaquant " + ObjetAttaquant.nom);
            console.log("Defenseur " + ObjetDefenseur.nom);
            if (ObjetAttaquant.vie > 0) {
                if (ObjetDefenseur.vie > 0) {
                    console.log(ObjetAttaquant.Attaquer(ObjetDefenseur));

                OldAttaquant=Attaquant;

                } else {
                    console.log("Le personnage " + ObjetDefenseur.nom + " est mort !!");
                    alert("Victoire de " + ObjetAttaquant.nom);
                }
            } else {
                console.log("Le personnage " + ObjetAttaquant.nom + " est mort !!");
                alert("Victoire de " + ObjetDefenseur.nom);
            }
        }
        console.log(TableauPlayers);
    } //celui qui reste à gagner dans le tableau des winners
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
}
//génération de nombre aléatoires entre 20 et 100
function GenAleatoire() {
    return Math.floor(Math.random() * 80) + 20;
}

var btncombat = document.getElementById('btncombat');
btncombat.addEventListener("click", Combat, false);