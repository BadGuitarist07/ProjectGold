// Agrega este código en tu archivo JS
window.onscroll = function() {
    showScrollTopButton();
};

function showScrollTopButton() {
    var button = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
        button.style.opacity = "1";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}
