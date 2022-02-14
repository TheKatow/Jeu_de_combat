var tPlayers = [];
var attaquantRandom = 0;
var defenseurRandom = 0;
var oldRandom;

// couleur

function colorLog(message, color) {
    color = color || "black";
    switch (color) {
        case "success":
            color = "#11AC0F";
            break;
        case "info":    
            color = "#169BE7";
            break;
        case "error":
            color = "#E51329";
            break;
        case "warning":
            color = "#E5E810";
            break;
        case "winner":
            color = "#E715E7";   
        default:
            color = color;
    }
    console.log("%c" + message, "color:" + color);
}
// info
function info(info) {
    colorLog("Nom : " + info.GetName() + "\n Vie : " + info.GetLife() + "\n Attaque :" + info.GetAttack() + "\n Defense : " + info.GetDefense(), "info");
}

// Création classe Person + son constructor.
class Person {
    constructor(oneName) {
        var _name = oneName;
        this.NombreAleatoire = function () {
            return Math.floor(Math.random()* (100-20)) +20;
        };
        var _life = this.NombreAleatoire() - 5;
        var _attack = this.NombreAleatoire() + 5;
        var _defense = this.NombreAleatoire() + 5;
        var _exist =false;
        if (oneName == undefined) {
            colorLog("Le personnage n'a pas été créer !", "error");
        } else {
            colorLog("Nouveau personnage : " + _name + " créer!", "success");
            _exist = true;
        }
        // Création des fontions pour appeler les attributs en privé.

        this.GetName = function () {
            return _name;
        }
        this.GetLife = function () {
            return _life;
        }
        this.setLife = function (newLife) {
            _life = newLife;
            if (_life <= 0) {
                _exist = false;
                _life = 0;
                colorLog("Le personnage " + _name + " est dead", "error")
            }
        }
        this.GetAttack = function () {
            return _attack;
        }
        this.GetDefense = function () {
            return _defense;
        }
        this.GetExist = function () {
            return _exist;
        }
        this.setExist = function (newExist) {
            _exist = newExist;
        }

        // attaquer
        this.fight = function (defenseur) {
            colorLog("Nouvelle attaque de " + _name + " sur " + defenseur.GetName() + "!", "warning")
            if (_attack > defenseur.GetDefense() ) {
                defenseur.setLife(defenseur.GetLife() - 10);
            }
            else 
                if (_attack == defenseur.GetDefense()) {
                    defenseur.setLife(defenseur.GetLife() - 5); 
                }
            else 
                if (_attack < defenseur.GetDefense()) {
                    this.setLife(_life - 5); 
                }
            if (this.GetExist() == false) {
                tPlayers.splice(attaquantRandom, 1);
                    
            } else if (defenseur.GetExist() == false) {
                tPlayers.splice(defenseurRandom, 1);
            }
            info(this);
            info(defenseur);        
        }
    };            
}

// Création class Match et son contruction
class Match {
    constructor() {
        var perso;
        var NbPlayers;

        // Création de la fonction pour créer un perso
        this.CreerPerso = function () {
            NbPlayers = prompt("Saisissez le nombre de joueurs : ");
    
            for (var i = 0; i < NbPlayers; i++) {
                perso = prompt("Saisissez le nom de votre personnage : ");
                perso=new Person(perso);
                info(perso);
                tPlayers.push(perso);
            }   
        }
    // création de la fonction pour lancer le match.
        this.runMatch = function () {
            while (tPlayers.length > 1) {
                attaquantRandom = Math.floor(Math.random()*tPlayers.length);
                var attaquant = tPlayers[attaquantRandom];

                defenseurRandom = Math.floor(Math.random()*tPlayers.length);
                var defenseur = tPlayers[defenseurRandom];

                if (oldRandom != attaquantRandom) {
                    if (attaquantRandom != defenseurRandom) {
                        if (attaquant.GetLife() > 0) {
                            if (defenseur.GetLife() > 0) {
                                console.log(attaquant);
                                console.log(defenseur);
                                attaquant.fight(defenseur);
                                defenseurRandom=Math.floor(Math.random()*tPlayers.length);
                                defenseur = tPlayers[defenseurRandom];
                            };
                        }; 
                    };
                };
            };
            colorLog(tPlayers[0].GetName() + " est le vainqueur", "winner");
            document.getElementById("result").innerHTML += tPlayers[0].GetName() + " est le vainqueur !";

        }
    }       
}

// on exécute les fonctions

var OneMatch = new Match();
OneMatch.CreerPerso();
OneMatch.runMatch();