let play = false;
let m = 0;
let s = 180;
let change = 15;

set();

function set(sec = s)
{
  let minutes = Math.floor(sec/60);
  let seconds = sec % 60;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  if (s == 0)
  {
    document.getElementById('start').disabled = true;
    document.getElementById('submin').disabled = true;
    document.getElementById('subsec').disabled = true;
  }
  else
  {
    document.getElementById('start').disabled = false;
    document.getElementById('submin').disabled = false;
    document.getElementById('subsec').disabled = false;
  }
  document.getElementById('clock').innerHTML = `${minutes}:${seconds}`;
}

function start(a)
{
  console.log(a.id);
  document.getElementById('start').disabled = true;
  document.getElementById('addmin').disabled = true;
  document.getElementById('submin').disabled = true;
  document.getElementById('addsec').disabled = true;
  document.getElementById('subsec').disabled = true;
  countdown('clock', m, s);
}

function addMin(a)
{
  console.log(m, s);
  s += 60;
  set();
}

function subMin(a)
{
  console.log(m, s);
  if (s > 59) s -= 60;
  set();
}

function addSec(a)
{
  console.log(m, s);
  s += 30;
  set();
}

function subSec(a)
{
  console.log(m, s);
  if (s > 29) s -= 30;
  set();
}

function countdown(element, minutes, seconds) {
  // set time for the particular countdown
  var time = minutes*60 + seconds;
  var interval = setInterval(function() {
      var el = document.getElementById(element);
      // if the time is 0 then end the counter
      if (time <= 0) {
          playAudio();
          var text = "Change!";
          el.innerHTML = text;
          setTimeout(function() {
              countdown('clock', m, s);
          }, change);
          clearInterval(interval);
          return;
      }
      var minutes = Math.floor( time / 60 );
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds; 
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
      console.log(minutes, ':', seconds)
  }, 1000);
}

function playAudio()
{
  document.getElementById('myAudio').play();
}