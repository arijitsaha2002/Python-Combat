/**
 * Array storing type of coins
 */
var coins;
/**
 * Store the input key given by user
 */
var sum;
/**
 * Refreshes the Arena
 */
var coinNumber ;
function refresh() {
    coins = [1, 1, 1, 1, 1, 1, 1, 1]
    isDone = false;
    movesX = []
    movesY = []
    coinNumber= 0;
    sum = 0;
    myIterator = null;
    positionX = 25
    positionY = 15
    drawMaze();
    canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
    makerandom();

}

/**
 * Assigns random values to coin array from 1 to 3
 */
function makerandom() {
    for (let i = 0; i < 8; i++) {
        coins[i] = Math.ceil(Math.random() * 3);
        if (coins[i] == 0) { coins[i]++; }
    }
}

refresh();
/**
 * Instructions
 */
function description() {
    swal("Instructions", "Your task is again to get Mario to the door using those built-in functions but here is a twist. \n You need to pass an argument to the open_door() function to open the door. Your argument will be the sum of the values of coins. To make it easier we have provided a built-in function coinValue() to get the coinValue when you reach that coin.\n You can also upload code file from your local device.\n Hint: Store the sum of coinValues in a variable and then pass it as an argument");
}

/**
 * Draws a coin
 * @param {type of coin} i 
 * @param {x position of coin} X 
 * @param {Y position of coin} Y 
 */
function drawCoin(i, X, Y) {
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
/**
 * Designs the Arena
 */
function drawMaze() {
    canvasDraw.drawImage(backgroundImg, 0, 0, 300, 150);
    canvasDraw.fillStyle = '#c3e8de';
    canvasDraw.beginPath();
    canvasDraw.moveTo(0, 0);
    canvasDraw.lineTo(155, 0);
    canvasDraw.lineTo(155, 100);
    canvasDraw.lineTo(300, 100);
    canvasDraw.lineTo(300, 130);
    canvasDraw.lineTo(95, 130);
    canvasDraw.lineTo(95, 30);
    canvasDraw.lineTo(0, 30);
    canvasDraw.closePath();
    canvasDraw.fill();
    drawCoin(coins[0], 75, 15);
    drawCoin(coins[1], 125, 15);
    drawCoin(coins[2], 125, 40);
    drawCoin(coins[3], 125, 65);
    drawCoin(coins[4], 125, 90);
    drawCoin(coins[5], 125, 115);
    drawCoin(coins[6], 175, 115);
    drawCoin(coins[7], 225, 115);
    canvasDraw.drawImage(door, 282, 117 - 17, 20, 30);
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
            if (positionX == 25 && positionY == 15) {
                if (x_ < 0 || y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 75 && positionY == 15) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 125) {
                if (positionY == 15) {
                    if (y_ < 0 || x_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 40 || positionY == 65 || positionY == 90) {
                    if (x_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
                else if (positionY == 115) {
                    if (x_ < 0 || y_ > 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 175) {
                if (positionY == 115) {
                    if (y_ != 0) {
                        setTimeout(outOfBoundary, 100);
                    }
                }
            }
            else if (positionX == 225 && positionY == 115) {
                if (y_ != 0) {
                    setTimeout(outOfBoundary, 100);
                }
            }
            else if (positionX == 275 && positionY == 115) {

                if (y_ != 0 || x_ > 0) {
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
    drawMaze();
    canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
    myIterator = setInterval(iterator, 30);
}

/**
 * openDoor function which shows success and error pop ups
 * and redirect to next level on successfully completing 
 * current level
 */
function openDoor() {
    if (positionX == 275 && positionY == 115) {
        let result = 0;
        for (i = 0; i < 8; i++) {
            result += coins[i]
        }
        if (sum == result) {
            swal("Congratulations!", "You have successfully passed the chapter. Continue to the next chapter").then(okay => {
                if (okay) {
                    window.location.replace("../Level_3/index.html")
                }
            });
        }
        else {
            swal("ERROR!", "You have entered the wrong key").then(okay => {
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
