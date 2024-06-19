import { Routes, Route } from "react-router-dom"
import SidebarMenu from "./components/Sidebar/Sidebar"
import SidebarContextProvider from "./components/Sidebar/SidebarHooks"
import Header from "./components/header/header"
import PersonalProfile from "./pages/PersonalProfilePage"
import HomePage from "./pages/HomePage"
import All from "./components/All/All"
import Popular from "./components/Popular/Popular"
import Repost from "./components/Repost/Repost"
import { IsReady } from "./components/Songcard/SoundwaveHook"

const App: React.FC = () => {
  return (
    <SidebarContextProvider>
      <IsReady>
        <Header />
          <SidebarMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/*" element={<PersonalProfile />}>
              <Route index path="all" element={<All />}/> 
              <Route path="popular" element={<Popular />}/>
              <Route path="repost" element={<Repost />}/>
            </Route>
          </Routes>
      </IsReady>
    </SidebarContextProvider>
  )
}

export default App



