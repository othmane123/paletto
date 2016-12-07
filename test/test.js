'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
    

PalettoTestCase.prototype.testHistoire1 = function () {
    var jeu = new Engine();
    jeu.init();
    assertTrue(jeu.RemplirPlateau()==36);

};

PalettoTestCase.prototype.testHistoire2 = function () {
    var jeu = new Engine();
    jeu.init();
    assertTrue(jeu.JoueurCouleur("jaune",1,0,1)==0);

};


PalettoTestCase.prototype.testHistoire3 = function() {
    var jeu = new Engine();
    jeu.init();
    assertTrue(jeu.VerifierCase("jaune",5,0)==true);



};

PalettoTestCase.prototype.testHistoire4 = function() {
    var jeu = new Engine();
    jeu.init();
    assertTrue(jeu.JoueurCouleur("noir",5,5,2)==0);
    assertTrue(jeu.JoueurCouleur("noir",0,0,2)==0);
    assertTrue(jeu.VerifierCase("noir",5,5)==true);
    assertTrue(jeu.VerifierCase("noir",0,0)==true);

};

PalettoTestCase.prototype.testHistoire5 = function() {
    var jeu = new Engine();
    jeu.init();


    assertTrue(jeu.checkCase());

};







