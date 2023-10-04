


// document.addEventListener("DOMContentLoaded", function () {

// });


const logBtn = document.querySelector(".btn");
const formContainer = document.querySelector(".formContainer");
const hider =document.querySelector(".xmark");
const blurEffect =  document.getElementById("blurBackground");

logBtn.addEventListener("click", () => {
    formContainer.classList.add("popupShow")
    blurEffect.style.display = "block";
});

hider.addEventListener("click", () => {
    formContainer.classList.remove("popupShow")
    blurEffect.style.display = "none";
})

