// damyan
const menu = document.querySelector('nav');
function activeScroll() {
    menu.classList.toggle('scrolling', scrollY > 0);
}
window.addEventListener('scroll', activeScroll);
// eind script damyan

// var navbar = document.querySelector('.navbar');
//
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 0) {
//         navbar.classList.add('scrolling');
//     } else {
//         navbar.classList.remove('scrolling');
//     }
// });


