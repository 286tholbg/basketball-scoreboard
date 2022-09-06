const homeScoreBoard = document.getElementById('home-score');
const guestScoreBoard = document.getElementById('guest-score');

let homeScoreCount = 0;
function add1PointH () {
    homeScoreCount++;
    homeScoreBoard.innerHTML = homeScoreCount;
}
function add2PointsH () {
    homeScoreCount += 2;
    homeScoreBoard.innerHTML = homeScoreCount;
}
function add3PointsH () {
    homeScoreCount += 3;
    homeScoreBoard.innerHTML = homeScoreCount;
}
let guestScoreCount = 0;
function add1Point () {
    guestScoreCount++;
    guestScoreBoard.innerHTML = guestScoreCount;
}
function add2Points () {
    guestScoreCount += 2;
    guestScoreBoard.innerHTML = guestScoreCount;
}
function add3Points () {
    guestScoreCount += 3;
    guestScoreBoard.innerHTML = guestScoreCount;
}

function resetScore () {
    guestScoreCount = 0;
    homeScoreCount = 0;
    guestScoreBoard.innerHTML = guestScoreCount;
    homeScoreBoard.innerHTML = homeScoreCount;
}