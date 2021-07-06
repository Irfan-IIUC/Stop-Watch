window.onload = function(){

let buttonStart = document.querySelector('#btn_start');
let buttonStop = document.querySelector('#btn_stop');
let buttonReset = document.querySelector('#btn_reset');

let appendSecond = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');

let interval;
let seconds=0;
let tens=0;


buttonStart.onclick = () => {

  interval = setInterval(startTimer, 10);
}

buttonStop.onclick = () => {

  this.clearInterval(interval);
}

buttonReset.onclick = () => {

  this.clearInterval(interval);

  seconds = 0;
  tens = 0;

  appendSecond.innerHTML = '0' + seconds;
  appendTens.innerHTML = '0' + tens;
}

function startTimer(){

  tens++;

  tens < 10 ? appendTens.innerHTML = '0' + tens : appendTens.innerHTML = tens;

  if(tens == 100){

    seconds++;
    appendSecond.innerHTML = '0' + seconds;

    tens = 0;
    appendTens.innerHTML = '0' + tens;
  }

  if(seconds > 9){

    appendSecond.innerHTML = seconds;
  }
}

}
