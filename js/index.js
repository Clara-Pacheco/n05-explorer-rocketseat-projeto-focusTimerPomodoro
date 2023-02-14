
// Named import
import { ToggleButtons } from "./controls.js"

// Named import
import { Timer } from "./timer.js"

import { elements } from './elements.js'

import soundsElements from './sounds.js'

let {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  displayMinutes,
  displaySeconds,
  minutes
} = elements   // Destructuring 

const controls = ToggleButtons({
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  btnPlay,
  controls, 
  minutes
})

const sounds = soundsElements()


btnPlay.addEventListener('click', () => {
  controls.toggleStopSetButtons()
  controls.togglePlayPauseButtons()
  sounds.pressButton()
  
  

  if (btnStop.classList.contains('hide')) {
    controls.toggleStopSetButtons()
  }

  timer.countDown()
});

btnPause.addEventListener('click', () => {
  controls.togglePlayPauseButtons()
  sounds.pressButton()


  timer.hold()
});

btnStop.addEventListener('click', () => {
  timer.resetTimer()
  timer.updateTimerDisplay(minutes,0)
  sounds.pressButton()
});

btnSoundOn.addEventListener('click', () => {
  controls.toggleSoundOnOff()
  sounds.bgAudio.play()
});

btnSoundOff.addEventListener('click', () => {
  controls.toggleSoundOn()
  sounds.bgAudio.pause()
  
});

btnSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    // timer.resetTimer()
    controls.togglePlayPauseButtons()
    controls.togglePlayPauseButtons()
    return
    
  }

  minutes = newMinutes
  timer.updateTimerDisplay(minutes, 0)
  timer.updateMinutes(newMinutes)

})
