function refresh() {
    movesX = []
    movesY = []
    myIterator = null;
    positionX = 25
    positionY = 85
    drawMaze();
    canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
}
refresh();
function description() {
    swal("Instructions", "Hello Learners !!!, Welcome to Chapter 1.\n Your task is to get Mario to the Door using the built-in functions move_up(), move_down(), move_right() and move_left() and when you reach the door you need to call the open_door() function to pass the level.\n You can also upload code file from your local device.");
}
function drawMaze() {
    canvasDraw.drawImage(backgroundImg, 0, 0, 300, 150);
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.moveTo(0, 70);
    canvasDraw.lineTo(45, 70);
    canvasDraw.lineTo(45, 45);
    canvasDraw.lineTo(205, 45);
    canvasDraw.lineTo(205, 95);
    canvasDraw.lineTo(300, 95);
    canvasDraw.lineTo(300, 125);
    canvasDraw.lineTo(145, 125);
    canvasDraw.lineTo(145, 75);
    canvasDraw.lineTo(105, 75);
    canvasDraw.lineTo(105, 100);
    canvasDraw.lineTo(0, 100);
    canvasDraw.closePath();
    canvasDraw.fill();
    canvasDraw.drawImage(star, 75 - 10, 85 - 5, 20, 10);
    canvasDraw.drawImage(star, 75 - 10, 60 - 5, 20, 10);
    canvasDraw.drawImage(star, 125 - 10, 60 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 60 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 85 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 110 - 5, 20, 10);
    canvasDraw.drawImage(star, 225 - 10, 110 - 5, 20, 10);
    canvasDraw.drawImage(door, 282, 110 - 17, 20, 35);
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
            if (positionX == 25 && positionY == 85) {
                if (x_ < 0 || y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75) {
                if (positionY == 85) {
                    if (x_ > 0 || y_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 60) {
                    if (x_ < 0 || y_ < 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 125 && positionY == 60) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 175) {
                if (positionY == 60) {
                    if (x_ > 0 || y_ < 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 85) {
                    if (x_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }

                }
                else if (positionY == 110) {
                    if (x_ < 0 || y_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 225 && positionY == 110) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 275 && positionY == 110) {
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
    if (positionX == 275 && positionY == 110) {
        swal("Congratulations!", "You have successfully passed the chapter. Continue to the next chapter").then(okay => {
            if (okay) {
                window.location.replace("../Level_2/index.html")
           }});
    }
    else {
        swal("ERROR!", "You can't open the door!!").then(okay => {
            if (okay) {
                refresh();
           }});

    }
}
