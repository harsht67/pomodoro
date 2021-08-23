// styles
import './nav.scss'

export default function Nav(props) {

    const changeHandler = (e) => {
        let val = e.target.getAttribute('data-val')
        props.changeTimer(val)
    }

    return(
        <article className='container-nav'>

            <nav>
                <ul>
                    <li
                        data-val='pomodoro'
                        onClick={changeHandler}
                    >
                        pomodoro
                    </li>
                    <li
                        data-val='short'
                        onClick={changeHandler}
                    >
                        short break
                    </li>
                    <li
                        data-val='long'
                        onClick={changeHandler}
                    >
                        long break
                    </li>
                </ul>
            </nav>

        </article>
    )
}