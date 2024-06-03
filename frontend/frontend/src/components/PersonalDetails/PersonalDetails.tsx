import {PersonalDetailsImage, PersonalDetailsLabel} from '../ui/PersonalDetailsComponent'

const PersonalDetails: React.FC = () => {
    
    //PersonalDetails component's style
    const PersonalDetailsStyle = {
        backgroundColor: "#CF1D1D"
    }

    const CoverPhotoParam = {
        src: "#",
        alt: "jin tian shi shang fen de hao ri zi",
        style: {
            backgroundColor: '#FFFFFF',
            width: '15rem',
            height: '15rem'
        }
    }

    //Personal Details Name secion
    const TextboxNameParam = {
        className: "h1",
        text: "Longest name you habe ever seen",
        style: {
            backgroundColor: '#291D36',
            color: '#FFFFFF',
            padding: '0.7rem'
        }
    }

    //Personal Details Location section
    const TextboxLocationParam = {
        className: "h5",
        text: "Chicago, Japan",
        style: {
            backgroundColor: '#291D36',
            color: '#FFFFFF',
            padding: '0.5rem'
        }
    }

    return (
        <div className='d-flex row' style={PersonalDetailsStyle}>
            <div className='col-auto' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsImage content={CoverPhotoParam} />
            </div>
            <div className='col-auto' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsLabel content={TextboxNameParam}/>
                <div style={{margin: '0.9375rem 0', width: 'fit-content'}}>
                    <PersonalDetailsLabel content={TextboxLocationParam} />
                </div>
            </div>
        </div> 
    )
}

export default PersonalDetails