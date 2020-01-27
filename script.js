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


/*
//Fecha o menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.check')) {
        var dropdowns = document.getElementsByClassName("menu-mobile-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/

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
    const modalSpec = document.getElementById(modalID);
    for (let i = 0; i < modalInfo.length; i++) {

        modalSpec.classList.add('mostrar');

        document.getElementById('spec-img').src = 'img/' + specInfo[i].img;
        document.getElementById('modal-tittle').innerHTML = specInfo[i].tittle;
        document.getElementById('modal-text').innerHTML = specInfo[i].text;

        modalSpec.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'bt_modal1') {
                modalSpec.classList.remove('mostrar');
            }
        })

    }
}

for (let i = 0; i < modalInfo.length; i++) {
    modalInfo[i].addEventListener('click', () => iniciaModal('modal-info'));
}