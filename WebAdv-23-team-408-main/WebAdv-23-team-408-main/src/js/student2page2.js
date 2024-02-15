// Author: Damyan Semedo Robalo

let timer;
function loader() {
    timer = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('display').style.display = 'block';
}




// var buttonStandard = document.getElementById("button-standard");
// var buttonPremium = document.getElementById("button-premium");
// var buttonPlatinum = document.getElementById("button-platinum");
// var standard = document.getElementById("standard");
// var premium = document.getElementById("premium");
// var platinum = document.getElementById("platinum");
//
// buttonStandard.addEventListener("click", function() {
//     standard.checked = true;
// });
// buttonPremium.addEventListener("click", function() {
//     premium.checked = true;
// });
// buttonPlatinum.addEventListener("click", function() {
//     platinum.checked = true;
// });



// function marcarOpcao() {
//     localStorage.setItem('checked', 'option2');
// }
//
// window.onload = function() {
//     var checked = localStorage.getItem('checked');
//     if (checked) {
//         var radio = document.getElementById(checked);
//         radio.checked = true;
//     }
// };

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > 0; /* Verifica se a página foi rolada */

    if (scrolled) {
        navbar.classList.add('scrolled'); /* Adiciona a classe 'scrolled' quando a página foi rolada */
    } else {
        navbar.classList.remove('scrolled'); /* Remove a classe 'scrolled' quando a página está no topo */
    }
});

