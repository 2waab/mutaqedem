let user = JSON.parse(window.localStorage.getItem("userInfo"));
let nameUser = document.querySelector(".welcome h4 span");
let mapName = document.querySelector(".welcome p span");
let mapLine = document.querySelector(".form-control");
let next = document.querySelector(".next");
let popup = document.querySelector("#btn-popup");
let contentBox = document.querySelector(".line .container");
let lineObject = [];

nameUser.textContent = user.name;
mapName.textContent = user.map;

next.addEventListener("click", () => {
    contentBox.innerHTML = "";
    if (mapLine.value === "" || mapLine.value <= 0) {
        popup.click();
    } else {
        user.mapAwayNum = mapLine.value;
        for (let i = 0; i < mapLine.value; i++) {
            let box = document.createElement("div");
            box.className = "box my-3 p-3 bg-secondary-subtle rounded";
            box.id = `${i}`;
            box.id = i;
            box.innerHTML = `
                <h5 class="fw-bold mb-3">المسار #${i + 1}</h5>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">إسم المسار</label>
                    <input id="${i}" type="text" class="form-control title" id="formGroupExampleInput" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">عدد الدروس فيه</label>
                    <input id="${i}" type="number" class="form-control number-of-line" id="formGroupExampleInput2" />
                </div>
            `;
            contentBox.appendChild(box);
            let userLine = {
                id: i
            };
            lineObject.push(userLine);
        };
        let btn = document.createElement("a");
        btn.className = "btn btn-primary my-3";
        btn.href = "dashborad.html";
        btn.textContent = "الإنتقال لصفحة المعلومات";
        contentBox.appendChild(btn);
        btn.addEventListener("click", () => {
            let titles = Array.from(document.querySelectorAll(".box .title"));
            let nums = Array.from(document.querySelectorAll(".box .number-of-line"));
            for (let i = 0; i < lineObject.length; i++) {
                if (lineObject[i].id == titles[i].id) {
                    if (titles[i].value == "") {
                        document.querySelector(".modal-body").textContent = "يبدو أن هناك حقلا فارغا";
                        popup.click();
                    } else {
                        lineObject[i].title = titles[i].value;
                    };
                };
                if (lineObject[i].id == nums[i].id) {
                    if (nums[i].value == "") {
                        document.querySelector(".modal-body").textContent = "يبدو أن هناك حقلا فارغا";
                        popup.click();
                    } else {
                        lineObject[i].num = nums[i].value;
                    };
                };
            };
            user.mapAway = lineObject;
            window.localStorage.setItem("userInfo", JSON.stringify(user));
            console.log(JSON.parse(window.localStorage.getItem("userInfo")));
        });
    };
});