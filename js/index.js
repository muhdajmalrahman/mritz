
// Select the HTML5 video
const video = document.querySelector("#videow")
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none"
//  document.querySelector(".pause").style.display = "none"
//  document.querySelector(".p-bytton-inner2").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if (video.ended) {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        document.querySelector(".play").src = "images/playWhite.svg"
        document.querySelector(".play").style.display = "block"
        document.querySelector(".p-button-inner").style.display = "block"

    }
    document.querySelector('.inner').style.width = `${curr}%`
})
// pause or play the video
const play = (e) => {
    // Condition when to play a video
    if (video.paused) {
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"

        document.querySelector(".play").src = "images/pause.svg"
        document.querySelector(".p-button-inner").style.display = "none"
        video.play()
    }
    else {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        document.querySelector(".play").style.display = "none"
        document.querySelector(".p-button-inner").style.display = "none"
        video.pause()
    }

}


const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}