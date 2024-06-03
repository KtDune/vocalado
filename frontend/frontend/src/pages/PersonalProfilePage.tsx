import Header from '../components/header/header'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'
import SidebarMenu from '../components/Sidebar/Sidebar'
import SidebarContextProvider from '../components/Sidebar/SidebarHooks'

//Personal Progile Pages
const PersonalProfile: React.FC = () => {

    //to set a margin between header and Personal Profile
    const PersonalProfileStyle = {
        margin: '2rem'
    }

    return (
        <SidebarContextProvider>
            <Header />
            <div style={PersonalProfileStyle}>
                <PersonalDetails />
                <SidebarMenu />
            </div>
        </SidebarContextProvider>

    )
}

export default PersonalProfile