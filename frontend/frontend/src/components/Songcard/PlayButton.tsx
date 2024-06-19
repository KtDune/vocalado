import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'

interface playButtonProp {
    isPlaying: boolean
    onPlayPause: () => void
}

const PlayButton: React.FC<playButtonProp> = ({isPlaying, onPlayPause}) => {

    return (
        <button type='button' onClick={onPlayPause}  className="btn rounded-circle ms-4" style={{width: '50px', height: '50px', backgroundColor: 'white', margin: '0.7rem 0'}}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </button>
    )
}

export default PlayButton