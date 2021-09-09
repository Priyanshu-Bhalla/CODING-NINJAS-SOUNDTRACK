const music = document.querySelector("audio");
const play = document.querySelector('.play_btn');



let isPlaying = false;

//play function
const playMusic = () => {
    music.play();
    isPlaying = true;
    play.classList.replace("fa-play", "fa-pause");
};

//pause function
const pauseMusic = () => {
    music.pause();
    isPlaying = false;
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
    console.log(event);
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


//carousel section
const track = document.querySelector('.carousel_tracker');
const slides = Array.from(track.children);
console.log(slides);
const prev = document.querySelector('.btn_left');
const next = document.querySelector('.btn_right');
const sizeOfWidth = slides[0].getBoundingClientRect().width;
console.log(sizeOfWidth);

//arrange the slides next to each other
const slidePosition = (element, index) => {
    element.style.left = sizeOfWidth * index + 'px';
}
slides.forEach(slidePosition);

//move the slide function
const moveTOSLide = (track, current_slide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    current_slide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}
//click on left button to move slide left
prev.addEventListener('click', e => {
    const current_slide = track.querySelector('.current-slide');
    const prev_slide = current_slide.previousElementSibling;

    moveTOSLide(track, current_slide, prev_slide);
})


//click on right button to move slide right
next.addEventListener('click', e => {
    const current_slide = track.querySelector('.current-slide');
    const next_slide = current_slide.nextElementSibling;

    moveTOSLide(track, current_slide, next_slide);
});


//card section
let Ncard = document.querySelector('.normal_cards');
let playlist = document.querySelector('.playlist');



function cardDetails([image, title, name]) {
    let code = `
    <div class="card">
     <img src="${image}" alt="img">
     <h3>${title}
        <br><small>${name}</small>
     </h3>
    </div>
`
    Ncard.innerHTML += code;
}

let card1 = ["images/myplaylist_img3.jpg", "Alec Benjamin", "Water Fountain"];
cardDetails(card1);
let card2 = ["images/myplaylist_img2.jpg", "Harry Style", "Sweet Creature"];
cardDetails(card2);
let card3 = ["images/myplaylist_img4.jpg", "Zayn Malik", "Tight Rope"];
cardDetails(card3);
let card5 = ["images/myplaylist_img5.jpg", "Alec Benjamin", "Water Fountain"];
cardDetails(card5);
let card4 = ["images/myplaylist_img3.jpg", "Conoan Gray", "OverDrive"];
cardDetails(card4);
let card6 = ["images/myplaylist_img2.jpg", "Harry Style", "Sweet Creature"];
cardDetails(card6);
let card8 = ["images/myplaylist_img5.jpg", "Conoan Gray", "OverDrive"];
cardDetails(card8);
let card7 = ["images/myplaylist_img4.jpg", "Zayn Malik", "Tight Rope"];
cardDetails(card7);
let card10 = ["images/myplaylist_img2.jpg", "Harry Style", "Sweet Creature"];
cardDetails(card10);
let card9 = ["images/myplaylist_img3.jpg", "Alec Benjamin", "Water Fountain"];
cardDetails(card9);
let card11 = ["images/myplaylist_img4.jpg", "Zayn Malik", "Tight Rope"];
cardDetails(card11);
let card12 = ["images/myplaylist_img5.jpg", "Conoan Gray", "OverDrive"];
cardDetails(card12);
let card16 = ["images/myplaylist_img2.jpg", "Alec Benjamin", "Water Fountain"];
cardDetails(card16);
let card14 = ["images/myplaylist_img4.jpg", "Zayn Malik", "Tight Rope"];
cardDetails(card14);
let card15 = ["images/myplaylist_img5.jpg", "Conoan Gray", "OverDrive"];
cardDetails(card15);
let card13 = ["images/myplaylist_img3.jpg", "Alec Benjamin", "Water Fountain"];
cardDetails(card13);

Ncard.addEventListener("click", () => {
    playMusic();
});

playlist.addEventListener("click", () => {
    playMusic();
});


