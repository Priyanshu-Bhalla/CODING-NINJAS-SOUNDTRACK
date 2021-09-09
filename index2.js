const music = document.querySelector("audio");
const play = document.querySelector('.play_btn');


let isPlaying = false;

//play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
};

//pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
};

play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

//progressbar work
let progress = document.getElementById('progress_upperbar');
music.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.target;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    //setting end time
    let total_duration = document.getElementById('end_time')
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    let tot_duration = `${min_duration}:${sec_duration}`;

    total_duration.textContent = tot_duration;

    //setting starting time
    let start_time = document.getElementById('start_time');
    let start_min = Math.floor(currentTime / 60);
    let start_sec = Math.floor(currentTime % 60);
    let tot_start;
    if (start_sec < 10) {
        tot_start = `${start_min}:0${start_sec}`;
    }
    else {
        tot_start = `${start_min}:${start_sec}`;
    }

    start_time.textContent = tot_start;
});




let sinlgeArtist = document.querySelector('.song_list');


sinlgeArtist.addEventListener("click", () => {
    playMusic();
})

