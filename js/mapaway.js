let user = JSON.parse(window.localStorage.getItem("userInfo"));
let nameUser = document.querySelector(".welcome h4 span");
let mapName = document.querySelector(".welcome p span");
let mapLine = document.querySelector(".form-control");
let next = document.querySelector(".next");
let popup = document.querySelector("#btn-popup");

nameUser.textContent = user.name;
mapName.textContent = user.map;

next.addEventListener("click", () => {
    if (mapLine.value === "" || mapLine.value <= 0) {
        popup.click();
    } else {
        user.mapAway = mapLine.value;
        window.localStorage.setItem("userInfo", JSON.stringify(user));
    };
});