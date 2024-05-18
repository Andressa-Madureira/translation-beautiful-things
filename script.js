document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "./assets/pexels-tomas-anunziata-129267-3876453.jpg",
        "./assets/pexels-sheikh-basim-664884875-18419151.jpg", 
        "./assets/pexels-mododeolhar-5241772.jpg",
        "./assets/pexels-ggzadam-2894948 (1).jpg",
        "./assets/pexels-pixabay-206359.jpg",
        "./assets/pexels-renan-lima-1322164-3364026.jpg",
    ];
    var currentIndex = 0;
    var duration = 10000; 

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


const music = new Audio ('./assets/Benson Boone - Beatiful Things (lyrics). (320).mp3') 
const audioPlayer = document.getElementById("audioPlayer")

audioPlayer.addEventListener('click', playBackgroundMusic)




function playBackgroundMusic() {
    audioPlayer.play();
}

function pauseBackgroundMusic() {
    audioPlayer.pause();
}


playBackgroundMusic();
