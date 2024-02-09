// let loader = document.getElementById("loader");
// window.addEventListener("load", function () {
//     loader.style.display = "none"
// });


function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to(".boundinglem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .3

    })
    tl.from("#herofooter", {
        y: '10',
        opacity: 0,
        duration: 0.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
firstPageAnim();

//for time-----------

let Hr = document.getElementById('Hr');
let Mn = document.getElementById('Mn');
let Ss = document.getElementById('Ss');
  

Hr.innerText = new Date();


// setInterval(() => {
//     let Mydate = new Date();
//     Hr.innerHTML = Mydate.getHours();
//     Mn.innerHTML = Mydate.getMinutes();
//     Ss.innerHTML = Mydate.getSeconds();
// }, 1000)

//---------------------------------------------------

// Function to show the div
function showDiv() {
    document.getElementById('loader').style.display = 'block';
  

}

// Function to hide the div
function hideDiv() {
    document.getElementById('loader').style.display = 'none';
   
   
}

// Show the div after 5 seconds
setTimeout(showDiv, 1000);

// Hide the div after 10 seconds (5 seconds show time + 5 seconds delay)
setTimeout(hideDiv, 2000);