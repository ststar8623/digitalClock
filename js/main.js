var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.shadowBlur = 50;

function degToRad(degrees){
    return degrees*Math.PI/180;
}


function getTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds+(milliseconds/1000);
    var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
    var months = month[now.getMonth()];
    var days = now.getDay();
    var year = now.getYear() + 1900;


    //Background
    var gradient = ctx.createRadialGradient(250,250,5,250,250,250);
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,500,500);

    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 220, degToRad(270), degToRad(hours*30-90));
    ctx.stroke();

    //Minutes
    ctx.beginPath();
    ctx.arc(182, 200, 1, degToRad(270), degToRad(minutes*3-360));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(322, 200, 1, degToRad(270), degToRad(minutes*3-360));
    ctx.stroke();

    //Seconds
    ctx.beginPath();
    ctx.arc(250, 290, 140, degToRad(0), degToRad(newSeconds*3-360));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 200, 50, degToRad(180), degToRad(newSeconds*3-180));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(320, 200, 50, degToRad(180), degToRad(newSeconds*3-180));
    ctx.stroke();

    if ( seconds % 2 ) {
        ctx.strokeStyle = "#000"
        ctx.shadowColor = "#4EC9F2"
    } else {
        ctx.strokeStyle = '#4EC9F2'
        ctx.shadowColor = "#4EC9F2"
    }

    ctx.font = '25px Orbitron';
    ctx.fillStyle = '#4EC9F2';
    ctx.fillText(months, 180, 240);
    ctx.fillText(days, 300, 270);
    ctx.fillText(year, 280, 300);
    ctx.fillText(time, 180, 350);

    var dataURL = canvas.toDataURL();

    document.getElementById('myImage').src = dataURL;
  
}

setInterval(getTime, 40);