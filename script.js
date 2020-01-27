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