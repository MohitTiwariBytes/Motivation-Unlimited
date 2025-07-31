document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const notice = document.querySelector(".notice");
    const closeBtn = document.getElementById("close");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        notice.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        notice.classList.remove("active");
    });
});
