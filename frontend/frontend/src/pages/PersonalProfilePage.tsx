import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'
import UserProfileState from '../components/UserProfileState/UserProfileState'

//Personal Progile Pages
const PersonalProfile: React.FC = () => {

    //to set a margin between header and Personal Profile
    const PersonalProfileStyle = {
        margin: '2rem'
    }

    return (
        <div style={PersonalProfileStyle}>
        <PersonalDetails />
        <Navbar>
                <div className='container-fluid mt-4' style={{margin: "0 23px"}}>
                    <div className='row'>
                        <div className='col-sm-9'>
                                <Outlet />
                        </div>
                        <div className='col-sm-3'>
                            <UserProfileState />
                        </div>
                    </div>
                </div>
        </Navbar>
    </div>

    )
}

export default PersonalProfile