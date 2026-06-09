let v1 = document.getElementById("video1");
let v2 = document.getElementById("video2");

let iframe = document.getElementsByTagName("iframe")[0];

let pph2 = document.getElementById("pph2");

v1.addEventListener("click", () => {
    v1.className = "active";
    v2.className = "inactive";
    iframe.setAttribute("src", "https://www.youtube.com/embed/fzEkRmmfo9g?si=Mi4rORUBv0k6p2M9");
    pph2.textContent = v1.textContent;
});

v2.addEventListener("click", () => {
    v1.className = "inactive";
    v2.className = "active";
    iframe.setAttribute("src", "https://www.youtube.com/embed/YZuSCUttyX4?si=1l4ATnJJPtdSZX6V");
    pph2.textContent = v2.textContent;
});


let v12 = document.getElementById("video12");
let v22 = document.getElementById("video22");

let iframe2 = document.getElementsByTagName("iframe")[1];

let pph22 = document.getElementById("pph22");

v12.addEventListener("click", () => {
    v12.className = "active";
    v22.className = "inactive";
    iframe2.setAttribute("src", "https://www.youtube.com/embed/fzEkRmmfo9g?si=Mi4rORUBv0k6p2M9");
    pph22.textContent = v12.textContent;
});

v22.addEventListener("click", () => {
    v12.className = "inactive";
    v22.className = "active";
    iframe2.setAttribute("src", "https://www.youtube.com/embed/YZuSCUttyX4?si=1l4ATnJJPtdSZX6V");
    pph22.textContent = v22.textContent;
});

