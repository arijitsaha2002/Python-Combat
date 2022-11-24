refresh();
/**
 * Refreshes the Arena
 */
function refresh() {
    movesX = []
    movesY = []
    myIterator = null;
    positionX = 25
    positionY = 137
    drawMaze();
    canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
}
/**
 * Instructions
 */
function description() {
    swal("Instructions", "Some code snippets are used more than once in a code It's better to write them in a function and then use it. \n In this chapter, You are required to complete the move function analyzing the pattern in the maze.\n You can also upload code file from your local device.\n Hints: Use built-in functions with in your function.");
}

/**
 * Designs the Arena
 */
function drawMaze() {
    canvasDraw.drawImage(backgroundImg, 0, 0, 300, 150);
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.moveTo(50, 150);
    canvasDraw.lineTo(50, 125);
    canvasDraw.lineTo(100, 125);
    canvasDraw.lineTo(100, 100);
    canvasDraw.lineTo(150, 100);
    canvasDraw.lineTo(150, 75);
    canvasDraw.lineTo(200, 75);
    canvasDraw.lineTo(200, 50);
    canvasDraw.lineTo(250, 50);
    canvasDraw.lineTo(250, 25);
    canvasDraw.lineTo(300, 25);
    canvasDraw.lineTo(300, 0);
    canvasDraw.lineTo(200, 0);
    canvasDraw.lineTo(200, 25);
    canvasDraw.lineTo(150, 25);
    canvasDraw.lineTo(150, 50);
    canvasDraw.lineTo(100, 50);
    canvasDraw.lineTo(100, 75);
    canvasDraw.lineTo(50, 75);
    canvasDraw.lineTo(50, 100);
    canvasDraw.lineTo(0, 100);
    canvasDraw.lineTo(0, 150);
    canvasDraw.closePath();
    canvasDraw.fill();
    canvasDraw.drawImage(star, 25 - 10, 112 - 5, 20, 10);
    canvasDraw.drawImage(star, 75 - 10, 112 - 5, 20, 10);
    canvasDraw.drawImage(star, 75 - 10, 87 - 5, 20, 10);
    canvasDraw.drawImage(star, 125 - 10, 87 - 5, 20, 10);
    canvasDraw.drawImage(star, 125 - 10, 62 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 62 - 5, 20, 10);
    canvasDraw.drawImage(star, 175 - 10, 37 - 5, 20, 10);
    canvasDraw.drawImage(star, 225 - 10, 37 - 5, 20, 10);
    canvasDraw.drawImage(star, 225 - 10, 12 - 5, 20, 10);
    canvasDraw.drawImage(door, 282, 0, 20, 25);
}

/**
 * Moves Mario slowly
 * and also restricts it 
 * from stepping out of maze
 */
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
            if (positionX == 25 && positionY == 112) {
                if (x_ < 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75 && positionY == 112) {
                if (x_ > 0 || y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75 && positionY == 87) {
                if (x_ < 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125 && positionY == 87) {
                if (x_ > 0 || y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125 && positionY == 62) {
                if (x_ < 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 175 && positionY == 62) {
                if (x_ > 0 || y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 175 && positionY == 37) {
                if (x_ < 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 225 && positionY == 37) {
                if (x_ > 0 || y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 225 && positionY == 12) {
                if (x_ < 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 275 && positionY == 12) {
                if (x_ > 0 || y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 25 && positionY == 137) {
                if (x_ != 0 || y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }

            move(x_, y_);
        }
    }
}

/**
 * Clear the previous Mario image by pasting a rectangle on it
 */
function clear() {
    canvasDraw.clearRect(positionX - w / 2 - error, positionY - h / 2 - error, w + 2 * error, h + 2 * error);
}

/**
 * Calls iterator in intervals
 */
function allMove() {
    myIterator = setInterval(iterator, 30);
}

/**
 * openDoor function which shows success and error pop ups
 * and redirect to next level on successfully completing 
 * current level
 */
function openDoor() {
    if (positionX == 275 && positionY == 12) {
        swal("Congratulations!", "You have successfully passed the chapter.").then(okay => {
            if (okay) {
                window.location.replace("../welcome/play.html")
            }
        });
    }
    else {
        swal("ERROR!", "You can't open the door!!").then(okay => {
            if (okay) {
                refresh();
            }
        });

    }
}
