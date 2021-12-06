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



document.getElementById("video-1").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("video-1").addEventListener("mouseleave", function() {
	this.pause();
});

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
const observer = new IntersectionObserver(handler, {threshold: 0.1});

const img = document.getElementById("image-1");
img
    .classList
    .add("fade-scale-in");
observer.observe(img);