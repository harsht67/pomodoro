// styles
import { useEffect, useState } from 'react'
import './setting.scss'

export default function Setting({timer, ...props}) {

    const [time, setTime] = useState({
        pomodoro: 0,
        short: 0,
        long: 0,
    })

    // loads current time's on component mount
    useEffect(() => {
        setTime({
            pomodoro: timer.pomodoro,
            short: timer.short,
            long: timer.long,
        })
    }, [])

    const changeHandler = (e) => {
        const {name, value} = e.target
        setTime({
            ...time,
            [name]: value,
        })
    }

    const toggleSettings = () => {
        props.toggleSettings()
    }

    const saveChanges = () => {
        props.changeTimerVals({
            ...timer,
            ...time,
        })

        toggleSettings()
    }

    const {pomodoro, short, long} = time
    return(
        <article className='setting-bck'>
            <div className='container-setting'>

                <header>

                    <span
                        className='setting-title'
                    >
                        settings
                    </span>

                    <i 
                        class="fas fa-times"
                        onClick={toggleSettings}
                    />

                </header>

                <section className='setting-cat'>

                    <section className='cat-time'>

                        <span className='cat-title'>
                            time (minutes)
                        </span>
                    
                        <div className='time-container'>
                            <label>
                                pomodoro
                                <input
                                    type='number'
                                    name='pomodoro'
                                    value={pomodoro}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                short break
                                <input
                                    type='number'
                                    name='short'
                                    value={short}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                long break
                                <input
                                    type='number'
                                    name='long'
                                    value={long}
                                    onChange={changeHandler}
                                />
                            </label>
                        </div>

                    </section>

                    <section className='cat-font'>
                        
                        <span className='cat-title'>
                            font
                        </span>


                    </section>

                    <section className='cat-color'>
                        <span className='cat-title'>
                            color
                        </span>

                    </section>

                </section>

                <button
                    onClick={saveChanges}
                >
                    apply
                </button>

            </div>
        </article>
    )
}