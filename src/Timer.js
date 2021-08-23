// styles
import { useEffect, useState } from 'react'
import './timer.scss'

export default function Timer({timer}) {

    const [paused, setPaused] = useState(true)

    const [state, setState] = useState('start')

    // interval
    const [i, setI] = useState(null)

    // timer time 
    const [time, setTime] = useState({
        min: timer[timer.curr],
        sec: 0,
    })

    //
    useEffect(() => {
        setTime({
            ...time,
            min: timer[timer.curr],
            sec: 0,
        })
    }, [timer])

    // to stop when timer reaches 0 
    useEffect(() => {
        if(time.min==0 && time.sec==0){
            setState('end')
            clearInterval(i)
        }
    })

    // start/pause/resume/reset - timer
    const toggleTimer = () => {
        let curr = state

        if(curr != 'end'){
            if(curr == 'start'){
                curr = 'live'
                setState(curr)
            }
            
            if(curr == 'live'){
                if(paused) {
                    setI(setInterval(calcTime, 25))
                }
                else {
                    i && clearInterval(i)
                }
                setPaused(prev => !prev)
            }
        }
        else {
            resetTimer()
            setState('start')
            setPaused(true)
        }
    }

    // calculate new values for min & sec by decrementing 1s whenever called
    const calcTime = () => {
        setTime(prev => {
            let mins = prev.min
            let secs = prev.sec
            let total = mins*60 + secs
    
            total-=1
            mins = Math.floor(total/60)
            secs = total - mins*60

            return {
                ...prev,
                min: mins,
                sec: secs,
            }
        })
    }

    // reset timer function
    const resetTimer = () => {
        setTime({
            min: timer[timer.curr],
            sec: 0,
        })
    }

    const {min, sec} = time
    return(
        <article 
            className='container-timer'
            onClick={toggleTimer}
        >
             
            <span className='timer-time'>
                {`${min}:${Math.floor(sec/10)==0?'0'+sec:sec}`}    {/*to display single digit number like 7 as 07 */}
            </span>
            
            <span className='timer-msg'>
                { state == 'start' && 'start' }
                { state == 'live' && 
                  (paused ? "resume" : "pause")
                }
                { state == 'end' && 'reset' }
            </span>

        </article>
    )
}