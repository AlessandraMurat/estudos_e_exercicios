var lamp = document.getElementById('lamp')

function checkLampIsBroken() {
  return lamp.src.indexOf('quebrada') > -1
}

  function turnOn() {
    if(!checkLampIsBroken()) {
      lamp.src = 'assets/images/ligada.svg'
    }
  }
  function turnOff() {
    if(!checkLampIsBroken()) {
      lamp.src = 'assets/images/desligada.svg'
    }
  }

  lamp.addEventListener('click', breakBulb)

  function breakBulb() {
    lamp.src = 'assets/images/quebrada.svg'
  }