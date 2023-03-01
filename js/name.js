let User = {
    name: "",
    map: "",
    gender: "",
};

let userName = document.querySelector("#user-name");
let mapName = document.querySelector("#nam-map");
let btn = document.querySelector("#btn");
let popup = document.querySelector("#btn-popup");
let gender = document.querySelectorAll(".gender .box");

gender.forEach(btn => {
    btn.addEventListener("click", () => {
        gender.forEach(e => {
            e.classList.remove("active");
        });
        btn.classList.add("active");
    });
});

btn.onclick = () => {
    if (userName.value === "" || mapName.value === "") {
        popup.click();
    } else {
        User.name = userName.value;
        User.map = mapName.value;
        gender.forEach(btn => {
            if (btn.classList.contains("active") && btn.classList.contains("male")) {
                User.gender = "male";
            } else if (btn.classList.contains("active") && btn.classList.contains("female")) {
                User.gender = "female";
            };
        });
        window.localStorage.setItem("userInfo", JSON.stringify(User));
        btn.href = "mapaway.html";
    };
};
