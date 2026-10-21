
const photoCards = document.querySelectorAll(".photo-card");

// Klik polaroid untuk membalik kartu
photoCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
})

//PEMUTAR MUSIK
const music = new Audio("Here With Me.mp3");
music.loop = true;

const playButton = document.querySelector(".play-button");
const vinyl = document.querySelector(".vinyl");

if (playButton && vinyl) {
    playButton.textContent = "▶ Play";

    playButton.addEventListener("click", async () => {
        if(music.paused) {
            try {
                await music.play();

                vinyl.classList.add("is-playing");
                playButton.textContent = "Ⅱ Pause";
            } catch (error) {
                vinyl.classList.remove("is-playing");
                playButton.textContent = "▶ Play";

                alert(
                    "Music belum bisa diputar. Cek file audio dan nama foldernya, ya!");

            console.error("Gagal memutar audio:", error);
        }
    } else {
        music.pause();

        vinyl.classList.remove("is-playing");
        playButton.textContent = "▶ Play";
    }
    });
}
