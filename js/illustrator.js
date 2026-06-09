let pJett = document.getElementById("pJett");
let pPA = document.getElementById("pPA");
let pLogo = document.getElementById("pLogo");
let pCartes = document.getElementById("pCartes");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let img = document.getElementsByTagName("img")[0];
let txt = document.getElementById("img-txt");
let figure = document.getElementById("figure-ai2");

let textc1 = document.getElementById("c1-h3");
let textc2 = document.getElementById("c2-h3");
let textc3 = document.getElementById("c3-h3");

let carrec1 = document.getElementById("carre-c1");
let carrec2 = document.getElementById("carre-c2");
let carrec3 = document.getElementById("carre-c3");

pJett.addEventListener("click", () => {
    if (pJett.className == "inactive") {
        pJett.className = "active";
        pPA.className = "inactive";
        pLogo.className = "inactive";
        pCartes.className = "inactive";
        img.setAttribute("src", "img/jett.webp");
        img.setAttribute("alt", "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023, on y voit ce personnage aux cheveux blanc dans un fond sombre")
        figure.setAttribute("figcaption", "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023, on y voit ce personnage aux cheveux blanc dans un fond sombre");
        txt.textContent = "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        textc1.textContent = "img";
        c2.style.display = "none";
        c3.style.display = "none";
        carrec1.setAttribute("fill", "#5A7EF7");
        carrec1.setAttribute("stroke", "black");
        carrec2.setAttribute("fill", "none");
        carrec2.setAttribute("stroke", "transparent");
        carrec3.setAttribute("fill", "none");
        carrec3.setAttribute("stroke", "transparent");
    }
});

pPA.addEventListener("click", () => {
    if (pPA.className == "inactive") {
        pJett.className = "inactive";
        pPA.className = "active";
        pLogo.className = "inactive";
        pCartes.className = "inactive";
        img.setAttribute("src", "img/luffypixel1.jpg");
        img.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
        figure.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
        txt.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        textc1.textContent = "luffy";
        textc2.textContent = "luffy zoom";
        c2.style.display = "flex";
        c3.style.display = "none";
        carrec1.setAttribute("fill", "#5A7EF7");
        carrec1.setAttribute("stroke", "black");
        carrec2.setAttribute("fill", "none");
        carrec2.setAttribute("stroke", "transparent");
        carrec3.setAttribute("fill", "none");
        carrec3.setAttribute("stroke", "transparent");
    }
});

pLogo.addEventListener("click", () => {
    if (pLogo.className == "inactive") {
        pJett.className = "inactive";
        pPA.className = "inactive";
        pLogo.className = "active";
        pCartes.className = "inactive";
        img.setAttribute("src", "img/logo-ec1.jpg");
        img.setAttribute("alt", "Mockup de mon propre logo créer à partir de mes initiales E et C");
        figure.setAttribute("figcaption", "Mockup de mon propre logo créer à partir de mes initiales E et C");
        txt.textContent = "Mockup de mon propre logo créer à partir de mes initiales E et C";
        c1.className = "visible";
        c2.className = "nonvisible";
        textc1.textContent = "Logo";
        textc2.textContent = "Divers";
        c2.style.display = "flex";
        c3.style.display = "none";
        carrec1.setAttribute("fill", "#5A7EF7");
        carrec1.setAttribute("stroke", "black");
        carrec2.setAttribute("fill", "none");
        carrec2.setAttribute("stroke", "transparent");
        carrec3.setAttribute("fill", "none");
        carrec3.setAttribute("stroke", "transparent");
    }
});

pCartes.addEventListener("click", () => {
    if (pCartes.className == "inactive") {
        pJett.className = "inactive";
        pPA.className = "inactive";
        pLogo.className = "inactive";
        pCartes.className = "active";
        img.setAttribute("src", "img/cartes1.webp");
        img.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
        figure.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
        txt.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
        c1.className = "visible";
        c2.className = "nonvisible";
        c3.className = "nonvisible";
        textc1.textContent = "Cartes 1";
        textc2.textContent = "Cartes 2";
        textc3.textContent = "Images";
        c2.style.display = "flex";
        c3.style.display = "flex";
        carrec1.setAttribute("fill", "#5A7EF7");
        carrec1.setAttribute("stroke", "black");
        carrec2.setAttribute("fill", "none");
        carrec2.setAttribute("stroke", "transparent");
        carrec3.setAttribute("fill", "none");
        carrec3.setAttribute("stroke", "transparent");
    }
});

c1.addEventListener("click", () => {
    if (pPA.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/luffypixel1.jpg");
            img.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
            figure.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
            txt.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
            c1.className = "visible";
            c2.className = "nonvisible";
            carrec1.setAttribute("fill", "#5A7EF7");
            carrec1.setAttribute("stroke", "black");
            carrec2.setAttribute("fill", "none");
            carrec2.setAttribute("stroke", "transparent");
        }
    }
    if (pLogo.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/logo-ec1.jpg");
            img.setAttribute("alt", "Mockup de mon propre logo créer à partir de mes initiales E et C");
            figure.setAttribute("figcaption", "Mockup de mon propre logo créer à partir de mes initiales E et C")
            txt.textContent = "Mockup de mon propre logo créer à partir de mes initiales E et C";
            c1.className = "visible";
            c2.className = "nonvisible";
            carrec1.setAttribute("fill", "#5A7EF7");
            carrec1.setAttribute("stroke", "black");
            carrec2.setAttribute("fill", "none");
            carrec2.setAttribute("stroke", "transparent");
        }
    }
    if (pCartes.classList.contains("active")) {
        if (c1.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/cartes1.webp");
            img.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
            figure.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne")
            txt.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c1.className = "visible";
            c2.className = "nonvisible";
            c3.className = "nonvisible";
            carrec1.setAttribute("fill", "#5A7EF7");
            carrec1.setAttribute("stroke", "black");
            carrec2.setAttribute("fill", "none");
            carrec2.setAttribute("stroke", "transparent");
            carrec3.setAttribute("fill", "none");
            carrec3.setAttribute("stroke", "transparent");
        }
    }
});

c2.addEventListener("click", () => {
    if (pPA.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/luffypixel2.jpg");
            img.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
            figure.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
            txt.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
            c1.className = "nonvisible";
            c2.className = "visible";
            carrec1.setAttribute("fill", "transparent");
            carrec1.setAttribute("stroke", "none");
            carrec2.setAttribute("fill", "#5A7EF7");
            carrec2.setAttribute("stroke", "black");
        }
    }

    if (pLogo.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/logo-ec-global.webp");
            img.setAttribute("alt", "Divers objets et papèterie en ensemble avec mon logo, on y voit des lettres, cartes de visite, carnet, etc...");
            figure.setAttribute("figcaption", "Divers objets et papèterie en ensemble avec mon logo, on y voit des lettres, cartes de visite, carnet, etc...")
            txt.textContent = "Divers objets et papèterie en ensemble avec mon logo, réalisé en 2023";
            c1.className = "nonvisible";
            c2.className = "visible";
            carrec1.setAttribute("fill", "transparent");
            carrec1.setAttribute("stroke", "none");
            carrec2.setAttribute("fill", "#5A7EF7");
            carrec2.setAttribute("stroke", "black");
        }
    }
    if (pCartes.classList.contains("active")) {
        if (c2.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/cartes2.webp");
            img.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
            figure.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne")
            txt.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c1.className = "nonvisible";
            c2.className = "visible";
            c3.className = "nonvisible";
            carrec1.setAttribute("fill", "transparent");
            carrec1.setAttribute("stroke", "none");
            carrec2.setAttribute("fill", "#5A7EF7");
            carrec2.setAttribute("stroke", "black");
            carrec3.setAttribute("fill", "none");
            carrec3.setAttribute("stroke", "transparent");
        }
    }
});


c3.addEventListener("click", () => {
    if (pCartes.classList.contains("active")) {
        if (c3.classList.contains("nonvisible")) {
            img.setAttribute("src", "img/cartes3.webp");
            img.setAttribute("alt", "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit celles des cartes : la mère des loup, le diable, evil cupidon, la voyante, la sorc!ère ainsi que l'ivrogne");
            figure.setAttribute("figcaption", "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit celles des cartes : la mère des loup, le diable, evil cupidon, la voyante, la sorc!ère ainsi que l'ivrogne")
            txt.textContent = "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c1.className = "nonvisible";
            c2.className = "nonvisible";
            c3.className = "visible";
            carrec1.setAttribute("fill", "none");
            carrec1.setAttribute("stroke", "transparent");
            carrec2.setAttribute("fill", "none");
            carrec2.setAttribute("stroke", "none");
            carrec3.setAttribute("fill", "#5A7EF7");
            carrec3.setAttribute("stroke", "black");
        }
    }
});


let pJett2 = document.getElementById("pJett2");
let pPA2 = document.getElementById("pPA2");
let pLogo2 = document.getElementById("pLogo2");
let pCartes2 = document.getElementById("pCartes2");

let c12 = document.getElementById("c12");
let c22 = document.getElementById("c22");
let c32 = document.getElementById("c32");

let img2 = document.getElementsByTagName("img")[1];
let txt2 = document.getElementById("img-txt2");
let figure2 = document.getElementById("figure-ai2");

let textc12 = document.getElementById("c1-h32");
let textc22 = document.getElementById("c2-h32");
let textc32 = document.getElementById("c3-h32");

let carrec12 = document.getElementById("carre-c12");
let carrec22 = document.getElementById("carre-c22");
let carrec32 = document.getElementById("carre-c32");

pJett2.addEventListener("click", () => {
    if (pJett2.className == "inactive") {
        pJett2.className = "active";
        pPA2.className = "inactive";
        pLogo2.className = "inactive";
        pCartes2.className = "inactive";
        img2.setAttribute("src", "img/jett.webp");
        img2.setAttribute("alt", "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023, on y voit ce personnage aux cheveux blanc dans un fond sombre")
        figure2.setAttribute("figcaption", "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023, on y voit ce personnage aux cheveux blanc dans un fond sombre");
        txt2.textContent = "Illustration vectorielle du personnage 'Jett' de Valorant, réalisé en 2023";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        textc12.textContent = "img2";
        c22.style.display = "none";
        c32.style.display = "none";
        carrec12.setAttribute("fill", "#5A7EF7");
        carrec12.setAttribute("stroke", "black");
        carrec22.setAttribute("fill", "none");
        carrec22.setAttribute("stroke", "transparent");
        carrec32.setAttribute("fill", "none");
        carrec32.setAttribute("stroke", "transparent");
    }
});

pPA2.addEventListener("click", () => {
    if (pPA2.className == "inactive") {
        pJett2.className = "inactive";
        pPA2.className = "active";
        pLogo2.className = "inactive";
        pCartes2.className = "inactive";
        img2.setAttribute("src", "img/luffypixel1.jpg");
        img2.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
        figure2.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
        txt2.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        textc12.textContent = "luffy";
        textc22.textContent = "luffy zoom";
        c22.style.display = "flex";
        c32.style.display = "none";
        carrec12.setAttribute("fill", "#5A7EF7");
        carrec12.setAttribute("stroke", "black");
        carrec22.setAttribute("fill", "none");
        carrec22.setAttribute("stroke", "transparent");
        carrec32.setAttribute("fill", "none");
        carrec32.setAttribute("stroke", "transparent");
    }
});

pLogo2.addEventListener("click", () => {
    if (pLogo2.className == "inactive") {
        pJett2.className = "inactive";
        pPA2.className = "inactive";
        pLogo2.className = "active";
        pCartes2.className = "inactive";
        img2.setAttribute("src", "img/logo-ec1.jpg");
        img2.setAttribute("alt", "Mockup de mon propre logo créer à partir de mes initiales E et C");
        figure2.setAttribute("figcaption", "Mockup de mon propre logo créer à partir de mes initiales E et C");
        txt2.textContent = "Mockup de mon propre logo créer à partir de mes initiales E et C";
        c12.className = "visible";
        c22.className = "nonvisible";
        textc12.textContent = "Logo";
        textc22.textContent = "Divers";
        c22.style.display = "flex";
        c32.style.display = "none";
        carrec12.setAttribute("fill", "#5A7EF7");
        carrec12.setAttribute("stroke", "black");
        carrec22.setAttribute("fill", "none");
        carrec22.setAttribute("stroke", "transparent");
        carrec32.setAttribute("fill", "none");
        carrec32.setAttribute("stroke", "transparent");
    }
});

pCartes2.addEventListener("click", () => {
    if (pCartes2.className == "inactive") {
        pJett2.className = "inactive";
        pPA2.className = "inactive";
        pLogo2.className = "inactive";
        pCartes2.className = "active";
        img2.setAttribute("src", "img/cartes1.webp");
        img2.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
        figure2.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
        txt2.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
        c12.className = "visible";
        c22.className = "nonvisible";
        c32.className = "nonvisible";
        textc12.textContent = "Cartes 1";
        textc22.textContent = "Cartes 2";
        textc32.textContent = "Images";
        c22.style.display = "flex";
        c32.style.display = "flex";
        carrec12.setAttribute("fill", "#5A7EF7");
        carrec12.setAttribute("stroke", "black");
        carrec22.setAttribute("fill", "none");
        carrec22.setAttribute("stroke", "transparent");
        carrec32.setAttribute("fill", "none");
        carrec32.setAttribute("stroke", "transparent");
    }
});

c12.addEventListener("click", () => {
    if (pPA2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/luffypixel1.jpg");
            img2.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
            figure2.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
            txt2.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
            c12.className = "visible";
            c22.className = "nonvisible";
            carrec12.setAttribute("fill", "#5A7EF7");
            carrec12.setAttribute("stroke", "black");
            carrec22.setAttribute("fill", "none");
            carrec22.setAttribute("stroke", "transparent");
        }
    }
    if (pLogo2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/logo-ec1.jpg");
            img2.setAttribute("alt", "Mockup de mon propre logo créer à partir de mes initiales E et C");
            figure2.setAttribute("figcaption", "Mockup de mon propre logo créer à partir de mes initiales E et C")
            txt2.textContent = "Mockup de mon propre logo créer à partir de mes initiales E et C";
            c12.className = "visible";
            c22.className = "nonvisible";
            carrec12.setAttribute("fill", "#5A7EF7");
            carrec12.setAttribute("stroke", "black");
            carrec22.setAttribute("fill", "none");
            carrec22.setAttribute("stroke", "transparent");
        }
    }
    if (pCartes2.classList.contains("active")) {
        if (c12.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/cartes1.webp");
            img2.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
            figure2.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne")
            txt2.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c12.className = "visible";
            c22.className = "nonvisible";
            c32.className = "nonvisible";
            carrec12.setAttribute("fill", "#5A7EF7");
            carrec12.setAttribute("stroke", "black");
            carrec22.setAttribute("fill", "none");
            carrec22.setAttribute("stroke", "transparent");
            carrec32.setAttribute("fill", "none");
            carrec32.setAttribute("stroke", "transparent");
        }
    }
});

c22.addEventListener("click", () => {
    if (pPA2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/luffypixel2.jpg");
            img2.setAttribute("alt", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023");
            figure2.setAttribute("figcaption", "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023")
            txt2.textContent = "Pixel art vectorielle de l'avis de recherche de Mugiwara no Luffy de One Piece, réalisé en 2023";
            c12.className = "nonvisible";
            c22.className = "visible";
            carrec12.setAttribute("fill", "transparent");
            carrec12.setAttribute("stroke", "none");
            carrec22.setAttribute("fill", "#5A7EF7");
            carrec22.setAttribute("stroke", "black");
        }
    }

    if (pLogo2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/logo-ec-global.webp");
            img2.setAttribute("alt", "Divers objets et papèterie en ensemble avec mon logo, on y voit des lettres, cartes de visite, carnet, etc...");
            figure2.setAttribute("figcaption", "Divers objets et papèterie en ensemble avec mon logo, on y voit des lettres, cartes de visite, carnet, etc...")
            txt2.textContent = "Divers objets et papèterie en ensemble avec mon logo, réalisé en 2023";
            c12.className = "nonvisible";
            c22.className = "visible";
            carrec12.setAttribute("fill", "transparent");
            carrec12.setAttribute("stroke", "none");
            carrec22.setAttribute("fill", "#5A7EF7");
            carrec22.setAttribute("stroke", "black");
        }
    }
    if (pCartes2.classList.contains("active")) {
        if (c22.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/cartes2.webp");
            img2.setAttribute("alt", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne");
            figure2.setAttribute("figcaption", "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit plusieurs nouveaux roles tel que La mère des lous, le diable ou encore l'ivrogne")
            txt2.textContent = "Extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c12.className = "nonvisible";
            c22.className = "visible";
            c32.className = "nonvisible";
            carrec12.setAttribute("fill", "transparent");
            carrec12.setAttribute("stroke", "none");
            carrec22.setAttribute("fill", "#5A7EF7");
            carrec22.setAttribute("stroke", "black");
            carrec32.setAttribute("fill", "none");
            carrec32.setAttribute("stroke", "transparent");
        }
    }
});


c32.addEventListener("click", () => {
    if (pCartes2.classList.contains("active")) {
        if (c32.classList.contains("nonvisible")) {
            img2.setAttribute("src", "img/cartes3.webp");
            img2.setAttribute("alt", "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit celles des cartes : la mère des loup, le diable, evil cupidon, la voyante, la sorc!ère ainsi que l'ivrogne");
            figure2.setAttribute("figcaption", "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023, on y voit celles des cartes : la mère des loup, le diable, evil cupidon, la voyante, la sorc!ère ainsi que l'ivrogne")
            txt2.textContent = "Illustrations de l'extention fictive du jeu de cartes Les Loups-garous de Thiercelieux, réalisé en 2023";
            c12.className = "nonvisible";
            c22.className = "nonvisible";
            c32.className = "visible";
            carrec12.setAttribute("fill", "none");
            carrec12.setAttribute("stroke", "transparent");
            carrec22.setAttribute("fill", "none");
            carrec22.setAttribute("stroke", "none");
            carrec32.setAttribute("fill", "#5A7EF7");
            carrec32.setAttribute("stroke", "black");
        }
    }
});

