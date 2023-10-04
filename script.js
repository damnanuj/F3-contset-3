


// document.addEventListener("DOMContentLoaded", function () {

// });


const logBtn = document.querySelector(".btn");
const formContainer = document.querySelector(".formContainer");
const hider =document.querySelector(".xmark");

logBtn.addEventListener("click", () => {
    formContainer.classList.add("popupShow")
});

hider.addEventListener("click", () => {
    formContainer.classList.remove("popupShow")
})