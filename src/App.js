// styles.scss
import './app.scss';

// components
import Nav from './Nav'
import Timer from './Timer'
import Setting from './Setting'
import { useState } from 'react'

import { GlobalStyle } from './styles'

export default function App() {

  const [setting, setSetting] = useState(false)
  // show/hide settings window
  const toggleSettings = () => {
    setSetting(prev => !prev)
  }

  const [timer, setTimer] = useState({
    curr: "pomodoro",
    pomodoro: 1,
    short:10,
    long: 15,
  })

  // change default values of pomodoro & short/long break
  const changeTimerVals = (newObj) => {
    setTimer({
      ...newObj,
    })
  }

  // change current timer
  const changeTimer = (val) => {
    setTimer({
      ...timer,
      curr: val,
    })
  }

  // current theme & font
  const [curr, setCurr] = useState({
    font: 'arial',
    color: '',
  })

  const changeFont = (val) => {
    setCurr({
      ...curr,
      font: val,
    })
  }

  const changeColor = (val) => {
    setCurr({
      ...curr, 
      color: val,
    })
  }

  return (
    <div className='container-app'>
      
      <GlobalStyle 
        theme = {curr}
      />

      <header>

        <span className='app-title'>
          pomodoro
        </span>

      </header>
      
      <main>

        <Nav 
          changeTimer = {changeTimer}
        />

        <Timer 
          timer = {timer}
        />

      </main>

      <footer>

        <div>
          <i 
            class="fas fa-cog"
            onClick = {toggleSettings}
          />
        </div>

      </footer>

      { setting &&
          <Setting
            toggleSettings = {toggleSettings}
            changeTimerVals = {changeTimerVals}
            changeFont = {changeFont}
            changeColor = {changeColor}
            timer = {timer}
          />
      }


    </div>
  )
}