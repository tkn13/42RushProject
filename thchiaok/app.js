let btn = document.getElementById("magic-btn");
let hidden_btn = document.getElementById("hidden-btn");
let name  = document.getElementById("myName");
let name2 = "Thaksin Chiaokon";
let arrName = name2.split("");

let img1 = "img/m1.png";
let img2 = "img/m2.png";
let img3 = "img/m3.png";
let imgArr = [img1, img2, img3];
let img = document.getElementById("simpson-img");
let n = 0;

btn.addEventListener("click", function () {
    name.innerHTML = "";
  
    img.src = imgArr[++n%imgArr.length];

    if((n+1)%imgArr.length == 0){
        hidden_btn.style.display = "block";
    }else{
        hidden_btn.style.display = "none";
    }

    for(let i = 0; i < arrName.length; i++){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let span = document.createElement("span");
        span.innerHTML = arrName[i];
        span.style.color = `rgb(${red}, ${green}, ${blue})`;
        name.appendChild(span);
    }
});