import Navbar from '../components/Navbar/Navbar'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'

//Personal Progile Pages
const PersonalProfile: React.FC = () => {

    //to set a margin between header and Personal Profile
    const PersonalProfileStyle = {
        margin: '2rem'
    }

    return (
        <div style={PersonalProfileStyle}>
        <PersonalDetails />
        <Navbar />
    </div>

    )
}

export default PersonalProfile