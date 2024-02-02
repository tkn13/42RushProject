let real = document.getElementById("real");
let gent = document.getElementById("gent");
let dropdown = document.getElementById("Dropdown");

real.addEventListener("mouseover", function () {
    gent.classList.add("small");
});

real.addEventListener("mouseleave", function () {
    gent.classList.remove("small");
});

gent.addEventListener("mouseover", function () {
    real.classList.add("small");
});

gent.addEventListener("mouseleave", function () {
    real.classList.remove("small");
});

dropdown.addEventListener("click", function () {
    dropdown.classList.add("show");
    console.log("show");
});