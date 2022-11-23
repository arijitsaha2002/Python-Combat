var isUp
var isDone = false;
var isGone;
function refresh() {
    isUp = (Math.random() < .5);
    isDone = false;
    isGone = false;
    movesX = []
    movesY = []
    myIterator = null;
    positionX = 25
    positionY = 75
    drawMaze();
    canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
}
refresh();
function description() {
    swal("Instructions", "Ah! Again the same task but this time all coins won't appear when you start the game. \n When you reach the center of the maze then two coins will be generated randomly up or down. To make it easy we have provided a built-in isUp() function which will return true if the coins are generated upside and false if generated downside. This time open_door() won't take any argument.\n You can also upload code file from your local device. \n Hints: Use if-else conditional statements to make Mario walk the least path collecting all the coins.");
}
function drawMaze() {
    canvasDraw.drawImage(backgroundImg, 0, 0, 300, 150);
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.moveTo(0, 60);
    canvasDraw.lineTo(100, 60);
    canvasDraw.lineTo(100, 5);
    canvasDraw.lineTo(150, 5);
    canvasDraw.lineTo(150, 60);
    canvasDraw.lineTo(300, 60);
    canvasDraw.lineTo(300, 90);
    canvasDraw.lineTo(150, 90);
    canvasDraw.lineTo(150, 145);
    canvasDraw.lineTo(100, 145);
    canvasDraw.lineTo(100, 90);
    canvasDraw.lineTo(0, 90);
    canvasDraw.closePath();
    canvasDraw.fill();
    canvasDraw.drawImage(star, 75 - 10, 75 - 5, 20, 10);
    canvasDraw.drawImage(star, 125 - 10, 75 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 75 - 5, 20, 10);
    canvasDraw.drawImage(star, 225 - 10, 75 - 5, 20, 10);
    canvasDraw.drawImage(door, 282, 75 - 17, 20, 35);
}

function iterator() {
    if (movesX[0] == null) {
        clearInterval(myIterator);
    }
    else {
        let x_ = movesX.shift();
        let y_ = movesY.shift();
        if (x_ == 3) {
            openDoor();
        }
        else {
            if (positionX == 25 && positionY == 75) {
                if (x_ < 0 || y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75 && positionY == 75) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125) {
                if (positionY == 75 && !isDone) {
                    if (isUp) {
                        canvasDraw.drawImage(document.getElementById('starB'), 125 - 10, 50 - 5, 20, 10);
                        canvasDraw.drawImage(document.getElementById('starB'), 125 - 10, 25 - 5, 20, 10);
                    }
                    else {
                        canvasDraw.drawImage(document.getElementById('starB'), 125 - 10, 100 - 5, 20, 10);
                        canvasDraw.drawImage(document.getElementById('starB'), 125 - 10, 125 - 5, 20, 10);
                    }
                    isDone = true
                }
                else if (positionY == 50 || positionY == 25 || positionY == 100 || positionY == 125) {
                    if(positionY == 125 && !isUp){
                        isGone = true;
                    }
                    if(positionY == 25 && isUp){
                        isGone = true;
                    }
                    if (x_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 175) {
                if (positionY == 75) {
                    if (y_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 225 && positionY == 75) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 275 && positionY == 75) {
                if (y_ != 0 || x_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            move(x_, y_);
        }
    }
}


function clear() {
    canvasDraw.clearRect(positionX - w / 2 - error, positionY - h / 2 - error, w + 2 * error, h + 2 * error);
}


function allMove() {
    myIterator = setInterval(iterator, 30);
}


function openDoor() {
    if (positionX == 275 && positionY == 75) {
        if (isGone) {
            swal("Congratulations!", "You have successfully passed the chapter. Continue to the next chapter").then(okay => {
                if (okay) {
                    window.location.replace("../Level_4/index.html")
                }
            });
        }
        else {
            swal("ERROR!", "You have not completed the path").then(okay => {
                if (okay) {
                    refresh();
                }
            });
        }
    }
    else {
        swal("ERROR!", "You can't open the door!!").then(okay => {
            if (okay) {
                refresh();
            }
        });

    }
}
