import Header from '../components/header/header'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'

const PersonalProfile: React.FC = () => {
    const PersonalProfileStyle = {
        margin: '2rem'
    }
    return (
        <>
            <Header />
            <div style={PersonalProfileStyle}>
                <PersonalDetails />
            </div>
        </>

    )
}

export default PersonalProfile