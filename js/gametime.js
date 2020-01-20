let play = false;
let m = 0;
let s = 10;
let change = 5;
let warn = 5;
let game = 1;

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
  var el = document.getElementById(element);
  var interval = setInterval(function() {
      // if the time is 15 then warn players to prepare for changeover
      if (time <= warn && time > 0)
      {
        playAudio(1);
        document.getElementsByTagName('body')[0].style.backgroundColor = '#DC143C';
      }
      else
      {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#1E1E1E';
      }
      // if the time is 0 then end the counter
      if (time == 0) {
          playAudio(0);
          var text = "Change!";
          el.innerHTML = text;
          setTimeout(function() {
              countdown('clock', m, s);
          }, change * 1000);
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
  }, 1000);
  document.getElementById('counter').innerHTML = `${game}`;
  game += 1;
}

function playAudio(i)
{
  switch (i)
  {
    case 0:
      document.getElementById('horn').play();
      break;
    case 1:
      document.getElementById('beep').play();
      break;
  }
}