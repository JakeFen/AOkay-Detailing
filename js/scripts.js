const nav = document.getElementById('nav');

function navShowHide() {
    if (innerWidth <= 768 && nav.style.display  == "flex") {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
    }
}

testimonial = document.getElementById('testimonial1');

let slideIndex = 2;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function slideCurrent(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('testimonial');
    const testLight = document.getElementsByClassName('testimonial-circle');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < testLight.length; i++) {
        testLight[i].className = testLight[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'inline-block';
    testLight[slideIndex-1].className += ' active';
}