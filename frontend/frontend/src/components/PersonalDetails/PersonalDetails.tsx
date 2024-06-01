import {PersonalDetailsImage, PersonalDetailsLabel, PersonalDetailsLocation} from '../ui/PersonalDetailsComponent'

const PersonalDetails: React.FC = () => {
    const PersonalDetailsStyle = {
        backgroundColor: "#CF1D1D"
    }

    return (
        <div className='d-flex row' style={PersonalDetailsStyle}>
            <div className='col-auto' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsImage content='#'/>
            </div>
            <div className='col-auto' style={{margin: '0.9375rem 0'}}>
                <PersonalDetailsLabel content='This is the longest Name you will ever see'/>
                <div style={{margin: '0.9375rem 0', width: 'fit-content'}}>
                    <PersonalDetailsLocation content='Chicago, Asalamulaikum Bitch' />
                </div>
            </div>
        </div> 
    )
}

export default PersonalDetails