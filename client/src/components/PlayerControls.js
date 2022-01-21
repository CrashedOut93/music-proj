import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'
// import {useState} from 'react'

function PlayerControls(props) {
    // const [like, setLike] = useState(false)

    // const handleClick = () => {
    //     setLike(!like)
    // }
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
            <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
            <FontAwesomeIcon icon={faForward} />
            </button>
    

        </div>
    )
}

export default PlayerControls
