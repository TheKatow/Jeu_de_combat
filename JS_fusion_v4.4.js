//Choisis le nombre de personnage
var nbrJoueurs = prompt("Choississez le nombre de personnages : ");

//génération tableau des personnages
var TableauPlayers = [];
for (let i = 0; i < nbrJoueurs; i++) {
    TableauPlayers.push(new Personnage)
}

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
            }
        }
    }
    this.nom = NomPersonnage();
    this.vie = GenVieAleatoire();
    this.attaque = GenAttaqueAleatoire();
    this.defense = GenVDefenseAleatoire();
    this.rage = 0
    this.attaquespe1 = true;
    this.attaquespe2 = true;
}
console.log(TableauPlayers)

//génération de Point de vie aléatoires entre 50 et 100
function GenVieAleatoire() {
    return Math.floor(Math.random() * 50) + 50;
}
// //génération de points d'attaque aléatoires entre 40 et 100
function GenAttaqueAleatoire() {
    return Math.floor(Math.random() * 60) + 40;
}
//génération de points de défense aléatoires entre 30 et 100
function GenVDefenseAleatoire() {
    return Math.floor(Math.random() * 70) + 30;
};

//attaquant et _defenseur
var Attaquant;
var Defenseur;
var Oldattaquant = 1000
GenererCombattant = function () {
    Attaquant = Math.floor(Math.random() * TableauPlayers.length);
    Defenseur = Math.floor(Math.random() * TableauPlayers.length);
}
//boucle de combat avec altérnance des combatant
Combat = function () {
    while (TableauPlayers.length > 1) {
        GenererCombattant()
        if ((Attaquant != Oldattaquant) && (Attaquant != Defenseur)) {
            if ((TableauPlayers[Attaquant].vie > 0) && (TableauPlayers[Defenseur].vie > 0)) {
                Attaquer()
                Oldattaquant = Attaquant
                if (TableauPlayers[Attaquant].vie <= 0) {
                    console.log("%cLe personnage " + TableauPlayers[Attaquant].nom + " est mort !!", "color : yellow")
                    TableauPlayers.splice(Attaquant, 1)
                    console.log(TableauPlayers);
                }
                if (TableauPlayers[Defenseur].vie <= 0) {
                    console.log("%cLe personnage " + TableauPlayers[Defenseur].nom + " est mort !!", "color : yellow")
                    TableauPlayers.splice(Defenseur, 1)
                    console.log(TableauPlayers);
                }
                // if (TableauPlayers.length == 1) {
                //     alert("Le personnage " + TableauPlayers[0].nom + " à gagné !!")
                // }
            }
        }
    } alert("Le personnage " + TableauPlayers[0].nom + " à gagné !!")
}
    
//fonction d'attaque avec perte PV et vérification mort/vivant
Attaquer = function () {
    //attaque spéciale 1 redonne de la vie quand en dessous de 30 pv
    console.log("Nouvelle attaque de " + TableauPlayers[Attaquant].nom + " sur " + TableauPlayers[Defenseur].nom + " !!\n");
    if ((TableauPlayers[Attaquant].vie <= 30) && (TableauPlayers[Attaquant].rage >= 20) && (TableauPlayers[Attaquant].attaquespe1 == true)) {
        TableauPlayers[Attaquant].vie = (TableauPlayers[Attaquant].vie + 30);
        TableauPlayers[Attaquant].attaquespe1 = false;
        TableauPlayers[Attaquant].rage = 0;
        console.log(TableauPlayers[Attaquant].nom + " Utilise sa Super Attaque !!\n");
        console.log("Tada !!!\n");
        console.log(TableauPlayers[Attaquant].nom + " récupére 30 points de vie\n");

    }
    //Attaque spécial 2 utilisable tout les 20 points de rage
    else if ((TableauPlayers[Attaquant].rage >= 20) && (TableauPlayers[Attaquant].attaquespe2 == true)) {
        TableauPlayers[Defenseur].vie = (TableauPlayers[Defenseur].vie - TableauPlayers[Attaquant].attaque);
        TableauPlayers[Attaquant].rage = 0;
        console.log(TableauPlayers[Attaquant].nom + " Utilise sa Méga Attaque !!\n");
        console.log("Kaboom !!!\n");
        console.log("%cil reste " + TableauPlayers[Defenseur].vie + " points de vie à " + TableauPlayers[Defenseur].nom + "\n", "color : green");

    }
    //Attaque normal attaque>defense
    else if (TableauPlayers[Attaquant].attaque > TableauPlayers[Defenseur].defense) {
        TableauPlayers[Defenseur].vie = (TableauPlayers[Defenseur].vie - 10);
        TableauPlayers[Defenseur].rage = (TableauPlayers[Defenseur].rage + 10);
        console.log("Ouch !!!\n");
        console.log("%cil reste " + TableauPlayers[Defenseur].vie + " points de vie à " + TableauPlayers[Defenseur].nom + "\n", "color : green");
        console.log(TableauPlayers[Defenseur].nom + " posséde " + TableauPlayers[Defenseur].rage + "points rage\n");
    }
    //Attaque normal attaque=defense
    else if (TableauPlayers[Attaquant].attaque == TableauPlayers[Defenseur].defense) {
        TableauPlayers[Defenseur].vie = (TableauPlayers[Defenseur].vie - 5);
        TableauPlayers[Defenseur].rage = (TableauPlayers[Defenseur].rage + 5);
        console.log("Aie !!!\n");
        console.log("%cil reste " + TableauPlayers[Defenseur].vie + " points de vie à " + TableauPlayers[Defenseur].nom + "\n", "color : green");
        console.log(TableauPlayers[Defenseur].nom + " posséde " + TableauPlayers[Defenseur].rage + "points rage\n");
    }     //Attaque normal attaque<defense
    else {
        TableauPlayers[Attaquant].vie = (TableauPlayers[Attaquant].vie - 5);
        TableauPlayers[Attaquant].rage = (TableauPlayers[Attaquant].rage + 5);
        console.log("Bim !!!\n");
        console.log("%cil reste " + TableauPlayers[Attaquant].vie + " points de vie à " + TableauPlayers[Attaquant].nom + "\n", "color : green");
        console.log(TableauPlayers[Attaquant].nom + " posséde " + TableauPlayers[Attaquant].rage + "points rage\n");
    }
}

var btncombat = document.getElementById('btncombat');
btncombat.addEventListener("click", Combat, false);