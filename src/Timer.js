// styles
import './timer.scss'

export default function Timer() {
    return(
        <article className='container-timer'>
             
            <span className='timer-time'>
                10:10
            </span>
            
            <span className='timer-msg'>
                pause
            </span>

        </article>
    )
}