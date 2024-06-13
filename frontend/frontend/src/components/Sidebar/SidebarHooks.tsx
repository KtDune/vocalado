import { ReactNode, createContext, useContext, useState } from 'react'

interface SidebarContextType {
  sidebarState: boolean,
  toggleSidebarState: () => void
}

//Context Provider for sidebar control
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

const SidebarContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [sidebarState, setSidebarState] = useState(false)
  const toggleSidebarState = () => {
    setSidebarState((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{sidebarState, toggleSidebarState}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
