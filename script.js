let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic slide change
function autoSlide() {
    plusSlides(1); // Change to the next slide
}

// Set interval to change slide every 6 seconds (6000 milliseconds)
setInterval(autoSlide, 6000);

// Número de telefone do WhatsApp
const phoneNumber = '5522998425781';

// Seleciona todos os botões
const buttons = document.querySelectorAll('.btn');

// Itera sobre cada botão e configura o evento de clique
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o texto do <h4> do produto pai
        const productTitle = this.closest('.product').querySelector('h4').textContent;

        // Codifica o texto para a URL
        const message = `Olá, gostaria de saber sobre ${encodeURIComponent(productTitle)}`;
        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;

        // Abre a URL do WhatsApp em uma nova aba
        window.open(url, '_blank');
    });
});
