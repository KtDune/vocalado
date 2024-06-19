import { PersonalDetailsImage , PersonalDetailsLabel} from "../PersonalDetails/PersonalDetailsComponent"
import ActionButtonGroup from "./ActionButtonGroup"
import Track from "./Track"

const Songcard: React.FC = () => {

    const SongcardStyle = {
        backgroundColor: "#00436C"
    }

    const SongCoverParam = {
        src: "#",
        alt: "cover",
        style: {
            backgroundColor: 'white'
        }
    }

    const Songauthor = {
        className: "h6 text-break",
        text: "Vaundy",
        style: {
            backgroundColor: '#291D36',
            padding: '0,5rem',
            color: '#FFFFFF',
            display: "inline-block"
        }
    }

    const Songtitle = {
        className: "h2 text-break",
        text: "Replica",
        style: {
            backgroundColor: '#291D36',
            margin: '0.5rem 0',
            color: '#FFFFFF',
            display: "inline-block"
        }
    }

    return (

        <div className='row' style={SongcardStyle}>
            <div className='col-3' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsImage content={SongCoverParam} />
            </div>

            <div className='col-9' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsLabel content={Songauthor}/>
                <div style={{margin: '0.9375rem 0'}}>
                    <PersonalDetailsLabel content={Songtitle} />
                </div>
                <Track />
                <ActionButtonGroup />
            </div>

        </div>
    )
}

export default Songcard