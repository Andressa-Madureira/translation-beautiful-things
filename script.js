document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "./assets/pexels-tomas-anunziata-129267-3876453.jpg",
        "./assets/pexels-sheikh-basim-664884875-18419151.jpg", // Adicione o caminho para suas outras imagens aqui
        "./assets/pexels-mododeolhar-5241772.jpg",
        "./assets/pexels-ggzadam-2894948 (1).jpg",
        "./assets/pexels-pixabay-206359.jpg",
        "./assets/pexels-renan-lima-1322164-3364026.jpg",
    ];
    var currentIndex = 0;
    var duration = 10000; // Intervalo de troca de imagem em milissegundos

    var parallax = document.querySelector('.parallax');

    function changeBackground() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        parallax.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    }

    setInterval(changeBackground, duration);
});
