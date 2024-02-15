// Author: Damyan Semedo Robalo


let timer;
function loader() {
    timer = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('display').style.display = 'block';
}




const description1 = document.getElementById('description1');
const btn1 = document.getElementById('read-more1');

const description2 = document.getElementById('description2');
const btn2 = document.getElementById('read-more2');

const description3 = document.getElementById('description3');
const btn3 = document.getElementById('read-more3');
btn1.addEventListener('click', function() {
    if (description1.style.display === 'none') {
        description1.style.display = 'block';
        description2.style.display = 'none';
        description3.style.display = 'none';
        btn1.textContent = 'Hide description';

    } else {
        description1.style.display = 'none';
        btn1.textContent = 'Read description';
    }
})

btn2.addEventListener('click', function() {
    if (description2.style.display === 'none') {
        description2.style.display = 'block';
        description1.style.display = 'none';
        description3.style.display = 'none';
        btn2.textContent = 'Hide description';
    } else {
        description2.style.display = 'none';
        btn2.textContent = 'Read description';
    }})

btn3.addEventListener('click', function() {
    if (description3.style.display === 'none') {
        description3.style.display = 'block';
        description1.style.display = 'none';
        description2.style.display = 'none';
        btn3.textContent = 'Hide description';
    } else {
        description3.style.display = 'none';
        btn3.textContent = 'Read description';
    }});





