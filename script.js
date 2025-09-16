var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;
var isStart = false;

var btn1 = document.getElementById("btn1");
function start() {
    btn1.disabled=true;
    isStart = true;
    getStart();
}

function stop() {
    isStart = false;
    btn1.disabled=false;
}

function reset() {
    isStart = false;
    btn1.disabled=false;
    hour = 0;
    minute = 0;
    second = 0;
    milisecond = 0;
    document.getElementById("child1").innerText = "00";
    document.getElementById("child2").innerText = "00";
    document.getElementById("child3").innerText = "00";
    document.getElementById("child4").innerText = "00";
}

function getStart() {
    if (isStart == true) {
        setTimeout(() => {
            milisecond++;
            if (milisecond == 100) {
                second++;
                milisecond = 0;
            }
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }
            getStart();
        }, 10);
        document.getElementById("child1").innerText = hour < 10 ? "0" + hour : hour;
        document.getElementById("child2").innerText = minute < 10 ? "0" + minute : minute;
        document.getElementById("child3").innerText = second < 10 ? "0" + second : second;
        document.getElementById("child4").innerText = milisecond < 10 ? "0" + milisecond : milisecond;
    }
}

