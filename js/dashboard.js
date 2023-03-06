let name = document.querySelector(".user-info h4");
let courssName = document.querySelector(".user-info .text p");
let imageUser = document.querySelector("img");
let boximg = document.querySelector(".image");
let user = JSON.parse(window.localStorage.getItem("userInfo"));

console.log(user);

name.textContent = user.name;
courssName.textContent = user.map;
if (user.gender == "female") {
    imageUser.src = "img/AVATARZ - Lady with squared eyeglasses.svg";
    boximg.classList.add("fe");
}