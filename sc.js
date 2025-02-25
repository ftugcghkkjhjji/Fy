function showLoveLetter() {
    let letter = document.getElementById("love-letter");
    letter.classList.remove("hidden");
    letter.style.animation = "fadeIn 2s ease-in-out";
}

// Animasi munculnya surat
document.addEventListener("DOMContentLoaded", () => {
    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
