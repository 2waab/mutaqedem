let user = JSON.parse(window.localStorage.getItem("userInfo"));
let nameUser = document.querySelector(".welcome h4 span");
let mapName = document.querySelector(".welcome p span");
let mapLine = document.querySelector(".form-control");
let next = document.querySelector(".next");
let popup = document.querySelector("#btn-popup");
let contentBox = document.querySelector(".line .container");

nameUser.textContent = user.name;
mapName.textContent = user.map;

next.addEventListener("click", () => {
    if (mapLine.value === "" || mapLine.value <= 0) {
        popup.click();
    } else {
        user.mapAway = mapLine.value;
        window.localStorage.setItem("userInfo", JSON.stringify(user));
        for (let i = 0; i < mapLine.value; i++) {
            let box = document.createElement("div");
            box.className = "box my-3 p-3 bg-secondary-subtle rounded";
            box.innerHTML = `
                <h5 class="fw-bold mb-3">المسار #${i + 1}</h5>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">إسم المسار</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">عدد الدروس فيه</label>
                    <input type="number" class="form-control" id="formGroupExampleInput2" />
                </div>
            `;
            contentBox.appendChild(box);
        };
        let btn = document.createElement("a");
        btn.className = "btn btn-primary my-3";
        btn.href = "#";
        btn.textContent = "الإنتقال لصفحة المعلومات";
        contentBox.appendChild(btn);
    };
});
