// styles.scss
import './app.scss';

// components
import Nav from './Nav'
import Timer from './Timer'
import Setting from './Setting'
import { useState } from 'react';

export default function App() {

  const [setting, setSetting] = useState(false)
  // show/hide settings window
  const toggleSettings = () => {
    setSetting(prev => !prev)
  }

  return (
    <div className='container-app'>
      
      <header>

        <span className='app-title'>
          pomodoro
        </span>

      </header>
      
      <main>

        <Nav />

        <Timer />

      </main>

      <footer>

        <div>
          <i 
            class="fas fa-cog"
            onClick={toggleSettings}
          />
        </div>

      </footer>

      { setting &&
          <Setting
            toggleSettings={toggleSettings}
          />
      }


    </div>
  )
}