//créer 2 joueurs
const nbrJoueurs = 3

//génération tableau des personnages
var TableauPlayers = [];
for (let i = 0; i < nbrJoueurs; i++) {
    TableauPlayers.push(new Personnage)
}

function Personnage() {
    NomPersonnage = function () {
        var userValue = "";
        while ((userValue != "") || (userValue != null)) {
            userValue = prompt("Choisissez un _nom de personnage : ");
            if ((userValue != "") && (userValue != null)) {
                this._nom = userValue;
                console.log('Nouveau personnage créé : ' + userValue);
                return userValue;
            } else {
                alert('Vous devez choisir un _nom ');
            }
        }
    }
    this.__nom = NomPersonnage();
    this.__vie = GenVieAleatoire();
    this.__attaque = GenAttaqueAleatoire();
    this.__defense = GenVDefenseAleatoire();
    this._rage = 0
    this.__attaquespe1 = true;
    this.__attaquespe2 = true;
}
console.log(TableauPlayers)

//génération de Point de _vie aléatoires entre 50 et 100
function GenVieAleatoire() {
    return Math.floor(Math.random() * 50) + 50;
}
// //génération de points d'_attaque aléatoires entre 40 et 100
function GenAttaqueAleatoire() {
    return Math.floor(Math.random() * 60) + 40;
}
//génération de points de défense aléatoires entre 30 et 100
function GenVDefenseAleatoire() {
    return Math.floor(Math.random() * 70) + 30;
};

//création perso1 et perso2
// var perso1 = new Personnage(GenAleatoire(), GenAleatoire(), GenAleatoire());
// var perso2 = new Personnage(GenAleatoire(), GenAleatoire(), GenAleatoire());

// console.log('Vie du ' + perso1._nom + " : " + perso1._vie);
// console.log('Attaque du ' + perso1._nom + " : " + perso1._attaque);
// console.log('Defense du ' + perso1._nom + " : " + perso1._defense);

// console.log('Vie du ' + perso2._nom + " : " + perso2._vie);
// console.log('Attaque du ' + perso2._nom + " : " + perso2._attaque);
// console.log('Defense du ' + perso2._nom + " : " + perso2._defense);


//attaquant et _defenseur
var Attaquant;
var Defenseur;
var OldAttaquantvar;
GenererCombattant = function () {
    Attaquant = Math.floor(Math.random() * TableauPlayers.length - 1);
    Defenseur = Math.floor(Math.random() * TableauPlayers.length - 1);
    OldAttaquant = -1;
}

//boucle de combat avec altérnance des combatant Attaquant/Defenseur
function Combat() {
    while (TableauPlayers.length > 1) {
        GenererCombattant()
        if (Attaquant != OldAttaquant) {
            if (Attaquant != Defenseur) {
                if (TableauPlayers[Attaquant]._vie > 0) {
                    if (TableauPlayers[Defenseur]._vie > 0) {
                        Attaquer()
                        GenererCombattant()
                    } else {
                        console.log("Le personnage " + TableauPlayers[Defenseur]._nom + " est mort !!")
                        alert("Victoire de " + TableauPlayers[Attaquant]._nom)
                        GenererCombattant()
                    }
                } else {
                    console.log("Le personnage " + TableauPlayers[Attaquant]._nom + " est mort !!")
                    alert("Victoire de " + TableauPlayers[Defenseur]._nom)
                    GenererCombattant()
                }
            }
        }
    }
}


    //fonction d'_attaque avec perte PV et vérification mort/vivant
    function Attaquer() {
        //attaque spéciale 1 redonne de la vie quand en dessous de 30 pv
        console.log("Nouvellez _attaque de " + Attaquant._nom + " sur " + Defenseur._nom + " !!\n");
        if (Attaquant.__vie <= 30 && Attaquant._rage >= 20 && Attaquant.__attaquespe1 == true) {
            Attaquant.__vie = Attaquant.__vie + 30;
            Attaquant.__attaquespe1 = false
            console.log(Attaquant._nom + " Utilise sa Super Attaque !!\n")
            console.log("Kaboom !!!\n")
            console.log("il reste " + Defenseur._defense + " points de Défense à " + Defenseur._nom + "\n")
            console.log("il reste " + Defenseur._vie + " points de _vie à " + Defenseur._nom + "\n")
        }
        //Attaque spécial 2 utilisable tout les 20 ponts de rage
        if (Attaquant._rage >= 20 && Attaquant.__attaquespe2 == true) {
            Defenseur.__vie = Defenseur.__vie - Attaquant.__attaque;
            console.log(Attaquant._nom + " Utilise sa Super Attaque !!\n")
            console.log("Kaboom !!!\n")
            console.log("il reste " + Defenseur._defense + " points de Défense à " + Defenseur._nom + "\n")
            console.log("il reste " + Defenseur._vie + " points de _vie à " + Defenseur._nom + "\n")
        }
        //Attaque normal attaque>defense
        if (Attaquant._attaque > Defenseur._defense) {
            Defenseur._vie = Defenseur._vie - 10;
            Defenseur._rage = Defenseur._rage + 10;
            console.log("Ouch !!!\n")
            console.log("il reste " + Defenseur._vie + " points de _vie à " + Defenseur._nom + "\n")

        }     //Attaque normal attaque=defense
        else if (Attaquant._attaque == Defenseur._defense) {
            Defenseur._vie = Defenseur._vie - 5;
            Defenseur._rage = Defenseur._rage + 5;
            console.log("Aie !!!\n")
            console.log("il reste " + Defenseur._vie + " points de _vie à " + Defenseur._nom + "\n")
        }     //Attaque normal attaque<defense
        else {
            Attaquant._vie = Attaquant._vie - 5;
            Attaquant._rage = Attaquant._rage + 5;
            console.log("Bim !!!\n")
            console.log("il reste " + Attaquant._vie + " points de _vie à " + Attaquant._nom + "\n")
        }
    }


    //choix de l'attaquant aléatoires entre 1 et nbrJoueurs
    function GenAttaquantAleatoire() {
        return Math.floor(Math.random() * nbrJoueurs);
    }

    //choix du défenseur aléatoires différent de l'attaquant
    function GenDefenseurAleatoire() {
        do {
            return Math.floor(Math.random() * nbrJoueurs);
        } while (GenAttaquantAleatoire() != GenDefenseurAleatoire());
    }


