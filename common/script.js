(function () {
    var old = console.log;
    var logger = document.getElementById('output');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message);
        } else {
            logger.innerHTML += message;
        }
    }
})();

window.addEventListener('load', (event) => {
    description();
    var text = document.getElementById('editor');
    editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
        mode: "python",
        lineNumbers: true,
        cursorBlinkRate: 700,
        hintOptions: {
            alignWithWord: false,
            completeSingle: false,
        },
        matchBrackets: true,
        mode: 'python',
        scrollbarStyle: 'null',
    });
    editor.on('keypress', (cm) => {
        cm.showHint();
    });
    document.getElementById('uploadBtn').addEventListener('click', function (e) {
        $('#upload').trigger('click');
    });
    document.getElementById('upload').addEventListener('change', function (e) {
        var fr = new FileReader();
        fr.onload = function () {
            editor.setValue(fr.result);
        }
        if (this.files[0] == null) {
            alert('no file selected');
        }
        else {
            fr.readAsText(this.files[0]);
        }
        this.value = ""
    });
});


var positionX;
var positionY;
var error = 1;
const h = 20;
const w = 15;
var canvasDraw = document.getElementById("canvas").getContext('2d');

var leftMove = document.getElementById('left')
var rightMove = document.getElementById('right')
var upMove = document.getElementById('up')
var downMove = document.getElementById('down')
var star = document.getElementById('star')
var door = document.getElementById('door')
var backgroundImg = document.getElementById('background');

var movesX = [];
var movesY = [];


var myIterator;

function outOfBoundary() {
    clearInterval(myIterator);
    alert('You Stepped out of Maze');
    refresh();
}




function move(x, y) {
    clear();
    if (x == 0) {
        positionY += y;
        if (y < 0) {
            canvasDraw.drawImage(upMove, positionX - w / 2, positionY - h / 2, w, h);
        }
        else {
            canvasDraw.drawImage(downMove, positionX - w / 2, positionY - h / 2, w, h);
        }
    }
    else {
        positionX += x;
        if (x < 0) {
            canvasDraw.drawImage(leftMove, positionX - w / 2, positionY - h / 2, w, h);
        }
        else {
            canvasDraw.drawImage(rightMove, positionX - w / 2, positionY - h / 2, w, h);
        }
    }
}
