import PlayButton from "./PlayButton"
import {useSoundwave, useTrackReady} from "./SoundwaveHook"

const Track: React.FC = () => {
    const trackStyle = {
        borderRadius: "2.5rem",
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }

    const formatTime = (seconds: number) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')

    const {containerRef, isReady, isPlaying, onPlayPause, currentTime} = useSoundwave()
    const {setIsReady} = useTrackReady()
    setIsReady(isReady)

    return (
        <div style={trackStyle}>
            <div className="row">
                <div className="col-2 ms-auto">
                    <PlayButton isPlaying={isPlaying} onPlayPause={onPlayPause} />
                </div>
                <div className="col-8">
                    <div ref={containerRef} className="w-2"/>
                </div>
                <div className="col-2">
                    <p className="text-white mt-4" style={{backgroundColor: 'black', display: 'inline-block'}}>{formatTime(currentTime)}</p>
                </div>
            </div>
        </div>
    )
}

export default Track