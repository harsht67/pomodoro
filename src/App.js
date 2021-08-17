// styles.scss
import './app.scss';

// components
import Nav from './Nav'
import Timer from './Timer'

export default function App() {
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
          <i class="fas fa-cog"></i>
        </div>

      </footer>


    </div>
  )
}