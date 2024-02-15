// Author: Quinten Van der Wildt
document.getElementById('loadArticle').addEventListener("click",swapPortfolio)
document.getElementById('loadArticle2').addEventListener("click",swapPortfolio)

function loadArticle() {
    // calls function hide
    hide();
    // calls function show and waits 1,5 seconds before doing so
    setTimeout(show, 1500);
}

function hide() {
    // hides the content of the page
    document.getElementById('hider').style.opacity = '0';
}

function show() {
    // shows the content of the page
    document.getElementById('hider').style.opacity = '1';
}
