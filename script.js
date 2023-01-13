
const btn = document.querySelector(".btnRodar");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const image = document.querySelector("#image");
const video = document.querySelector("#video");


btn.addEventListener("click", function() {
    
    if (video.style.display === "none" && image.style.display === "block") {
        open.style.display = "none"
        close.style.display = "block";
        video.style.display = "block";
        image.style.display = "none";
    }
    else{
        close.style.display = "none";
        video.style.display = "none";
        image.style.display = "block";
        
    }    
});