import { Link } from "react-router-dom"
import { useSidebar } from "./SidebarHooks"

const SidebarMenu: React.FC = () => {
    const {sidebarState, toggleSidebarState} = useSidebar()
    
        return (
            <div className={`offcanvas offcanvas-start ${sidebarState ? 'show' : ''} w-10`} //use state from PersonalProfilePages to control if the sidebar is showed
            style={{ visibility: sidebarState ? 'visible' : 'hidden'}}>
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title d-none d-sm-block">Menu</h6>
                    <button type="button" className="btn-close text-reset" aria-label="Close" onClick={toggleSidebarState}></button>
                </div>
                <div className="offcanvas-body px-0">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start">
                        <li className="nav-item">
                            <i className="fs-5 bi-house"></i><Link to="/" className="ms-1 d-none d-sm-inline" style={{textDecoration: "none"}}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default SidebarMenu


