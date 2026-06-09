let pNba = document.getElementById("pNba");
let pFury = document.getElementById("pFury");
let pPub = document.getElementById("pPub");
let pMdl = document.getElementById("pMdl");
let pPeug = document.getElementById("pPeug");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");

let img = document.getElementsByTagName("img")[0];
let txt = document.getElementById("img-txt");
let figure = document.getElementById("figure-ps");

let textc1 = document.getElementById("c1-h3");
let textc2 = document.getElementById("c2-h3");
let textc3 = document.getElementById("c3-h3");
let textc4 = document.getElementById("c4-h3");
let textc5 = document.getElementById("c5-h3");

pNba.addEventListener("click", () => {
    if (pNba.className == "inactive") {
        pNba.className = "active";
        pFury.className = "inactive";
        pPub.className = "inactive";
        pMdl.className = "inactive";
        pPeug.className = "inactive";
        img.setAttribute("src", "img/nba-finals.webp");
        img.setAttribute("alt", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
        figure.setAttribute("figcaption", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
        txt.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami.";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        c4.className = "nonvisible";
        c5.className = "nonvisible";
        textc1.textContent = "img";
        textc2.textContent = "mockup";
        c3.style.display = "none";
        c4.style.display = "none";
        c5.style.display = "none";
    }
});

pFury.addEventListener("click", () => {
    if (pFury.className == "inactive") {
        pNba.className = "inactive";
        pFury.className = "active";
        pPub.className = "inactive";
        pMdl.className = "inactive";
        pPeug.className = "inactive";
        img.setAttribute("src", "img/fury1.webp");
        img.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon.");
        figure.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon.")
        txt.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020.";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        c4.className = "nonvisible";
        c5.className = "nonvisible";
        textc1.textContent = "mockup application";
        textc2.textContent = "mockup application 2";
        textc3.textContent = "mockup affiche";
        textc4.textContent = "mockup pack stream";
        c3.style.display = "flex";
        c4.style.display = "flex";
        c5.style.display = "none";
    }
});

pPub.addEventListener("click", () => {
    if (pPub.className == "inactive") {
        pNba.className = "inactive";
        pFury.className = "inactive";
        pPub.className = "active";
        pMdl.className = "inactive";
        pPeug.className = "inactive";
        img.setAttribute("src", "img/valorant1.webp");
        img.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
        figure.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
        txt.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023.";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        c4.className = "nonvisible";
        c5.className = "nonvisible";
        textc1.textContent = "affiche Valorant";
        textc2.textContent = "mockup Valorant";
        textc3.textContent = "mockup BackMarket";
        c3.style.display = "flex";
        c4.style.display = "none";
        c5.style.display = "none";
    }
});

pMdl.addEventListener("click", () => {
    if (pMdl.className == "inactive") {
        pNba.className = "inactive";
        pFury.className = "inactive";
        pPub.className = "inactive";
        pMdl.className = "active";
        pPeug.className = "inactive";
        img.setAttribute("src", "img/harcler-tue.jpg");
        img.setAttribute("alt", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
        figure.setAttribute("figcaption", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
        txt.textContent = "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée.";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        c4.className = "nonvisible";
        c5.className = "nonvisible";
        textc1.textContent = "Harceler tue";
        textc2.textContent = "Le temps s’écoule";
        textc3.textContent = "Saint-valentin";
        c3.style.display = "flex";
        c4.style.display = "none";
        c5.style.display = "none";
    }
});

pPeug.addEventListener("click", () => {
    if (pPeug.className == "inactive") {
        pNba.className = "inactive";
        pFury.className = "inactive";
        pPub.className = "inactive";
        pMdl.className = "inactive";
        pPeug.className = "active";
        img.setAttribute("src", "img/psa1.webp");
        img.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes.");
        figure.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes.");
        txt.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën.";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        c4.className = "nonvisible";
        c5.className = "nonvisible";
        textc1.textContent = "Logo";
        textc2.textContent = "Maquette voiture 1";
        textc3.textContent = "Maquette voiture 2";
        c3.style.display = "flex";
        c4.style.display = "none";
        c5.style.display = "none";
    }
});

c1.addEventListener("click", () => {
    if (pNba.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/nba-finals.webp");
            img.setAttribute("alt", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            figure.setAttribute("figcaption", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            txt.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami.";
            c1.className = "visible";
            c2.className = "nonvisible";
        }
    }
    if (pFury.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/fury1.webp");
            img.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon");
            figure.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon")
            txt.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020.";
            c1.className = "visible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
            c4.className = "nonvisible";
            c5.className = "nonvisible";
        }
    }
    if (pPub.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/valorant1.webp");
            img.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
            figure.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.")
            txt.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023.";
            c1.className = "visible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
        }
    }
    if (pMdl.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/harcler-tue.jpg");
            img.setAttribute("alt", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
            figure.setAttribute("figcaption", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.")
            txt.textContent = "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée.";
            c1.className = "visible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
        }
    }
    if (pPeug.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/psa1.webp");
            img.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c1.className = "visible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
        }
    }
});

c2.addEventListener("click", () => {
    if (pNba.classList.contains("active")) {
        if (c2.className == "nonvisible") {
            img.setAttribute("src", "img/nba_finals_mockup.webp");
            img.setAttribute("alt", "Mockup de l'affiche pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            figure.setAttribute("figcaption", "Mockup de l'affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            txt.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami";
            c2.className = "visible";
            c1.className = "nonvisible";
        }
    }
    if (pFury.classList.contains("active")) {
        if (c2.className == "nonvisible") {
            img.setAttribute("src", "img/fury2.webp");
            img.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'écran de chargement de l'application, toujours avec le logo de la fury esport, un dragon")
            figure.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'écran de chargement de l'application, toujours avec le logo de la fury esport, un dragon")
            txt.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020. (écran de chargement)";
            c1.className = "nonvisible";
            c2.className = "visible";
            c3.className = "nonvisible";
            c4.className = "nonvisible";
        }
    }
    if (pPub.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/valorant2.webp");
            img.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu. On voit l'affiche en scène dans le métro");
            figure.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu. On voit l'affiche en scène dans le métro")
            txt.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023";
            c1.className = "nonvisible";
            c2.className = "visible";
            c3.className = "nonvisible";
        }
    }
    if (pMdl.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/le-temps-secoule.webp");
            img.setAttribute("alt", "Affiche préventinelle contre le réchauffement climatique réalisée en 2021, nous y voyons un sablier qui représente le temps et son interieur représente le monde, la partie supèreieur montre la fonte des glaces alors que la partie infèrieur représente Paris innondé, nous polluons donc il y a par exemple la fonte de glace qui nous affecte en contre partie");
            figure.setAttribute("figcaption", "")
            txt.textContent = "Affiche préventinelle contre le réchauffement climatique réalisée en 2021, le sablier représente le temps et son interieur représente le monde, nous polluons donc il y a par exemple la fonte de glace qui nous affecte en contre partie";
            c1.className = "nonvisible";
            c2.className = "visible";
            c3.className = "nonvisible";
        }
    }
    if (pPeug.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/psa2.webp");
            img.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c1.className = "nonvisible";
            c2.className = "visible";
            c3.className = "nonvisible";
        }
    }
});


c3.addEventListener("click", () => {
    if (pFury.classList.contains("active")) {
        if (c3.className == "nonvisible") {
            img.setAttribute("src", "img/fury3.jpg");
            img.setAttribute("alt", "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021, on y voit de gros textes 'announcement of the fury world cup edition IV' avec, au centre, leur logo")
            figure.setAttribute("figcaption", "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021, on y voit de gros textes 'announcement of the fury world cup edition IV' avec, au centre, leur logo")
            txt.textContent = "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "visible";
            c4.className = "nonvisible";
        }
    }
    if (pPub.classList.contains("active")) {
        if (c3.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/backmarket.webp");
            img.setAttribute("alt", "Affiche publicitaire pour BackMarket, réalisée en 2023, on y voit simplement un iphone et un text : 'C'est l'histoire d'un iphone vendu à sa sortie, fin de la blague'.");
            figure.setAttribute("figcaption", "Affiche publicitaire pour BackMarket, réalisée en 2023, on y voit simplement un iphone et un text : 'C'est l'histoire d'un iphone vendu à sa sortie, fin de la blague'.")
            txt.textContent = "Affiche publicitaire pour BackMarket, réalisée en 2023";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "visible";
        }
    }
    if (pMdl.classList.contains("active")) {
        if (c3.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/stvalentin.webp");
            img.setAttribute("alt", "Affiche pour la saint-valentin de 2023 de mon lycée, on y voit des mains formant un coeur ainsi que des paroles de la musique falling in love de cigarettes after sex");
            figure.setAttribute("figcaption", "Affiche pour la saint-valentin de 2023 de mon lycée, on y voit des mains formant un coeur ainsi que des paroles de la musique falling in love de cigarettes after sex")
            txt.textContent = "Affiche pour la saint-valentin de 2023 de mon lycée";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "visible";
        }
    }
    if (pPeug.classList.contains("active")) {
        if (c3.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/psa3.webp");
            img.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "visible";
        }
    }
});

c4.addEventListener("click", () => {
    if (pFury.classList.contains("active")) {
        if (c4.className == "nonvisible") {
            img.setAttribute("src", "img/fury4.webp");
            img.setAttribute("alt", "Pack stream twitch de la fury esport, réalisé en 2021, on y voit sur un ordinateur le pack stream comprenant un écran de début, de pause et de fin pour leurs lives sur twitch, ainsi que des icones")
            figure.setAttribute("figcaption", "Pack stream twitch de la fury esport, réalisé en 2021, on y voit sur un ordinateur le pack stream comprenant un écran de début, de pause et de fin pour leurs lives sur twitch, ainsi que des icones")
            txt.textContent = "Pack stream twitch de la fury esport, réalisé en 2021";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
            c4.className = "visible";
        }
    }
});


let pNba2 = document.getElementById("pNba2");
let pFury2 = document.getElementById("pFury2");
let pPub2 = document.getElementById("pPub2");
let pMdl2 = document.getElementById("pMdl2");
let pPeug2 = document.getElementById("pPeug2");

let c12 = document.getElementById("c12");
let c22 = document.getElementById("c22");
let c32 = document.getElementById("c32");
let c42 = document.getElementById("c42");
let c52 = document.getElementById("c52");

let img2 = document.getElementsByTagName("img")[1];
let txt2 = document.getElementById("img-txt2");
let figure2 = document.getElementById("figure-ps2");

let textc12 = document.getElementById("c1-h32");
let textc22 = document.getElementById("c2-h32");
let textc32 = document.getElementById("c3-h32");
let textc42 = document.getElementById("c4-h32");
let textc52 = document.getElementById("c5-h32");

pNba2.addEventListener("click", () => {
    if (pNba2.className == "inactive") {
        pNba2.className = "active";
        pFury2.className = "inactive";
        pPub2.className = "inactive";
        pMdl2.className = "inactive";
        pPeug2.className = "inactive";
        img2.setAttribute("src", "img/nba-finals.webp");
        img2.setAttribute("alt", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
        figure2.setAttribute("figcaption", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
        txt2.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami.";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        c42.className = "nonvisible";
        c52.className = "nonvisible";
        textc12.textContent = "img2";
        textc22.textContent = "mockup";
        c32.style.display = "none";
        c42.style.display = "none";
        c52.style.display = "none";
    }
});

pFury2.addEventListener("click", () => {
    if (pFury2.className == "inactive") {
        pNba2.className = "inactive";
        pFury2.className = "active";
        pPub2.className = "inactive";
        pMdl2.className = "inactive";
        pPeug2.className = "inactive";
        img2.setAttribute("src", "img/fury1.webp");
        img2.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon.");
        figure2.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon.")
        txt2.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020.";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        c42.className = "nonvisible";
        c52.className = "nonvisible";
        textc12.textContent = "mockup application";
        textc22.textContent = "mockup application 2";
        textc32.textContent = "mockup affiche";
        textc42.textContent = "mockup pack stream";
        c32.style.display = "flex";
        c42.style.display = "flex";
        c52.style.display = "none";
    }
});

pPub2.addEventListener("click", () => {
    if (pPub2.className == "inactive") {
        pNba2.className = "inactive";
        pFury2.className = "inactive";
        pPub2.className = "active";
        pMdl2.className = "inactive";
        pPeug2.className = "inactive";
        img2.setAttribute("src", "img/valorant1.webp");
        img2.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
        figure2.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
        txt2.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023.";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        c42.className = "nonvisible";
        c52.className = "nonvisible";
        textc12.textContent = "affiche Valorant";
        textc22.textContent = "mockup Valorant";
        textc32.textContent = "mockup BackMarket";
        c32.style.display = "flex";
        c42.style.display = "none";
        c52.style.display = "none";
    }
});

pMdl2.addEventListener("click", () => {
    if (pMdl2.className == "inactive") {
        pNba2.className = "inactive";
        pFury2.className = "inactive";
        pPub2.className = "inactive";
        pMdl2.className = "active";
        pPeug2.className = "inactive";
        img2.setAttribute("src", "img/harcler-tue.jpg");
        img2.setAttribute("alt", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
        figure2.setAttribute("figcaption", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
        txt2.textContent = "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée.";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        c42.className = "nonvisible";
        c52.className = "nonvisible";
        textc12.textContent = "Harceler tue";
        textc22.textContent = "Le temps s’écoule";
        textc32.textContent = "Saint-valentin";
        c32.style.display = "flex";
        c42.style.display = "none";
        c52.style.display = "none";
    }
});

pPeug2.addEventListener("click", () => {
    if (pPeug2.className == "inactive") {
        pNba2.className = "inactive";
        pFury2.className = "inactive";
        pPub2.className = "inactive";
        pMdl2.className = "inactive";
        pPeug2.className = "active";
        img2.setAttribute("src", "img/psa1.webp");
        img2.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes.");
        figure2.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes.");
        txt2.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën.";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        c42.className = "nonvisible";
        c52.className = "nonvisible";
        textc12.textContent = "Logo";
        textc22.textContent = "Maquette voiture 1";
        textc32.textContent = "Maquette voiture 2";
        c32.style.display = "flex";
        c42.style.display = "none";
        c52.style.display = "none";
    }
});

c12.addEventListener("click", () => {
    if (pNba2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/nba-finals.webp");
            img2.setAttribute("alt", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            figure2.setAttribute("figcaption", "Affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            txt2.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami.";
            c12.className = "visible";
            c22.className = "nonvisible";
        }
    }
    if (pFury2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/fury1.webp");
            img2.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon");
            figure2.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'application sur la page d'accueil représenté par le logo de la fury esport, un dragon")
            txt2.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020.";
            c12.className = "visible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
            c42.className = "nonvisible";
            c52.className = "nonvisible";
        }
    }
    if (pPub2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/valorant1.webp");
            img2.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.");
            figure2.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu.")
            txt2.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023.";
            c12.className = "visible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
        }
    }
    if (pMdl2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/harcler-tue.jpg");
            img2.setAttribute("alt", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.");
            figure2.setAttribute("figcaption", "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée, représentant un packet de cigarettes avec une image d'un pendu dessus ainsi que l'écriture 'harceler tue'.")
            txt2.textContent = "Affiche préventive sur le harcèlement, réalisé en 2022 pour le mois contre le harcèlement de mon lycée.";
            c12.className = "visible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
        }
    }
    if (pPeug2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/psa1.webp");
            img2.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure2.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt2.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c12.className = "visible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
        }
    }
});

c22.addEventListener("click", () => {
    if (pNba2.classList.contains("active")) {
        if (c22.className == "nonvisible") {
            img2.setAttribute("src", "img/nba_finals_mockup.webp");
            img2.setAttribute("alt", "Mockup de l'affiche pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            figure2.setAttribute("figcaption", "Mockup de l'affiche réalisée pour la promotion de la finale Nba de 2020, on y voit à gauche l'équipe des Lakers avec Lebron James, ailier de l'équipe portant le numéro 23, on y voit aussi, dans un petit cadre entouré de papier déchiré antony davis, pivot de l'équipe à ce moment. à droite de l'affiche on y voit leurs opposants, l'équipe des Miami Heat couronné par Jimmy Butler, entre les deux équipe sont affichées les lettres VS en gros ainsi que la coupe de la finale Nba.")
            txt2.textContent = "Affiche réalisée pour la promotion de la finale Nba de 2020 opposant les Lakers de Los Angles aux Heats de Miami";
            c22.className = "visible";
            c12.className = "nonvisible";
        }
    }
    if (pFury2.classList.contains("active")) {
        if (c22.className == "nonvisible") {
            img2.setAttribute("src", "img/fury2.webp");
            img2.setAttribute("alt", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'écran de chargement de l'application, toujours avec le logo de la fury esport, un dragon")
            figure2.setAttribute("figcaption", "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020, on y voit un iphone sur lequel il y a l'écran de chargement de l'application, toujours avec le logo de la fury esport, un dragon")
            txt2.textContent = "Application fictive réalisée pour l'équipe e-sport 'Fury esport' en 2020. (écran de chargement)";
            c12.className = "nonvisible";
            c22.className = "visible";
            c32.className = "nonvisible";
            c42.className = "nonvisible";
        }
    }
    if (pPub2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/valorant2.webp");
            img2.setAttribute("alt", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu. On voit l'affiche en scène dans le métro");
            figure2.setAttribute("figcaption", "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, un Fps multijoueur en 5 contre 5 avec un but selon le camp : planter et défendre la bombe ou désamorcer cette dernière, sur cette affiche nous pouvons voir un bureau sur lequel est un écran d'ordinateur d'où sortent des personnages de ce jeu. On voit l'affiche en scène dans le métro")
            txt2.textContent = "Affiche promotionnelle d'un des jeux vidéo de Riot Games, Valorant, en 2023";
            c12.className = "nonvisible";
            c22.className = "visible";
            c32.className = "nonvisible";
        }
    }
    if (pMdl2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/le-temps-secoule.webp");
            img2.setAttribute("alt", "Affiche préventinelle contre le réchauffement climatique réalisée en 2021, nous y voyons un sablier qui représente le temps et son interieur représente le monde, la partie supèreieur montre la fonte des glaces alors que la partie infèrieur représente Paris innondé, nous polluons donc il y a par exemple la fonte de glace qui nous affecte en contre partie");
            figure2.setAttribute("figcaption", "")
            txt2.textContent = "Affiche préventinelle contre le réchauffement climatique réalisée en 2021, le sablier représente le temps et son interieur représente le monde, nous polluons donc il y a par exemple la fonte de glace qui nous affecte en contre partie";
            c12.className = "nonvisible";
            c22.className = "visible";
            c32.className = "nonvisible";
        }
    }
    if (pPeug2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/psa2.webp");
            img2.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure2.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt2.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c12.className = "nonvisible";
            c22.className = "visible";
            c32.className = "nonvisible";
        }
    }
});


c32.addEventListener("click", () => {
    if (pFury2.classList.contains("active")) {
        if (c32.className == "nonvisible") {
            img2.setAttribute("src", "img/fury3.jpg");
            img2.setAttribute("alt", "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021, on y voit de gros textes 'announcement of the fury world cup edition IV' avec, au centre, leur logo")
            figure2.setAttribute("figcaption", "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021, on y voit de gros textes 'announcement of the fury world cup edition IV' avec, au centre, leur logo")
            txt2.textContent = "Affiche annoncant une compétition organisée par la fury esport, la fury world cup édition 4 en 2021";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "visible";
            c42.className = "nonvisible";
        }
    }
    if (pPub2.classList.contains("active")) {
        if (c32.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/backmarket.webp");
            img2.setAttribute("alt", "Affiche publicitaire pour BackMarket, réalisée en 2023, on y voit simplement un iphone et un text : 'C'est l'histoire d'un iphone vendu à sa sortie, fin de la blague'.");
            figure2.setAttribute("figcaption", "Affiche publicitaire pour BackMarket, réalisée en 2023, on y voit simplement un iphone et un text : 'C'est l'histoire d'un iphone vendu à sa sortie, fin de la blague'.")
            txt2.textContent = "Affiche publicitaire pour BackMarket, réalisée en 2023";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "visible";
        }
    }
    if (pMdl2.classList.contains("active")) {
        if (c32.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/stvalentin.webp");
            img2.setAttribute("alt", "Affiche pour la saint-valentin de 2023 de mon lycée, on y voit des mains formant un coeur ainsi que des paroles de la musique falling in love de cigarettes after sex");
            figure2.setAttribute("figcaption", "Affiche pour la saint-valentin de 2023 de mon lycée, on y voit des mains formant un coeur ainsi que des paroles de la musique falling in love de cigarettes after sex")
            txt2.textContent = "Affiche pour la saint-valentin de 2023 de mon lycée";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "visible";
        }
    }
    if (pPeug2.classList.contains("active")) {
        if (c32.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/psa3.webp");
            img2.setAttribute("alt", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes");
            figure2.setAttribute("figcaption", "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën, on y voit une voiture dont la peinture est consitué avec le logo de cette marque, une fusion entre les logos des deux marques précédentes")
            txt2.textContent = "Marque de voiture à hydrogène fictive issue des marques peugeot et citroën";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "visible";
        }
    }
});

c42.addEventListener("click", () => {
    if (pFury2.classList.contains("active")) {
        if (c42.className == "nonvisible") {
            img2.setAttribute("src", "img/fury4.webp");
            img2.setAttribute("alt", "Pack stream twitch de la fury esport, réalisé en 2021, on y voit sur un ordinateur le pack stream comprenant un écran de début, de pause et de fin pour leurs lives sur twitch, ainsi que des icones")
            figure2.setAttribute("figcaption", "Pack stream twitch de la fury esport, réalisé en 2021, on y voit sur un ordinateur le pack stream comprenant un écran de début, de pause et de fin pour leurs lives sur twitch, ainsi que des icones")
            txt2.textContent = "Pack stream twitch de la fury esport, réalisé en 2021";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
            c42.className = "visible";
        }
    }
});


