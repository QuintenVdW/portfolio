// Author: Quinten Van der Wildt
document.getElementById('swapPortfolio').addEventListener("click",swapPortfolio)

let count = 0;
function loading() {
    // disable last portfolios on loading
    document.getElementById('modal4display').style.display = 'none';
    document.getElementById('modal5display').style.display = 'none';
    document.getElementById('modal6display').style.display = 'none';
}

function swapPortfolio() {
    // check if count even or odd
    state = count % 2;
    // state geeft een boolean weer en weet zo of de if mag gebeuren of niet
    if (state) {
        // display last 3 portfolios
        document.getElementById('modal1display').style.display = 'none';
        document.getElementById('modal2display').style.display = 'none';
        document.getElementById('modal3display').style.display = 'none';
        document.getElementById('modal4display').style.display = 'block';
        document.getElementById('modal5display').style.display = 'block';
        document.getElementById('modal6display').style.display = 'block';
    } else {
        // display first 3 portfolios
        document.getElementById('modal1display').style.display = 'block';
        document.getElementById('modal2display').style.display = 'block';
        document.getElementById('modal3display').style.display = 'block';
        document.getElementById('modal4display').style.display = 'none';
        document.getElementById('modal5display').style.display = 'none';
        document.getElementById('modal6display').style.display = 'none';
    }
    // add 1 to the counter to check the state
    count += 1;
}
