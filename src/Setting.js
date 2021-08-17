// styles
import './setting.scss'

export default function Setting(props) {

    const toggleSettings = () => {
        props.toggleSettings()
    }

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
                                />
                            </label>
                            <label>
                                short break
                                <input
                                    type='number'
                                />
                            </label>
                            <label>
                                long break
                                <input
                                    type='number'
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

                <button>
                apply
            </button>

            </div>
        </article>
    )
}