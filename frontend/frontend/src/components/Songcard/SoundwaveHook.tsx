import { useCallback, useRef, createContext, useContext, useState, ReactNode, SetStateAction } from 'react'
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

    return {containerRef, isReady, isPlaying, currentTime, onPlayPause}
}

interface trackReadyInterface {
    isReady: boolean,
    setIsReady: React.Dispatch<SetStateAction<boolean>>
}

const TrackReady = createContext<trackReadyInterface | undefined>(undefined) 

export const useTrackReady = () => {

    const context: trackReadyInterface | undefined = useContext(TrackReady)
    if (context === undefined) {
        throw new Error('useTrackReady must be used within a IsReady')
    }
    return context

}

export const IsReady: React.FC<{children: ReactNode}> = ({children}) => {
    const [isReady, setIsReady] = useState(false)

    return (
        <TrackReady.Provider value={{isReady, setIsReady}}>
            {children}
        </TrackReady.Provider>
    )

}

