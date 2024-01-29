"use strict"

// DEBUT DARCK MODE

let bt=document.querySelector('button');
console.log(bt);

bt.addEventListener("click",backgroundC);

let interrupteur=0;
function backgroundC(){
    let body=document.querySelector('body');
    let header=document.querySelector('header')
    let footer=document.querySelector('footer')
    let h2=document.querySelector('h2')
    let form=document.querySelector('form')
    if(interrupteur==0){
        body.style.background='#647ea3';
        interrupteur=1;
        header.style.backgroundImage='url(GN1.gif)';
        footer.style.backgroundImage='url(GN1.gif)';
        h2.style.background='#0000007d';
        form.style.background='#0000007d';
    }else{
        body.style.background='#fbdab1';
        interrupteur=0;
        header.style.backgroundImage='url(GM2.gif)';
        footer.style.backgroundImage='url(GM2.gif)';
        h2.style.background='#d3a775';
        form.style.background='#d3a775';
    }
}

//FIN DARCK MODE

// DEBUT MENU BURGER

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// FIN MENU BURGER

// DEBUT FORMULAIRE

function validerFormulaire(e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    let body = document.body; // Sélectionne le body

    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let motDePasse = document.getElementById("motDePasse");

    // Vérification du bouton radio
    let genreHomme = document.getElementById("homme");
    let genreFemme = document.getElementById("femme");
    let genreError = document.getElementById("genreError");

    if (!genreHomme.checked && !genreFemme.checked) {
        genreError.textContent = "Veuillez sélectionner un genre.";
        genreError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }


    // MOTS DE PASSE
    let motDePasseError = document.getElementById("motDePasseError");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    if (!regex.test(motDePasse.value)) {
        motDePasseError.textContent = "Le mot de passe ne respecte pas les critères requis.";
        motDePasseError.classList.add("error");
        motDePasse.classList.add("error-input");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        motDePasse.classList.remove("error-input");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    // Ajoutez ici d'autres validations au besoin

    // Si toutes les validations sont réussies, vous pouvez également soumettre le formulaire ici si nécessaire
    // document.getElementById("monFormulaire").submit();
}
let bt1=document.querySelector('#bt1');
bt1.addEventListener('click',validerFormulaire)

// FIN FORMULAIRE