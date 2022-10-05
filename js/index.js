
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

//toggler

const navLinks = document.getElementById("navbar-opened")
const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
// const togglePlus = document.getElementById("toggle-plus")
// const toggleMinus = document.getElementById("toggle-minus")

openNav.addEventListener('click', () => {
    navLinks.classList.add('navbar-toggler-opened');
    openNav.classList.add('display-off');
    closeNav.classList.remove('display-off')
    // closeNav.classList.add('display-on');
    // openNav.classList.remove('display-on')
})

closeNav.addEventListener('click', () => {
    navLinks.classList.remove('navbar-toggler-opened');
    openNav.classList.remove('display-off');
    closeNav.classList.add('display-off');
    // closeNav.classList.add('display-off')
})

