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
drawStar(coins[0],75, 15);
drawStar(coins[1],125, 15);
drawStar(coins[2],125, 40);
drawStar(coins[3],125, 65);
drawStar(coins[4],125, 90);
drawStar(coins[5],125, 115);
drawStar(coins[6],175, 115);
drawStar(coins[7],225, 115);
canvasDraw.drawImage(door, 282, 117 - 17, 20, 30);
