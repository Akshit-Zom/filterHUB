let stars = document.getElementById('stars');
let room = document.getElementById('room');
let windows = document.getElementById('windows');
let moon = document.getElementById('moon');
let header= document.getElementById('header');
window.addEventListener('scroll', function()
{
    let value = window.scrollY;
    stars.style.left  =  value * 1.25  + 'px';
    windows.style.top =  value * 0.30  + 'px'; 
    moon.style.top =  value * 1.05  + 'px'; 
    header.style.top =  value * 0.15  + 'px';   
})


// Enable controls when hover over it
var video = document.getElementById("myvideo");

video.addEventListener("mouseover", function() {
  video.muted = false;
  video.controls = true;
  
});

        video.volume = 0.2;
  video.loop = true;
  video.muted = true;
  video.play();
