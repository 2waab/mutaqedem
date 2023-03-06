let links = document.querySelectorAll(".navbar-nav li a");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(a => {
            a.classList.remove("active");
            link.classList.add("active");
        });
    });
});