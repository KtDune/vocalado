import playIcon from '../../assets/Play icon 90.png'
import pauseIcon from '../../assets/Pause White Icon.png'

interface playButtonProp {
    isPlaying: boolean
    onPlayPause: () => void
}

const PlayButton: React.FC<playButtonProp> = ({isPlaying, onPlayPause}) => {

    return (
        <button type='button' onClick={onPlayPause}  className="rounded-circle">
            <img src={isPlaying ? pauseIcon : playIcon} alt='Play music' />
        </button>
    )
}

export default PlayButton