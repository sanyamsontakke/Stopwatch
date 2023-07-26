let hour,
timer,
minute,
seconds,
interval;

let getSeconds = 0,
    getMinutes = 0,
    getHour = 0;

function stopwatch () {
    this.start = function () {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        seconds = document.getElementById("seconds");

        if (getSeconds >= 0) {
            getSeconds++;
            seconds.innerHTML = getSeconds;
        }
        if (getSeconds < 10) {
            seconds.innerHTML = "0" + getSeconds;
        }
        if (getSeconds >= 60) {
            getSeconds = 0;
            getMinutes++;
            minute.innerHTML = getMinutes;
        }
        if (getMinutes < 10) {
            minute.innerHTML = "0" + getMinutes + ":";

        }
        if (getMinutes >= 60) {
            getMinutes = 0;
            getHour++;
            hour.innerHTML = getHour;
        }
        if (getHour < 10) {
            hour.innerHTML = "0" + getHour + ":"
        }
        interval = setTimeout(object.start, 1000);
    }
    this.Stop = function () {
        clearTimeout(interval);

    }//stop the watch
    
    this.Reset = function () {
        if (getSeconds >= 0) {
            getSeconds = 0;
            getHour = 0;
            getMinutes = 0;

            seconds.innerHTML = "0" + getSeconds;
            minute.innerHTML = "0" + getMinutes + ":"
            hour.innerHTML = "0" + getHour + ":"
            clearTimeout(interval);

        }

    }
}
let object = new stopwatch();
