import { useCallback, useRef, createContext, useContext, useState, ReactNode } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import song from '../../assets/Vaundy Music Video.mp3'

export const useSoundwave = () => {
    const containerRef= useRef(null)

    const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        url: song,
        waveColor: 'black',
        height: 70,
    })

    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])

    return {containerRef, isPlaying, currentTime, onPlayPause}
}

const TrackReady = createContext<boolean | undefined>(true) 

export const useTrackReady = () => {

    const context: boolean | undefined = useContext(TrackReady)
    if (!context) {
        console.log(context)
        throw new Error('useTrackReady must be used within a IsReady')
    }
    return context

}

export const IsReady: React.FC<{children: ReactNode}> = ({children}) => {
    const [isPlaying] = useState(false)

    return (
        <TrackReady.Provider value={isPlaying}>
            {children}
        </TrackReady.Provider>
    )

}

