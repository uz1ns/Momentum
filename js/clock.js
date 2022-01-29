const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    let h = String(date.getHours()).padStart(2, "0");
    let m = String(date.getMinutes()).padStart(2, "0");
    let s = String(date.getSeconds()).padStart(2, "0");

    let t = `${h}:${m}:${s}`;

    clock.innerText = t;
}

getClock();
setInterval(getClock, 1000);    