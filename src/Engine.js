'use strict';

var Engine;
Engine = function () {

// private attributes and methods
    var plateau;
    var NbrBilles;
    var joueur1;
    var myArrayPlayer1;
    var myArrayPlayer2;
    var possible = true;
    var cpttt = 0;
    var winner = 0
    var nbrBilleplayer1 = 0;
    var nbrBilleplayer2 = 0;

    this.init = function () {
        var i;
        var j;
        plateau = new Array(6);
        for (i = 0; i < 6; i++) {
            plateau[i] = new Array(6);
            for (j = 0; j < 6; j++) {
                plateau[i][j] = "vide";
            }
        }
        myArrayPlayer1 = [];
        myArrayPlayer2 = [];
        for (i = 0; i < 18; i++) {
            myArrayPlayer1[i] = "vide";
            myArrayPlayer2[i] = "vide";
        }
        plateau[0][0] = "noir";
        plateau[0][1] = "vert";
        plateau[0][2] = "blanc";
        plateau[0][3] = "bleu";
        plateau[0][4] = "rouge";
        plateau[0][5] = "blanc";

        plateau[1][0] = "jaune";
        plateau[1][1] = "blanc";
        plateau[1][2] = "vert";
        plateau[1][3] = "rouge";
        plateau[1][4] = "jaune";
        plateau[1][5] = "bleu";

        plateau[2][0] = "bleu";
        plateau[2][1] = "jaune";
        plateau[2][2] = "bleu";
        plateau[2][3] = "blanc";
        plateau[2][4] = "noir";
        plateau[2][5] = "rouge";

        plateau[3][0] = "rouge";
        plateau[3][1] = "noir";
        plateau[3][2] = "rouge";
        plateau[3][3] = "vert";
        plateau[3][4] = "bleu";
        plateau[3][5] = "blanc";

        plateau[4][0] = "blanc";
        plateau[4][1] = "vert";
        plateau[4][2] = "jaune";
        plateau[4][3] = "noir";
        plateau[4][4] = "jaune";
        plateau[4][5] = "vert";

        plateau[5][0] = "jaune";
        plateau[5][1] = "bleu";
        plateau[5][2] = "noir";
        plateau[5][3] = "rouge";
        plateau[5][4] = "vert";
        plateau[5][5] = "noir";
    };
    this.RemplirPlateau = function () {
        var i, j;
        var piece = 36;
        for (i = 0; i < 6; i++) {
            plateau[i] = new Array(6);
            for (j = 0; j < 6; j++) {
                if (plateau[i][j] == "vide") {
                    piece = 0;
                }
                ;
            }
        }
        return piece;
    };


    this.JoueurCouleur = function (couleur, l, c, joueur) {

        var cpt1 = 0
        var cpt2 = 0


        var i
        if (joueur != 1) {
            if (plateau[l][c] == couleur) {
                cpttt += 1;
                myArrayPlayer2[nbrBilleplayer2] = plateau[l][c];
                plateau[l][c] = "vide";
                nbrBilleplayer2 += 1;

                for (i = 0; i < myArrayPlayer2.length - 1; i++) {
                    if (myArrayPlayer2[i] == couleur) {
                        cpt2 += 1;
                    }
                }
                if (cpt2 == 6 || cpttt == 36) {
                    winner = joueur;
                }
            }
        } else {

            if (plateau[l][c] == couleur) {
                cpttt += 1;
                myArrayPlayer1[nbrBilleplayer1] = plateau[l][c];
                plateau[l][c] = "vide";
                nbrBilleplayer1 += 1;

                for (i = 0; i < myArrayPlayer1.length - 1; i++) {
                    if (myArrayPlayer1[i] == couleur) {
                        cpt1 += 1;
                    }
                }
                if (cpt1 == 6 || cpttt == 36) {
                    winner = joueur
                }
            }
        }

        return winner;


    };

    this.VerifierCase = function (couleur, l, c) {
        if (plateau[l][c] == couleur) {
            var nbrvoisin = 0;
            var nbrvidevoisin = 0;
            if (c < 5) {
                if (plateau[l][c + 1] != "vide") {
                    nbrvoisin += 1;
                }
                else {
                    nbrvidevoisin += 1;
                }
            }
            if (l < 5) {
                if (plateau[l + 1][c] != "vide") {
                    nbrvoisin += 1;
                }
                else {
                    nbrvidevoisin += 1;
                }
            }

            if (l > 0) {
                if (plateau[l - 1][c] != "vide") {
                    nbrvoisin += 1;
                }
                else {
                    nbrvidevoisin += 1;
                }
            }
            if (c > 0) {
                if (plateau[l][c - 1] != "vide") {
                    nbrvoisin += 1;
                }
                else {
                    nbrvidevoisin += 1;
                }
            }

            if (nbrvoisin == 2 && nbrvidevoisin == 2) {
                var verif = 0;
                if (plateau[l][c + 1] != "vide" && plateau[l + 1][c + 1] != "vide") {
                    verif += 1;
                }
                else if (plateau[l][c - 1] != "vide" && plateau[l + 1][c - 1] != "vide") {
                    verif += 1;
                }
                if (verif = 0) {
                    possible = false;
                }

            }
            if (nbrvoisin == 3) {
                possible = false;
            }
            if (nbrvoisin == 4) {
                possible = false;
            }
        }
        return possible;


    };

    this.checkCase = function(){
        
        
        
    }
};

