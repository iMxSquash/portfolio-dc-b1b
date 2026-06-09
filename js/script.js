'use strict';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let navAllerlst = document.getElementById("nav-aller");
let navAller = document.getElementById("aller");

navAller.addEventListener("click", () => {
    navAllerlst.style.display == "none" ? navAllerlst.style.display = "flex" : navAllerlst.style.display = "none";
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let date = document.getElementById("nav-date");
let heureNav = document.getElementById("nav2-date");

let moisAnnee = ["janv.", "févr.", "mars", "avri.", "mai", "juin", "juil.", "aout", "sept.", "oct.", "nov.", "déc."];
let jourSem = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];


function getDateCustom() {
    let now = new Date();
    let annee = now.getFullYear();
    let mois = moisAnnee[now.getMonth()];
    let jour = now.getDate();
    let heure = now.getHours();
    heure < 10 ? heure = "0" + now.getHours() : heure = now.getHours();
    let minute = now.getMinutes();
    minute < 10 ? minute = "0" + now.getMinutes() : minute = now.getMinutes();
    let seconde = now.getSeconds();

    let j = jour;
    let m = now.getMonth() + 1; // mois (1 pour janvier, 2 pour février, etc...)
    let a = annee;

    // calcul de la journée de la semaine (0 pour dimanche, 1 pour lundi, etc...) selon l'algorithme ou congruence de Zeller
    let jourSemaine = jourSem[Math.trunc((j += m < 3 ? a-- : a - 2, (23 * m / 9 + j + 4 + a / 4 - a / 100 + a / 400)) % 7)];

    let horloge = jourSemaine + " " + jour + " " + mois + " à " + heure + ":" + minute;
    date.textContent = horloge;
    heureNav.textContent = heure + ":" + minute
}


// actuallisation de l'horloge
getDateCustom();
setInterval(getDateCustom, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let finder = document.getElementById("finder");
let photoshop = document.getElementById("photoshop");
let illustrator = document.getElementById("illustrator");
let premierpro = document.getElementById("premierpro");
let notes = document.getElementById("notes");
let bin = document.getElementById("bin");

if (window.innerWidth > 1140) {
    let hfinder = document.getElementById("hover-finder");
    let hps = document.getElementById("hover-ps");
    let hai = document.getElementById("hover-ai");
    let hpr = document.getElementById("hover-pr");
    let hnotes = document.getElementById("hover-notes");
    let hcorbeille = document.getElementById("hover-bin");

    finder.addEventListener("mouseenter", () => {
        hfinder.style.display = "flex";
    });

    finder.addEventListener("mouseleave", () => {
        hfinder.style.display = "none";
    });

    photoshop.addEventListener("mouseenter", () => {
        hps.style.display = "flex";
    });

    photoshop.addEventListener("mouseleave", () => {
        hps.style.display = "none";
    });

    illustrator.addEventListener("mouseenter", () => {
        hai.style.display = "flex";
    });

    illustrator.addEventListener("mouseleave", () => {
        hai.style.display = "none";
    });

    premierpro.addEventListener("mouseenter", () => {
        hpr.style.display = "flex";
    });

    premierpro.addEventListener("mouseleave", () => {
        hpr.style.display = "none";
    });

    notes.addEventListener("mouseenter", () => {
        hnotes.style.display = "flex";
    });

    notes.addEventListener("mouseleave", () => {
        hnotes.style.display = "none";
    });

    bin.addEventListener("mouseenter", () => {
        hcorbeille.style.display = "flex";
    });

    bin.addEventListener("mouseleave", () => {
        hcorbeille.style.display = "none";
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (document.getElementsByClassName("close")[0]) {
    let closeButtonf = document.getElementsByClassName("close")[0];
    let rougef = document.getElementById("rouge-f");
    let orangef = document.getElementById("orange-f");
    let vertf = document.getElementById("vert-f");

    closeButtonf.addEventListener("mouseenter", () => {
        rougef.setAttribute('fill', '#FE5F57');
        orangef.setAttribute('fill', '#FEBC2C');
        vertf.setAttribute('fill', '#28C840');
    });

    closeButtonf.addEventListener("mouseleave", () => {
        rougef.setAttribute('fill', '#D9D9D9');
        orangef.setAttribute('fill', '#D9D9D9');
        vertf.setAttribute('fill', '#D9D9D9');
    });

    rougef.addEventListener("click", () => {
        finderWindow.style.display = "none";
        z--;
        finderWindow.style.zIndex = z
    });

    orangef.addEventListener("click", () => {
        finderWindow.style.display = "none";
        z--;
        finderWindow.style.zIndex = z
    });
}


if (document.getElementsByClassName("close")[1]) {
    let closeButtonb = document.getElementsByClassName("close")[1];
    let rougeb = document.getElementById("rouge-b");
    let orangeb = document.getElementById("orange-b");
    let vertb = document.getElementById("vert-b");

    closeButtonb.addEventListener("mouseenter", () => {
        rougeb.setAttribute('fill', '#FE5F57');
        orangeb.setAttribute('fill', '#FEBC2C');
        vertb.setAttribute('fill', '#28C840');
    });

    closeButtonb.addEventListener("mouseleave", () => {
        rougeb.setAttribute('fill', '#D9D9D9');
        orangeb.setAttribute('fill', '#D9D9D9');
        vertb.setAttribute('fill', '#D9D9D9');
    });

    rougeb.addEventListener("click", () => {
        binWindow.style.display = "none";
        z--;
        binWindow.style.zIndex = z
    });

    orangeb.addEventListener("click", () => {
        binWindow.style.display = "none";
        z--;
        binWindow.style.zIndex = z
    });
}

if (document.getElementsByClassName("close")[2]) {
    let closeButtonn = document.getElementsByClassName("close")[2];
    let rougen = document.getElementById("rouge-n");
    let orangen = document.getElementById("orange-n");
    let vertn = document.getElementById("vert-n");

    closeButtonn.addEventListener("mouseenter", () => {
        rougen.setAttribute('fill', '#FE5F57');
        orangen.setAttribute('fill', '#FEBC2C');
        vertn.setAttribute('fill', '#28C840');
    });

    closeButtonn.addEventListener("mouseleave", () => {
        rougen.setAttribute('fill', '#D9D9D9');
        orangen.setAttribute('fill', '#D9D9D9');
        vertn.setAttribute('fill', '#D9D9D9');
    });

    rougen.addEventListener("click", () => {
        notesWindow.style.display = "none";
        z--;
        notesWindow.style.zIndex = z
    });

    orangen.addEventListener("click", () => {
        notesWindow.style.display = "none";
        z--;
        notesWindow.style.zIndex = z
    });
}


if (document.getElementsByClassName("close")[3]) {
    let closeButtonl = document.getElementsByClassName("close")[3];
    let rougel = document.getElementById("rouge-l");
    let orangel = document.getElementById("orange-l");
    let vertl = document.getElementById("vert-l");

    closeButtonl.addEventListener("mouseenter", () => {
        rougel.setAttribute('fill', '#FE5F57');
        orangel.setAttribute('fill', '#FEBC2C');
        vertl.setAttribute('fill', '#28C840');
    });

    closeButtonl.addEventListener("mouseleave", () => {
        rougel.setAttribute('fill', '#D9D9D9');
        orangel.setAttribute('fill', '#D9D9D9');
        vertl.setAttribute('fill', '#D9D9D9');
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let navFinder = document.getElementById("navOpenFinder");
let finderWindow = document.getElementById("documents-finder");

let z = 0

if (document.getElementById("conteneur-dossier")) {
    let folder = document.getElementById("conteneur-dossier");

    folder.addEventListener("mouseenter", () => {
        folder.style.backgroundColor = "rgba(142, 142, 142, 0.25)";
    });

    folder.addEventListener("mouseleave", () => {
        folder.style.backgroundColor = "transparent";
    });

    folder.addEventListener("dblclick", () => {
        finderWindow.style.display = "block";
        z++;
        finderWindow.style.zIndex = z;
    });
}

navFinder.addEventListener("click", () => {
    finderWindow.style.display = "block";
    z++;
    finderWindow.style.zIndex = z;
});

finder.addEventListener("click", () => {
    finderWindow.style.display = "block";
    z++;
    finderWindow.style.zIndex = z;
});


let binWindow = document.getElementById("bin-window");

bin.addEventListener("click", () => {
    binWindow.style.display = "block";
    z++;
    binWindow.style.zIndex = z;
});


let notesWindow = document.getElementById("notes-window");
let notesWindow2 = document.getElementById("notes-window2");

if (window.innerWidth > 1140) {
    notes.addEventListener("click", () => {
        notesWindow.style.display = "flex";
        z++;
        notesWindow.style.zIndex = z;
    });
} else {
    notes.addEventListener("click", () => {
        if (notesWindow2.style.display == "flex") {
            notesWindow2.style.display = "none";
        } else {
            notesWindow2.style.display = "flex";
        }
    });
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let notesContact = document.getElementById("notes-contact");
let notesHelp = document.getElementById("notes-help");
let notesAboutme = document.getElementById("notes-aboutme");
let notesMentions = document.getElementById("notes-mentions");

let notesContenth2 = document.getElementById("notes-content-h2");
let notesContentp = document.getElementById("notes-content-p");

notesContact.addEventListener("click", () => {
    notesContact.className = "active";
    notesHelp.className = "flexbox-col";
    notesAboutme.className = "flexbox-col";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "Contacts";
    notesContentp.innerHTML = "Instagram : @elwen_csst - @unko_dzn<br><br>Adresse Email : coussotelwen@gmail.com<br><br>Tèl. : 07 69 47 95 21";
});

notesHelp.addEventListener("click", () => {
    notesContact.className = "flexbox-col";
    notesHelp.className = "active";
    notesAboutme.className = "flexbox-col";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "Help";
    notesContentp.innerHTML = "Afin de naviguer convenablement :<br><br><br>Photoshop :<br><br>Veuillez sélectionner un calque (dans la partie droite de l’écran) pour changer d’image dans un projet.<br><br>Pour changer de projet, veuillez cliquer sur un nom de projet dans la barre au-dessus de l’image affichée.<br><br><br>Illustrator :<br><br>De même que pour photoshop, les calques, à droite de l’écran, correspondent aux images dans un même projet et les fichiers, au dessus de l’image affichée, aux projets eux mêmes.<br><br><br>PremierePro :<br><br>Pour visualiser la vidéo, cliquez sur le bouton play ou l’image afin d’être redirigé vers YouTube.<br><br><br>Pour le reste, le site fonctionne comme sur un ordinateur mac, certaines fonctionnalités ne sont pas accessibles.";
});

notesAboutme.addEventListener("click", () => {
    notesContact.className = "flexbox-col";
    notesHelp.className = "flexbox-col";
    notesAboutme.className = "active";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "About Me";
    notesContentp.innerHTML = "Bonjour,<br><br>Je m'appelle Elwen Coussot et je suis étudiant en 1ère année en Direction Artistique à Digital Campus Paris, passionné par l'intersection entre la créativité et la technologie.<br><br>Mon parcours académique m'a permis de développer une sensibilité artistique aiguisée tout en acquérant des compétences techniques solides.<br><br>Attiré par le monde de la programmation et du développement, je nourris le désir de m'orienter vers une deuxième année axée sur le développement informatique. Mon ambition est de fusionner ma passion pour le design avec ma curiosité pour le code, afin de créer des expériences numériques innovantes et captivantes.<br><br>Je suis convaincu que cette fusion de compétences me permettra de réaliser des projets créatifs et technologiquement avancés, tout en continuant à repousser les limites de mes connaissances.<br><br><a href=https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4f9ccd28-d669-31ab-9910-5ae9f036e421 target=_blank>Lien vers CV</a>";
});

notesMentions.addEventListener("click", () => {
    notesContact.className = "flexbox-col";
    notesHelp.className = "flexbox-col";
    notesAboutme.className = "flexbox-col";
    notesMentions.className = "active";
    notesContenth2.textContent = "Mentions légales";
    notesContentp.innerHTML = "<b>Responsable du site :</b><br><br>Elwen Coussot<br><br>95220<br><br>Courriel : coussotelwen@gmail.com<br><br>Téléphone : 0769479521<br><br><br><b>Hébergeur :</b><br><br>Nuxit<br><br>Grenoble, France<br><br>Téléphone : +33 (0)4 86 57 60 00<br><br>Site web : <a href=https://www.nuxit.com/>https://www.nuxit.com/</a><br><br><br><b>Propriété intellectuelle :</b><br><br>Toutes les images, icônes et vidéos ont été conçues ou reproduites par Elwen Coussot. Toute utilisation non autorisée est interdite.<br><br><b>Droits d'auteur :</b><br><br>Ce site web est à but non lucratif. Tous les contenus publiés sur ce site sont protégés par les lois sur les droits d'auteur et ne peuvent être reproduits ou utilisés sans autorisation préalable.<br><br><b>Loi applicable et juridiction compétente :</b><br><br>Ce site web est soumis à la loi française. En cas de litige, les tribunaux français seront compétents.";
});


let navContact = document.getElementById("navbar-contact");
let navHelp = document.getElementById("navbar-help");
let navAboutme = document.getElementById("navbar-aboutme");

navContact.addEventListener("click", () => {
    notesWindow.style.display = "flex";
    z++;
    notesWindow.style.zIndex = z;
    notesContact.className = "active";
    notesHelp.className = "flexbox-col";
    notesAboutme.className = "flexbox-col";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "Contacts";
    notesContentp.innerHTML = "Instagram : @elwen_csst - @unko_dzn<br><br>Adresse Email : coussotelwen@gmail.com<br><br>Tèl. : 07 69 47 95 21";
});

navHelp.addEventListener("click", () => {
    notesWindow.style.display = "flex";
    z++;
    notesWindow.style.zIndex = z;
    notesContact.className = "flexbox-col";
    notesHelp.className = "active";
    notesAboutme.className = "flexbox-col";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "Help";
    notesContentp.innerHTML = "Afin de naviguer convenablement :<br><br><br>Photoshop :<br><br>Veuillez sélectionner un calque (dans la partie droite de l’écran) pour changer d’image dans un projet.<br><br>Pour changer de projet, veuillez cliquer sur un nom de projet dans la barre au-dessus de l’image affichée.<br><br><br>Illustrator :<br><br>De même que pour photoshop, les calques, à droite de l’écran, correspondent aux images dans un même projet et les fichiers, au dessus de l’image affichée, aux projets eux mêmes.<br><br><br>PremierePro :<br><br>Pour visualiser la vidéo, cliquez sur le bouton play ou l’image afin d’être redirigé vers YouTube.<br><br><br>Pour le reste, le site fonctionne comme sur un ordinateur mac, certaines fonctionnalités ne sont pas accessibles.";
});

navAboutme.addEventListener("click", () => {
    notesWindow.style.display = "flex";
    z++;
    notesWindow.style.zIndex = z;
    notesContact.className = "flexbox-col";
    notesHelp.className = "flexbox-col";
    notesAboutme.className = "active";
    notesMentions.className = "flexbox-col";
    notesContenth2.textContent = "About Me";
    notesContentp.innerHTML = "Bonjour,<br><br>Je m'appelle Elwen Coussot et je suis étudiant en 1ère année en Direction Artistique à Digital Campus Paris, passionné par l'intersection entre la créativité et la technologie.<br><br>Mon parcours académique m'a permis de développer une sensibilité artistique aiguisée tout en acquérant des compétences techniques solides.<br><br>Attiré par le monde de la programmation et du développement, je nourris le désir de m'orienter vers une deuxième année axée sur le développement informatique. Mon ambition est de fusionner ma passion pour le design avec ma curiosité pour le code, afin de créer des expériences numériques innovantes et captivantes.<br><br>Je suis convaincu que cette fusion de compétences me permettra de réaliser des projets créatifs et technologiquement avancés, tout en continuant à repousser les limites de mes connaissances.<br><br><a href=https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4f9ccd28-d669-31ab-9910-5ae9f036e421>Lien vers CV</a>";
});

if (document.getElementById("help-btn")) {
    let helpButton = document.getElementById("help-btn");

    helpButton.addEventListener("click", () => {
        notesWindow.style.display = "flex";
        z++;
        notesWindow.style.zIndex = z;
        notesContact.className = "flexbox-col";
        notesHelp.className = "active";
        notesAboutme.className = "flexbox-col";
        notesMentions.className = "flexbox-col";
        notesContenth2.textContent = "Help";
        notesContentp.innerHTML = "Afin de naviguer convenablement :<br><br><br>Photoshop :<br><br>Veuillez sélectionner un calque (dans la partie droite de l’écran) pour changer d’image dans un projet.<br><br>Pour changer de projet, veuillez cliquer sur un nom de projet dans la barre au-dessus de l’image affichée.<br><br><br>Illustrator :<br><br>De même que pour photoshop, les calques, à droite de l’écran, correspondent aux images dans un même projet et les fichiers, au dessus de l’image affichée, aux projets eux mêmes.<br><br><br>PremierePro :<br><br>Pour visualiser la vidéo, cliquez sur le bouton play ou l’image afin d’être redirigé vers YouTube.<br><br><br>Pour le reste, le site fonctionne comme sur un ordinateur mac, certaines fonctionnalités ne sont pas accessibles.";
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let nAside2 = document.getElementById('nAside2');
let nMain2 = document.getElementById('nMain2');

let nAcontact2 = document.getElementById('nAcontact2');
let nAhelp2 = document.getElementById('nAhelp2');
let nAaboutme2 = document.getElementById('nAaboutme2');
let nAmention2 = document.getElementById('nAmention2');

let nMain2h2 = document.getElementById('nMain2h2');
let nMain2p = document.getElementById('nMain2p');

let notesRetour = document.getElementById('notes-retour');


nAcontact2.addEventListener('click', () => {
    nAside2.style.display = "none";
    nMain2.style.display = "block";
    nMain2h2.textContent = "Contact";
    nMain2p.innerHTML = "Instagram : @elwen_csst - @unko_dzn<br><br>Adresse Email : coussotelwen@gmail.com<br><br>Tèl. : 07 69 47 95 21"
});

nAhelp2.addEventListener('click', () => {
    nAside2.style.display = "none";
    nMain2.style.display = "block";
    nMain2h2.textContent = "Help";
    nMain2p.innerHTML = "Afin de naviguer convenablement :<br><br><br>Photoshop :<br><br>Veuillez sélectionner un calque (dans la partie droite de l’écran) pour changer d’image dans un projet.<br><br>Pour changer de projet, veuillez cliquer sur un nom de projet dans la barre au-dessus de l’image affichée.<br><br><br>Illustrator :<br><br>De même que pour photoshop, les calques, à droite de l’écran, correspondent aux images dans un même projet et les fichiers, au dessus de l’image affichée, aux projets eux mêmes.<br><br><br>PremierePro :<br><br>Pour visualiser la vidéo, cliquez sur le bouton play ou l’image afin d’être redirigé vers YouTube.<br><br><br>Pour le reste, le site fonctionne comme sur un ordinateur mac, certaines fonctionnalités ne sont pas accessibles."
});

nAaboutme2.addEventListener('click', () => {
    nAside2.style.display = "none";
    nMain2.style.display = "block";
    nMain2h2.textContent = "About Me";
    nMain2p.innerHTML = "Bonjour,<br><br>Je m'appelle Elwen Coussot et je suis étudiant en 1ère année en Direction Artistique à Digital Campus Paris, passionné par l'intersection entre la créativité et la technologie.<br><br>Mon parcours académique m'a permis de développer une sensibilité artistique aiguisée tout en acquérant des compétences techniques solides.<br><br>Attiré par le monde de la programmation et du développement, je nourris le désir de m'orienter vers une deuxième année axée sur le développement informatique. Mon ambition est de fusionner ma passion pour le design avec ma curiosité pour le code, afin de créer des expériences numériques innovantes et captivantes.<br><br>Je suis convaincu que cette fusion de compétences me permettra de réaliser des projets créatifs et technologiquement avancés, tout en continuant à repousser les limites de mes connaissances.<br><br><a href=https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4f9ccd28-d669-31ab-9910-5ae9f036e421>Lien vers CV</a>"
});

nAmention2.addEventListener('click', () => {
    nAside2.style.display = "none";
    nMain2.style.display = "block";
    nMain2h2.textContent = "Mentions légales";
    nMain2p.innerHTML = "<b>Responsable du site :</b><br><br>Elwen Coussot<br><br>95220<br><br>Courriel : coussotelwen@gmail.com<br><br>Téléphone : 0769479521<br><br><br><b>Hébergeur :</b><br><br>Nuxit<br><br>Grenoble, France<br><br>Téléphone : +33 (0)4 86 57 60 00<br><br>Site web : <a href=https://www.nuxit.com/>https://www.nuxit.com/</a><br><br><br><b>Propriété intellectuelle :</b><br><br>Toutes les images, icônes et vidéos ont été conçues ou reproduites par Elwen Coussot. Toute utilisation non autorisée est interdite.<br><br><b>Droits d'auteur :</b><br><br>Ce site web est à but non lucratif. Tous les contenus publiés sur ce site sont protégés par les lois sur les droits d'auteur et ne peuvent être reproduits ou utilisés sans autorisation préalable.<br><br><b>Loi applicable et juridiction compétente :</b><br><br>Ce site web est soumis à la loi française. En cas de litige, les tribunaux français seront compétents."
});

notesRetour.addEventListener('click', () => {
    nAside2.style.display = "flex";
    nMain2.style.display = "none";
});





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let batteryLv = document.getElementById("nav-battery");
let batteryLv2 = document.getElementById("batterynav2");

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateLevelInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("levelchange", () => {
        updateLevelInfo();
    });
    function updateLevelInfo() {
        batteryLv.textContent = Math.trunc(battery.level * 100) + "%";
        batteryLv2.textContent = Math.trunc(battery.level * 100) + "%";
    }
});