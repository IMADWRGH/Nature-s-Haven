const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line")
});

navlink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line")
    })
})


$(document).ready(function () {
    toggleButtonVisibility();
    $(window).on('scroll', function () {
        toggleButtonVisibility();
    });

    function toggleButtonVisibility() {
        var scrollTop = $(window).scrollTop();
        var button = $('#scrollToTop');

        if (scrollTop > 100) {
            button.css('opacity', 1);
        } else {
            button.css('opacity', 0);
        }
    }
    $('#scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: '0px'
        },
            150);

    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disbleOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});