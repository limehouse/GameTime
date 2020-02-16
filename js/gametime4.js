let controls = document.getElementById('controls');
let gametime = document.getElementById('gametime');
let intermission = document.getElementById('intermission');
let min, sec, int;

function startpause(i)
{
  console.log("click", i.id);
  controls.style.display = 'none';
  min = 0; // available options return seconds only
  sec = gametime.value;
  int = intermission.value;
  countdown(i.id, min, sec, int);
}

function countdown(element, minutes, seconds, intermission)
{
  console.log(element, minutes, seconds, intermission);
  let time = minutes * 60 + seconds;
  let el = document.getElementById(element);
  let interval = setInterval(function() {
    if (time == 0)
    {
      let text = 'Change!';
      el.innerHTML = text;
      setTimeout(function() {
        countdown('timer', min, sec);
      }, intermission * 1000);
      clearInterval(interval);
      return;
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