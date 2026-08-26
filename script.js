// ========================================
// Cyber Forensics Website JavaScript
// ========================================

// Welcome Message
window.onload = function () {
    console.log("Cyber Forensics Website Loaded Successfully");
};

// ========================================
// Navbar Active Link
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#00e5ff";
        link.style.fontWeight = "bold";
    }
});

// ========================================
// Animated Statistics Counter
// ========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ========================================
// Progress Bar Animation
// ========================================

const progressBar = document.querySelector(".progress-bar");

if(progressBar){

let width = 0;

let interval = setInterval(function(){

if(width >= 100){

clearInterval(interval);

}else{

width++;

progressBar.style.width = width + "%";
progressBar.innerHTML = width + "%";

}

},40);

}

// ========================================
// Contact Form Validation
// ========================================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name = document.querySelector("input[type=text]");

let email = document.querySelector("input[type=email]");

if(name.value==="" || email.value===""){

alert("Please fill all required fields.");

}else{

alert("Thank You! Your message has been submitted successfully.");

form.reset();

}

});

}

// ========================================
// Scroll to Top Button
// ========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00e5ff";
topBtn.style.color = "#08121f";
topBtn.style.fontWeight = "bold";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ========================================
// Typing Effect
// ========================================

const typing = document.getElementById("typing");

if(typing){

const text = "Digital Forensics | Secure Data Erasure | File Recovery | Evidence Integrity";

let i = 0;

function typeWriter(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

typeWriter();

}

// ========================================
// Button Click Effect
// ========================================

const buttons = document.querySelectorAll("button,.btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(){

this.style.transform="scale(0.95)";

setTimeout(()=>{

this.style.transform="scale(1)";

},150);

});

});

// ========================================
// Live Clock
// ========================================

const clock = document.getElementById("clock");

if(clock){

setInterval(()=>{

const now = new Date();

clock.innerHTML = now.toLocaleTimeString();

},1000);

}