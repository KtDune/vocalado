import Songcard from '../Songcard/Songcard'
import { useTrackReady } from '../Songcard/SoundwaveHook'

const All: React.FC = () => {
    const {isReady} = useTrackReady()

    return (
        <>
            {isReady ? <Songcard /> : <p className='text-white'>Loading.....</p>}
        </>
    )
}

export default All