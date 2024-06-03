import { createContext, useContext } from 'react'

interface SidebarContextType {
  value: () => void
}

//Context Provider for sidebar control
const SidebarContext = createContext<SidebarContextType["value"] | undefined>(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export default SidebarContext
