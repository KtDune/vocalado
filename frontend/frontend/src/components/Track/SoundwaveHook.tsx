import { useCallback, useRef } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import song from '../../assets/Vaundy Music Video.mp3'

const useSoundwave = () => {
    const containerRef = useRef(null)

    const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        url: song,
        waveColor: 'black',
        height: 100,
    })

    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])

    return {containerRef, isReady, isPlaying, currentTime, onPlayPause}
}
export default useSoundwave

