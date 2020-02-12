/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        // your code here
        let vitesse = 100; // La vitesse a laquelle les chiffre defilerons
        let valUn;
        let valDeux;
        let valTrois;
        let valQuatre;
        let btnUn = true;
        let btnDeux = true;
        let btnTrois = true;
        let btnQuatre = true;
    
        function defilementDesNombres() {
            valUn = document.getElementById('part-one').getAttribute('value');//recuperation de value qui vaut 00
            if (btnUn) {
                if (valUn == document.getElementById('part-one').getAttribute('data-max')) {//si on attiens data-max
                    valUn = document.getElementById('part-one').getAttribute('data-min');//on retourne data-min
                } else {
                    valUn++;//sinon on valun plus un jusqu'a data-max
                }
            }
    
            if (btnDeux) {
                valDeux = document.getElementById('part-two').getAttribute('value');
                if (valDeux == document.getElementById('part-two').getAttribute('data-max')) {
                    valDeux = document.getElementById('part-two').getAttribute('data-min');
                } else {
                    valDeux++;
                }
                if (valDeux < 10 && valDeux > 0) {
                    valDeux = "0" + valDeux;
                }
            }
    
            if (btnTrois) {
                valTrois = document.getElementById('part-three').getAttribute('value');
                if (valTrois == document.getElementById('part-three').getAttribute('data-max')) {
                    valTrois = document.getElementById('part-three').getAttribute('data-min');
                } else {
                    valTrois++;
                }
                if (valTrois < 10 && valTrois > 0) {
                    valTrois = "0" + valTrois;
                }
            }
    
            if (btnQuatre) {
                valQuatre = document.getElementById('part-four').getAttribute('value');
                if (valQuatre == document.getElementById('part-four').getAttribute('data-max')) {
                    valQuatre = document.getElementById('part-four').getAttribute('data-min');
                } else {
                    valQuatre++;
                }
                if (valQuatre < 10 && valQuatre > 0) {
                    valQuatre = "0" + valQuatre;
                }
            }
    
            document.getElementById("target").innerHTML = "+" + valUn + valDeux + valTrois + valQuatre;
            document.getElementById('part-one').setAttribute('value', valUn);
            document.getElementById('part-two').setAttribute('value', valDeux);
            document.getElementById('part-three').setAttribute('value', valTrois);
            document.getElementById('part-four').setAttribute('value', valQuatre);
            setTimeout(defilementDesNombres, vitesse);
        }
    
        defilementDesNombres();
    
        document.getElementById("fix-part-one").addEventListener("click", () => {
            if (btnUn == true) {
                btnUn = false;/* si retourne false deffillement actif */
                document.getElementById('fix-part-one').innerHTML = "Start";
            } else {
                btnUn = true;/* quand on appuis retourne true et arret du defillement */
                document.getElementById('fix-part-one').innerHTML = "Stop";
            }
        });
    
        document.getElementById("fix-part-two").addEventListener("click", () => {
            if (btnDeux == true) {
                btnDeux = false;
                document.getElementById('fix-part-two').innerHTML = "Start";
            } else {
                btnDeux = true;
                document.getElementById('fix-part-two').innerHTML = "Stop";
            }
        });
    
        document.getElementById("fix-part-three").addEventListener("click", () => {
            if (btnTrois == true) {
                btnTrois = false;
                document.getElementById('fix-part-three').innerHTML = "Start";
            } else {
                btnTrois = true;
                document.getElementById('fix-part-three').innerHTML = "Stop";
            }
        });
    
        document.getElementById("fix-part-four").addEventListener("click", () => {
            if (btnQuatre == true) {
                btnQuatre = false;
                document.getElementById('fix-part-four').innerHTML = "Start";
            } else {
                btnQuatre = true;
                document.getElementById('fix-part-four').innerHTML = "Stop";
            }
        });
})();
