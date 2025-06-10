const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');
const prev = document.getElementById('arrowIcon1');
const next = document.getElementById('arrowIcon2');
const slider = document.getElementById('slider');
const content = document.getElementById('content');

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');

// Only hide links on small screens initially
if (window.innerWidth <= 768) {
    navLinks.style.display = "none";
}

function changeMenu(){
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-close');
    if(navLinks.style.display === "none"){
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
}

menuIcon.addEventListener("click", changeMenu);

// Handle window resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-close');
    } else {
        navLinks.style.display = "none";
    }
});

menuIcon.addEventListener("click",changeMenu);

let countItem = 5;
let countActive = 1;

function moveSliderRight(){
    countActive++;
    if(countActive>countItem) countActive = 1;
    console.log(countActive);
    changeSlider();
}

function moveSliderLeft(){
    countActive--;
    if(countActive<1) countActive = countItem;
    console.log(countActive);
    changeSlider();
}

function changeSlider(){
    if(item1.classList.contains('active')){
        item1.classList.remove('active');
    }
    else if(item2.classList.contains('active')){
        item2.classList.remove('active');
    }
    else if(item3.classList.contains('active')){
        item3.classList.remove('active');
    }
    else if(item4.classList.contains('active')){
        item4.classList.remove('active');
    }
    else if(item5.classList.contains('active')){
        item5.classList.remove('active');
    }

    const activeEl = document.getElementById("item"+countActive);
    activeEl.classList.add('active');
    slider.style.backgroundImage = "url('Images/img"+countActive+".jpg')";
    document.getElementById('slider-head').textContent = "Slider 0"+countActive;
    content.style.animation = "none";
    content.style.animation = "contentDisplay .5s .7s ease-in-out 1 forwards";

}

item1.addEventListener('click',changeSlider);
item2.addEventListener('click',changeSlider);
item3.addEventListener('click',changeSlider);
item4.addEventListener('click',changeSlider);
item5.addEventListener('click',changeSlider);

next.addEventListener('click', moveSliderRight);
prev.addEventListener('click',moveSliderLeft);