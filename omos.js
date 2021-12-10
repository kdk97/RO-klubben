//video transitions
function videoHandler(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry
                .target
                .play();
        } else {
            entry
                .target
                .pause();
        }
    }
}

const videoObserver = new IntersectionObserver(videoHandler)
const video1 = document.getElementById("video-1");
videoObserver.observe(video1);


// img
function handler(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry
                .target
                .classList
                .add("transition");
        } else {
            entry
                .target
                .classList
                .remove("transition")
        }
    }
}
const observer = new IntersectionObserver(handler, { threshold: 0.1 });

const transitionImages = document.querySelectorAll(".transition-images");
for (const img of transitionImages) {
    img
        .classList
        .add("fade-scale-in");
    observer.observe(img);
}