const videoObserver = new IntersectionObserver(videoHandler)
const video1 = document.getElementById("video-1");
videoObserver.observe(video1);
