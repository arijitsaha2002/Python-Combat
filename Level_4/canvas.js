refresh();
function refresh() {
    coins = [1, 1, 1, 1, 1, 1, 1, 1, 3]
    movesX = []
    movesY = []
    myIterator = null;
    positionX = 125
    positionY = 35
    drawMaze();
    canvasDraw.drawImage(downMove, positionX - w / 2, positionY - h / 2, w, h);
}

function description() {
    swal("Instructions", "Here we go again!, But this time some coins won't disappear when visited once. Yellow coins get converted to orange, orange to blue and blue will be gone whenever it is visited and after all coins get disappeared you need to reach the door and yell open_door().\n You can also upload code file from your local device.\n Hints: You see that the maze has a loop. Use for loop to traverse the maze loop three times.");
}

function drawStar(i, X, Y) {
    if (i == 1) {
        canvasDraw.drawImage(star, X - 10, Y - 5, 20, 10);
    }
    else if (i == 2) {
        canvasDraw.drawImage(document.getElementById("starO"), X - 10, Y - 5, 20, 10);
    }
    else if (i == 3) {
        canvasDraw.drawImage(document.getElementById("starB"), X - 10, Y - 5, 20, 10);
    }
}
function drawMaze() {
    canvasDraw.drawImage(backgroundImg, 0, 0, 300, 150);
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.lineTo(45, 70);
    canvasDraw.lineTo(45, 45);
    canvasDraw.lineTo(105, 45);
    canvasDraw.lineTo(105, 15);
    canvasDraw.lineTo(145, 15);
    canvasDraw.lineTo(145, 45);
    canvasDraw.lineTo(205, 45);
    canvasDraw.lineTo(205, 70);
    canvasDraw.lineTo(300, 70);
    canvasDraw.lineTo(300, 100);
    canvasDraw.lineTo(145, 100);
    canvasDraw.lineTo(145, 75);
    canvasDraw.lineTo(105, 75);
    canvasDraw.lineTo(105, 100);
    canvasDraw.lineTo(45, 100);
    canvasDraw.closePath();
    canvasDraw.fill();
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.lineTo(45, 95);
    canvasDraw.lineTo(205, 95);
    canvasDraw.lineTo(205, 125);
    canvasDraw.lineTo(45, 125);
    canvasDraw.closePath();
    canvasDraw.fill();
    drawStar(coins[0], 75, 85);
    drawStar(coins[1], 75, 110);
    drawStar(coins[2], 125, 110);
    drawStar(coins[3], 75, 60);
    drawStar(coins[4], 125, 60);
    drawStar(coins[5], 175, 60);
    drawStar(coins[6], 175, 85);
    drawStar(coins[7], 175, 110);
    drawStar(coins[8], 225, 85);
    canvasDraw.drawImage(door, 282, 85 - 17, 20, 35);
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
            if (positionX == 125 && positionY == 20) {
                if (x_ != 0 || y_ < 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75) {
                if (positionY == 85) {
                    coins[0] += 1;
                    if (x_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 60) {
                    coins[3] += 1;
                    if (x_ < 0 || y_ < 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 110) {
                    coins[1] += 1;
                    if (x_ < 0 || y_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 125 && positionY == 60) {
                coins[4]++;
                if (y_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125 && positionY == 20) {
                if (y_ < 0 || x_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125 && positionY == 110) {
                coins[2]++;
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 175) {
                if (positionY == 60) {
                    coins[5]++;
                    if (x_ > 0 || y_ < 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 85) {
                    coins[6]++;
                    if (x_ < 0) {
                        setTimeout(outOfBoundary, 100);
                    }

                }
                else if (positionY == 110) {
                    coins[7]++;
                    if (x_ > 0 || y_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 225 && positionY == 85) {
                coins[8]++;
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 275 && positionY == 85) {
                if (y_ != 0 || x_ > 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            move(x_, y_);
        }
    }
}


function clear() {
    drawMaze();
}


function allMove() {
    myIterator = setInterval(iterator, 30);
}


function openDoor() {
    if (positionX == 275 && positionY == 85) {
        let isGone = true;
        for(i = 0; i< 8 ; i++){
            if(coins[i] <= 3){
                isGone = false;
                break;
            }
        }
        if (isGone) {
            swal("Congratulations!", "You have successfully passed the chapter. Continue to the next chapter").then(okay => {
                if (okay) {
                    window.location.replace("../Level_5/index.html")
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


