
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
        
        //Ici je viens récupérer tout mon formulaire
        const form = document.querySelector('form')
        console.log(form)

        //j'ajoute mon écouteur d'évenement 

        form.addEventListener('submit', app.handlerposerchoixpo)
        
    },

    //ici je viens créer ma function, avec tout ce qui se passera dès qu'on cliquera sur le submit.
    handlerposerchoixpo(event)
    {
        //ici j'empeche le rechargement automatique de ma page
        event.preventDefault();

        //ici je viens récupérer la class de mon input
        const input = document.querySelector(".name");
        //je créer au choix : une nouvelle variable contenant la valeur de l'input, ou je rajoute .value à ma const input après le .name).value;
        const inputvalue = input.value;
        console.log (inputvalue)

        //On veut que si le formulaire est vide, on rajoute un text spécifiant qu'il est vide. Je crée donc ma condition: si le formulaire est vide, affiche ça

        if (inputvalue == "")
        {
            console.log("Ca ne fonctionne qu'avec un nom voyons!")
            return false;
        };
        //Après on va vouloir affciher différentes conditions pour attribuer des maisons/ toujours au submit
        //Ici si le nom contient 8 caractères, on affichera le blason Maxopus

        console.log(inputvalue.length)
        if (inputvalue.length === 8)
        {
            const divimgencart = document.querySelector('.speech')
            divimgencart.textContent= '';
            const imgencart = document.createElement('img')
            imgencart.src = 'images/maxopus.png';
            divimgencart.prepend(imgencart);

        }
        //Sinon, si la première lettre du nom est un L ou la dernière un X, on affiche le blason de la maison Lustrix.
        /*const premierelettre = 0;
        const dernierelettre = -1;*/
        //La fonction "charAt()" retourne le caractère situé à une position donnée dans une chaîne de caractères
        console.log(inputvalue.charAt(0))

        if (inputvalue.charAt(0) === 'L' || inputvalue.charAt((inputvalue.length -1)) === 'x' )
        {
            const divimgencart = document.querySelector('.speech')
            divimgencart.textContent= '';
            const imgencart = document.createElement('img')
            imgencart.src = 'images/lustrix.png';
            divimgencart.prepend(imgencart);
        }


        //Sile nombre de lettres du nom est un multiple de 5 ou un multiple de 3, on affiche le blason de la maison Anthorvus.
        //Modulo renvoie le RESTE de la division (ici par 5 ou 3) donc non.
        console.log (inputvalue.length % 5);

        if (inputvalue.length % 5 == 0 || inputvalue.length % 3 == 0)
        {
            const divimgencart = document.querySelector('.speech')
            divimgencart.textContent= '';
            const imgencart = document.createElement('img')
            imgencart.src = 'images/anthorvus.png';
            divimgencart.prepend(imgencart);
        }

        //Sinon, on affiche le blason de la maison Darioptera.*/
        else 
        {
            const divimgencart = document.querySelector('.speech')
            divimgencart.textContent= '';
            const imgencart = document.createElement('img')
            imgencart.src = 'images/darioptera.png';
            divimgencart.prepend(imgencart);
        }


    }
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
