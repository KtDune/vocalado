import PlayButton from "./PlayButton"
import useSoundwave from "./SoundwaveHook"

const Track: React.FC = () => {
    const trackStyle = {
        borderRadius: "6px",
        backgroundColor: 'white'
    }

    const {containerRef, isReady, isPlaying, onPlayPause, currentTime} = useSoundwave()

    return (
        <div style={trackStyle}>
            <div className="row">
                <div className="col-2">
                    <PlayButton isPlaying={isPlaying} onPlayPause={onPlayPause} />
                </div>
                <div className="col-10">
                <div ref={containerRef} className="w-2"/>
                </div>
            </div>
        </div>
    )
}

export default Track