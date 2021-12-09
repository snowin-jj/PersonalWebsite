// Preloader
var preloader = document.querySelector(".preloader");

window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear");    
    body.style.cursor = "none";
    body.style.overflow = "scroll";
    body.style.overflowX = "hidden";
    // AOS Animation initilization
    AOS.init({
        // disable: true,
        offset: 120,
        duration: 400
    });

    // Start Swiper js
    startSwiper()
    
}

// cursor customize
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-items li");
let btnContacts = document.querySelectorAll("#btnContact");
let mediaIcons = document.querySelectorAll(".media-icons i");
let arrowImage = document.querySelector(".arrow-img");
let arrowLink = document.querySelector(".arrow-link")
let gitHubLink = document.querySelector(".link-github");


document.body.addEventListener("mouseleave", () => {
    mouseCursor.style.display = "none";
})

document.body.addEventListener("mouseenter", () => {
    mouseCursor.style.display = "";
})

// Catch the cursor movements
document.body.addEventListener("mousemove", function(e) {

  var curX = e.clientX;
  var curY = e.clientY;

  mouseCursor.style.left = curX - 10 + 'px';
  mouseCursor.style.top = curY - 10 + 'px';
});

// OnHover and leave Effect (class adding..)
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    })
});

btnContacts.forEach(btnContact => {
    btnContact.addEventListener('mouseenter', () => {
        mouseCursor.style.display = "none";
    })
    
    btnContact.addEventListener('mouseleave', () => {
        mouseCursor.style.display = "";
    })
})

gitHubLink.addEventListener("mouseenter", () => {
    mouseCursor.style.display = "none";
})
gitHubLink.addEventListener('mouseleave', () => {
        mouseCursor.style.display = "";
})

mediaIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    })
    icon.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
    })
})

arrowLink.addEventListener("mouseenter", () => {
    mouseCursor.classList.add("link-grow");
})

arrowLink.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
})

// Swiper js function
function startSwiper() {

    // < !--Initialize Swiper-- >
    var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 40,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    var portfolioSwiper = new Swiper(".portfolio-swiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 40,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    
}

// Mobile nav toggle
const navToggle = document.querySelector(".mobile-nav-toggle")
const primaryNav = document.querySelector(".nav-items");
const primaryMobileNav = document.querySelectorAll(".m-link");
const svgOpen = document.querySelector(".menu-svg-open");
const svgClose = document.querySelector(".menu-svg-close");
const body = document.querySelector("body");

// Gets the window width
var windowWidth = screen.width;

function closeNavToggler() {
    svgOpen.style.display = "block";
    svgClose.style.display = "none";
    body.setAttribute('isScrollable', true)
    primaryNav.setAttribute('data-visible', false);
    svgOpen.setAttribute('data-change-color', false);
    navToggle.setAttribute('aria-expanded', false)
}

function openNavToggler() {
    svgOpen.style.display = "none";
    svgClose.style.display = "block";
    body.setAttribute('isScrollable', false)
    primaryNav.setAttribute('data-visible', true);
    svgOpen.setAttribute('data-change-color', true);
    navToggle.setAttribute('aria-expanded', true);
}

// Close the mobile navbar if any links in navbar is cliked
if (windowWidth <= 500) {
    primaryMobileNav.forEach(link => {
        link.addEventListener('click', () => {
            closeNavToggler()
        })
    })
}

navToggle.addEventListener('click', () => {
    
    const visibility = primaryNav.getAttribute('data-visible');
    const changeColor = svgOpen.getAttribute('data-change-color');

    if (visibility == "false" && changeColor == "false") {
        openNavToggler()
    }
    else if (visibility == "true" && changeColor == "true") {
        closeNavToggler()
    }
    
})
