function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bar.src = "images/menu.nav2.png" ;
        }else{
            nav.style.right = "0%";
            bar.src = "images/X.png" ;
        }
    }
}
myNav();
/*function myNav(){
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
myNav();*/

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

          //evento para cerrar automáticamente la ventana emergente cuando el video termina
         videos.addEventListener('ended', () => {
            overs.style.display = "none";
        });


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




//FUNCIONAMIENTO DEL FORMULARIO  DE CONTACTO
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var submitButton = document.getElementById('submit_button');
    var validationMessages = document.getElementById('validationMessages');

    // Función para generar dos números aleatorios y mostrar la pregunta del captcha
    function generarCaptcha() {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var suma = num1 + num2;

        document.getElementById("captcha-question").textContent = num1 + " + " + num2 +  " = "; // Mostrar la pregunta en el elemento span

        document.getElementById("captcha").dataset.correctSum = suma; // Establecer el valor correcto en el campo de entrada
        // Validar el captcha después de generar
        validateCaptcha();
    }
    window.onload = generarCaptcha; // Llamar a la función al cargar la página

    // Función para validar el formulario y el captcha

    submitButton.addEventListener('click', function (event) {
        var inputs = form.querySelectorAll('input:required, textarea:required, #captcha'); // Agregar el campo del captcha al selector
        var isValid = true;
    
        inputs.forEach(function (input) {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.border = '2px solid #059b4d';
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

    
        if (!isValid) {
            event.preventDefault(); // Evitar que el formulario se envíe si hay campos vacíos
    
            // Crear el mensaje de validación con elementos de lista
            var validationMessage = '<ul class="validation-list">';
            inputs.forEach(function (input) {
                if (input.value.trim() === '') {
                    validationMessage += '<li class="validation-item">' + input.getAttribute('placeholder') + '</li>';
                }
            });
            validationMessage += '</ul>';
            
            // Insertar el mensaje de validación debajo del h2
            validationMessages.innerHTML = '<p class="validation-intro">Por favor complete los siguientes campos:</p>' + validationMessage;
        } else {
            validationMessages.innerHTML = ''; // Limpiar el mensaje de validación
            var isValidCaptcha = validateCaptcha();
            if (!isValidCaptcha) {
                event.preventDefault(); // Evitar que el formulario se envíe si el captcha es incorrecto
                displayCaptchaError(); // Mostrar mensaje de error del captcha
            }
        }
    });

    // Función para validar el captcha
    function validateCaptcha() {
        var userAnswer = parseInt(document.getElementById('captcha').value);
        var correctSum = parseInt(document.getElementById('captcha').dataset.correctSum);

        return userAnswer === correctSum;
    }

    // Función para mostrar mensajes de error del captcha
    function displayCaptchaError() {
        validationMessages.innerHTML = '<p class="validation-item">Captcha incorrecto. Por favor, vuelva a intentarlo.</p>';

    }
});