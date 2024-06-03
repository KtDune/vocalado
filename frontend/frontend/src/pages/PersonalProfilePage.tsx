import { useState } from 'react'
import Header from '../components/header/header'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'
import SidebarMenu from '../components/Sidebar/Sidebar'
import SidebarContext from '../components/Sidebar/SidebarHooks'

//Personal Progile Pages
const PersonalProfile: React.FC = () => {
    const [sidebarState, setSidebarState] = useState(false)
    const toggleSidebarState = () => {
        setSidebarState(!sidebarState)
    }

    //to set a margin between header and Personal Profile
    const PersonalProfileStyle = {
        margin: '2rem'
    }

    return (
        <SidebarContext.Provider value={toggleSidebarState}>
            <Header />
            <div style={PersonalProfileStyle}>
                <PersonalDetails />
                <SidebarMenu sidebarState={sidebarState} />
            </div>
        </SidebarContext.Provider>

    )
}

export default PersonalProfile