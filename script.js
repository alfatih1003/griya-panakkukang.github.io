const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document
        .getElementById("fullName").value.trim();

    const nickname = document
        .getElementById("nickname").value.trim();

    if (!fullName || !nickname) {
        alert("Isi dulu brooo 😹");
        return;
    }

    document.getElementById("welcomeName").textContent =
        nickname.toUpperCase();

    document.getElementById("register").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// GANTI TEMA HITAM-PUTIH

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌑 DARK MODE";
    } else {
        themeBtn.textContent = "🌙 LIGHT MODE";
    }

});

// KEMBALI KE REGISTRASI

function backToTop() {

    document.getElementById("home").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");

    document.getElementById("registerForm").reset();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}