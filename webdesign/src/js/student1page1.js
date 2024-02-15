// Author: Niel Swusten

let timer;

//function loader will show the page(call the showPage function) after 1.5 seconds. this function is called onload(this means that the function wil run when the page first loads)
function loader() {
    timer = setTimeout(showPage, 1500);
}

//the showPage function will show all the content(body) and it will make the loading symbol disappear.
function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('display').style.display = 'block';
}

function darkmode() {
    //when flicking the button in the top right corner of the page the class darkmode will be added/deleted on the body.
    const body = document.getElementById('darkmode');
    body.classList.toggle('darkmode');

    //when flicking the button in the top right corner of the page the class darkmode2 will be added/deleted on the header.
    const header = document.getElementById('header');
    header.classList.toggle('darkmode2');

    //when flicking the button in the top right corner of the page the class darkmode3 will be added/deleted to the first table.
    const table = document.getElementById('table');
    table.classList.toggle('darkmode3');

    //when flicking the button in the top right corner of the page the class darkmode3 will be added/deleted to the second table.
    const table2 = document.getElementById('table2');
    table2.classList.toggle('darkmode3');

    //when flicking the button in the top right corner of the page the class darkmode4 will be added/deleted on the footer.
    const footer = document.getElementById('footer');
    footer.classList.toggle('darkmode4');

    //getting the p elements with id lightmodetext and darmodetext
    const ligthmodetext = document.getElementById('ligthmodetext');
    const darkmodetext = document.getElementById('darkmodetext');
    //the text darkmode will appear when you flick the button in the top right corner of the page and when the text lightmode was showing before.
    //if the text darkmode is showing, flicking the switch will show the text lightmode
    if (ligthmodetext.style.display === 'none') {
        ligthmodetext.style.display = 'block';
    } else {
        ligthmodetext.style.display = 'none';
    }

    if (darkmodetext.style.display === 'block') {
        darkmodetext.style.display = 'none';
    } else {
        darkmodetext.style.display = 'block';
    }
}

document.getElementById('myBtn').addEventListener('click', darkmode);
window.onload(loader());
