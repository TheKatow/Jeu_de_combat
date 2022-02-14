function Personnage(LaVie, Lattaque, Ladefense) {
    this.NomPersonnage = function () {
        var userValue = "";
        userValue = prompt("Choisissez un nom de personnage : ");
        if ((userValue != "") && (userValue != null)) {
            console.log('Nouveau personnage créé : ' + userValue);
            return userValue;
        }
        else {
            alert('Vous devez choisir un nom ');
        };
    };
    this.nom = this.NomPersonnage();
    this.vie = LaVie;
    this.attaque = Lattaque;
    this.defense = Ladefense;
};

var Perso1 = new Personnage(0, 0, 0);
if (Perso1.nom == "") {
    Perso1 = null;
}
