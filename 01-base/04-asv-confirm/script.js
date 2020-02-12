/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    Reponse();//pas a faire!
    
    function Reponse(){//pas de majuscule!

        let age = prompt("Donne moi ton age");// les variables + prompt => ouvre une boite de dialogue
        let sex = prompt("De quel sexe es tu ?");
        let city = prompt("Tu vis dans quelle ville ?");
                                                                                                    //ne pas mettre true ici car il sere a rien 
        if(confirm("Tu es agés de " + age + ", tu es un(e) " + sex + " et tu viens de " + city) == true){// les conditons a remplire

            return alert("Good job!");// si toute condition remplis return un message

        }else{

            return Reponse();//sinon return la function jusqu'a remplire les conditions.
         }

    }





        


})();
