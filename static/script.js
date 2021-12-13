let ulWrapper = document.querySelector('.ul-wrapper');
let hamburgerLines = document.querySelector('#hamburgerLines');
let navbar = document.querySelector('.navbar');
let loginBtn = document.querySelector('#loginBtn');
let loginFormWrapper = document.querySelector('.login-form-wrapper');
let userLogo = document.querySelector('.fa-user');
let closeLoginBtn = document.querySelector('#close-login-btn');
let homeSection = document.querySelector('#home');
let homeParallax = document.querySelectorAll('.home-parallax');


hamburgerLines.onclick = () => {
    ulWrapper.classList.toggle('active');
    hamburgerLines.classList.toggle('fa-times');
}

window.onscroll = () => {
    ulWrapper.classList.remove('active');
    hamburgerLines.classList.remove('fa-times');
    if (window.scrollY > 0) {
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
}

loginBtn.onclick = () => {
    loginFormWrapper.classList.toggle('active');
}
userLogo.onclick = () => {
    console.log('Hii')
    loginFormWrapper.classList.toggle('active');
}
closeLoginBtn.onclick = () => {
    loginFormWrapper.classList.remove('active');
}

homeSection.addEventListener('mousemove', e => {
    homeParallax.forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    })
})
homeSection.addEventListener('mouseleave', () => {
    homeParallax.forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    })
})

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCusror: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCusror: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCusror: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
