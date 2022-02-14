function Personnage(LeNom, LaVie, Lattaque, Ladefense) {
    this.NomPersonnage = function () {
        var userValue;
        while ((userValue != "") || (userValue != null)) {
            userValue = prompt("Choisissez un nom de personnage : ");
            Personnage.nom = userValue;
            if ((userValue != "") && (userValue != null)) {
                console.log('Nouveau personnage créé : ' + userValue );
                return userValue;
                break;
            }
            else {
                alert('Vous devez choisir un nom ');
            };
        };
    };
    this.nom = LeNom;
    this.vie = LaVie;
    this.attaque = Lattaque;
    this.defense = Ladefense;
};

var Perso1 = new Personnage("", 0, 0, 0);
Perso1.NomPersonnage();