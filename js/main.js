function digitalClock(){
    var displayTime = new Date();
    var hour = displayTime.getHours();
    var minute = displayTime.getMinutes();
    var second = displayTime.getSeconds();

    if ( hour > 12 ) {
        hour -= 12
    }

    minute = getTime(minute)
    second = getTime(second)

    document.getElementById('displayClock').innerHTML = hour + ":" + minute + ":" + second

    setTimeout(function(){
        digitalClock();
    }, 1000)
}

function getTime(time){
    if ( time < 10 ) {
        time = "0" + time
    }
    return time
}