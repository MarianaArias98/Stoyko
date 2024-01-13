
function myNav(){
    let bar = document.getElementById('fa-bars');
    let nav = document.querySelector('.navigation');
    bar.onclick = () => {
        if (nav.style.right === "0%") {
            nav.style.right = "-50%";
            bar.innerHTML = '<i class="fas fa-bars"></i>'; 
        } else {
            nav.style.right = "0%";
            bar.innerHTML = '<i class="fas fa-times"></i>'; 
        }
    };
}

myNav();

function myHeader(){
    let header = document.getElementById("header");
    let log = document.getElementById("log")
    window.addEventListener("scroll",function(){
        if(this.window.scrollY > 0){
            header.classList.add("active");
            log.src = "images/logo-removebg.png" ;
        }else{
            header.classList.remove("active")
            log.src = "images/logo-removebg.png" ;

        }
    })
}
myHeader();


// JavaScript para la galería Magnific Popup
/*$(window).on('load', function () {
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});*/

// JavaScript para la galería Magnific Popup
$(document).ready(function () {
    $('.gallery a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});



 // Js shoppingBag
 $(document).ready(function () {
    // Agrega un evento de clic a todos los elementos con la clase shopping-bag-icon
    $('.shopping-bag-icon').on('click', function () {
        // Muestra una alerta con el mensaje "Próximamente"
        alert('Próximamente...');
    });
});


/*document.addEventListener('DOMContentLoaded', function () {
    var overlays = document.querySelectorAll('.product-image .overlay .fa-search');

    overlays.forEach(function (overlay) {
        overlay.addEventListener('click', function (event) {
            event.preventDefault();
            var imageLink = overlay.closest('.product-image').querySelector('a');
            window.open(imageLink.href, '_blank');
        });
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    var overlays = document.querySelectorAll('.product-image .overlay .fa-search');

    overlays.forEach(function (overlay) {
        overlay.addEventListener('click', function (event) {
            event.preventDefault();
            var imageLink = overlay.closest('.product-image').querySelector('a');
            $.magnificPopup.open({
                items: {
                    src: imageLink.href
                },
                type: 'image',
                image: {
                    verticalFit: true
                }
            });
            
        });
    });
});








document.addEventListener("DOMContentLoaded", function () {
    // Obtén los elementos de los iconos de corazón
    var heartIcons = document.querySelectorAll(".fa-heart");

    // Agrega un evento de clic a cada icono de corazón
    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener("click", function () {
            // Alternar la clase 'active' al icono de corazón
            heartIcon.classList.toggle("active");
        });
    });
});


function myVideo() {
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");

    links.onclick = (ed) => {
        ed.preventDefault();
        overs.style.display = "block";
         // Reproducir el video automáticamente al abrir la ventana emergente
         videos.play();
    }
    exit.onclick = () => {
        overs.style.display = "none";
        videos.pause(); // Pausa el video al salir
    }
    player.onclick = () => {
        if (videos.paused) {
            videos.play();
            player.src = "images/play-removebg-preview.png"; 
        } else {
            videos.pause();
            player.src = "images/PAUSA2-removebg-preview.png"; 
        }
    };
}
myVideo();



