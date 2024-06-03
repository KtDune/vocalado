import { useSidebar } from "./SidebarHooks"

interface SidebarProp {
    sidebarState: boolean
}

const SidebarMenu: React.FC<SidebarProp> = ({sidebarState}) => {
    const toggleSidebar = useSidebar()
    
        return (
            <div className={`offcanvas offcanvas-start ${sidebarState ? 'show' : ''} w-25`} //use state from PersonalProfilePages to control if the sidebar is showed
            style={{ visibility: sidebarState ? 'visible' : 'hidden'}}>
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title d-none d-sm-block">Menu</h6>
                    <button type="button" className="btn-close text-reset" aria-label="Close" onClick={toggleSidebar}></button>
                </div>
                <div className="offcanvas-body px-0">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default SidebarMenu
