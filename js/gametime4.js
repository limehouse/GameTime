let controls = document.getElementById('controls');
let gametime = document.getElementById('gametime');
let intermission = document.getElementById('intermission');
let demo = document.getElementById('demo');
let min, sec, int, warn;

function startpause(i)
{
  console.log("click", i.id);
  controls.style.display = 'none';
  demo.style.display = 'none';
  min = 0; // available options return seconds only
  sec = gametime.value;
  int = intermission.value;
  warn = 60;
  countdown(i.id, min, sec, int, warn);
}

function demonstration()
{
  console.log("start demo");
  controls.style.display = 'none';
  demo.style.display = 'none';
  min = 0; // available options return seconds only
  sec = 10;
  int = 2;
  warn = 3;
  countdown('timer', min, sec, int, warn);
}

function countdown(element, minutes, seconds, intermission, warning)
{
  console.log(element, minutes, seconds, intermission, warning);
  let time = minutes * 60 + seconds;
  let el = document.getElementById(element);
  let interval = setInterval(function() {
    // start or restart the timer
    if (time < 0)
    {
      let text = 'Change';
      el.innerHTML = text;
      setTimeout(function() {
        countdown('timer', min, sec, int, warn);
      }, intermission * 1000);
      clearInterval(interval);
      return;
    }
    else if (time == warning)
    {
      console.log("Warning!");
    }
    let minutes = Math.floor(time / 60);
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = time % 60;
    if (seconds < 10) seconds = '0' + seconds;
    let text = minutes + ':' + seconds;
    el.innerHTML = text;
    time--;
  }, 1000);
}