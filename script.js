


// document.addEventListener("DOMContentLoaded", function () {

// });


const logBtn = document.querySelector(".btn");
const formContainer = document.querySelector(".formContainer");
const hider = document.querySelector(".xmark");
const blurEffect =  document.getElementById("blurBackground");

logBtn.addEventListener("click", () => {
    formContainer.classList.add("popupShow")
    blurEffect.style.display = "block";
});

hider.addEventListener("click", () => {
    formContainer.classList.remove("popupShow")
    blurEffect.style.display = "none";
})



async function fetchData() {
    const resp = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const data = await resp.json();
    // console.log(data);
    var container = "";
    data.forEach((item) => {
      container += `
      <div class="cards" id=${item.id}>
              <img src=${item.imgSrc} width="200px" height="100px"
              alt="food image" />
              <div class="priceName">
                <div class="price">
                  <h3>${item.name}</h3>
                  <p>$${item.price}/-</p>
                </div>
                <div class="addCart">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>`;

    



    });
    // console.log(container);
    document.querySelector(".cardsContainer").innerHTML = container;
  }
  
  fetchData();
  