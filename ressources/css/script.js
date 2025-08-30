const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, // Anpassung für kleinere Bildschirme
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Bei Bildschirmbreiten über 576px
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // Bei Bildschirmbreiten über 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});