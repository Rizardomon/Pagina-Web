//Carrosel do banner
$('.carrousel').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

/*
//Carrosel automático
function slide1() {
    document.getElementById('banner').src = "img/arranha-ceu.jpg"
    setTimeout("slide2()", 10000)

}

function slide2() {
    document.getElementById('banner').src = "img/arranha-ceu2.jpg";
    setTimeout("slide3()", 10000)
}

function slide3() {
    document.getElementById('banner').src = "img/arranha-ceu3.jpg";
    setTimeout("slide1()", 10000)
}
*/

//Mostra e fecha menu mobile ao clicar no botão
function showMenuFunction() {
    document.getElementById("menu-mobile-content").classList.toggle("show");
}

//Modal Light Box
//Open the modal
function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

//Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

//Objetos Modal Spec
specInfo = [{
        'id': 0,
        'img': 'pc-icon.png',
        'tittle': 'PC ICON MODAL',
        'text': 'PC ICON MODAL GENERIC TEXT',
    },
    {
        'id': 1,
        'img': 'pencil-icon.png',
        'tittle': 'PENCIL ICON MODAL',
        'text': 'PENCIL ICON MODAL GENERIC TEXT',
    },
    {
        'id': 2,
        'img': 'photo-icon.png',
        'tittle': 'PHOTO ICON MODAL',
        'text': 'PHOTO ICON MODAL GENERIC TEXT',
    }
]

//Abrir e fechar o modal do main
var modalInfo = document.getElementsByClassName('modal-info');

function iniciaModal(modalID) {
    const modalSpec = document.getElementById('modal-info-container');
    for (let i = 0; i < modalInfo.length; i++) {
        modalSpec.classList.add('mostrar');
        showInfos(i);

        modalSpec.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'bt_modal1') {
                modalSpec.classList.remove('mostrar');
            }
        })
    }
}

function showInfos(id) {
    document.getElementById('spec-img').src = 'img/' + specInfo[id].img;
    document.getElementById('modal-tittle').innerHTML = specInfo[id].tittle;
    document.getElementById('modal-text').innerHTML = specInfo[id].text;
}

for (let i = 0; i < modalInfo.length; i++) {
    modalInfo[i].addEventListener('click', () => iniciaModal('modal-info-container'));
}