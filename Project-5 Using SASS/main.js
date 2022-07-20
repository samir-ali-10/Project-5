let modal = document.querySelector(".modal");
let openM = document.querySelectorAll(".our-players .players-cont .player-box img");
let closeM = document.querySelector(".our-players .players-cont .player-box .modal i");


openM.forEach(openMo => {
    openMo.addEventListener("click", () => {
        modal.showModal();
    })
})

closeM.addEventListener("click", () => {
    modal.close();
})


let navBtn = document.querySelector(".header .logo i");
let navBar = document.querySelector(".header .navbar");

navBtn.addEventListener("click", () => {
    navBar.classList.toggle("show");
})