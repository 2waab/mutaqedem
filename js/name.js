let User = {
    name: "",
    map: "",
    mapAway,
};

let userName = document.querySelector("#user-name");
let mapName = document.querySelector("#nam-map");
let btn = document.querySelector("#btn");
let popup = document.querySelector("#btn-popup");

btn.onclick = () => {
    if (userName.value === "" || mapName.value === "") {
        popup.click();
    } else {
        User.name = userName.value;
        User.map = mapName.value;
        console.log(User);
        window.localStorage.setItem("userInfo", JSON.stringify(User));
    };
};
