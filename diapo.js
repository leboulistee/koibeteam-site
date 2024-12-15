let slideIndex = { diapo1: 1, diapo2: 1 };

function showSlides(n, diapoId) {
    let slides = document.querySelectorAll(`#${diapoId} .slides`);
    let dots = document.querySelectorAll(`#${diapoId} .dot`);

    if (n > slides.length) { slideIndex[diapoId] = 1; }
    if (n < 1) { slideIndex[diapoId] = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex[diapoId] - 1].style.display = "block";  
    dots[slideIndex[diapoId] - 1].className += " active";
}

function plusSlides(n, diapoId) {
    showSlides(slideIndex[diapoId] += n, diapoId);
}

function currentSlide(n, diapoId) {
    showSlides(slideIndex[diapoId] = n, diapoId);
}

// Initialisation des diaporamas
showSlides(slideIndex['diapo1'], 'diapo1');
showSlides(slideIndex['diapo2'], 'diapo2');