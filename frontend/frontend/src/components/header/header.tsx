import {useId} from 'react'
import burgerBarIcon from '../../assets/menu_icon.svg'
import {useSidebar} from '../Sidebar/SidebarHooks'

// Burgerbar icon on the top left corner
const BurgerBar: React.FC = () => {
    const {toggleSidebarState} = useSidebar()

    const burgerBarStyle = {
        cursor: 'pointer',
        margin: '0 1rem 0 1rem'
    }


    return (
        <>
            <a href='#' style={burgerBarStyle} onClick={toggleSidebarState}>
                <img src={burgerBarIcon} className="img-fluid"/>
            </a>
        </>
    )
}

//Icon of this website. Currently missing owob
const BrandIcon: React.FC = () => {
const BrandIconStyle = {
    width: '100px',
    backgroundColor: '#757575',
    cursor: 'pointer'
}

    return (
        <a href='#' className='navbar-brand' style={BrandIconStyle}>Logo at here</a>
    )
}

const ProfileButton: React.FC = () => {
    const dropdownId = useId()

    const ProfileButtonStyle = {
        backgroundColor: '#F24822',
        marginRight: '1rem'
    }

    return (
        <div className='dropdown'>
            <button className="btn btn-secondary dropdown-toggle" type="button" 
            data-bs-toggle="dropdown" aria-expanded="false" id={dropdownId} style={ProfileButtonStyle}>
                <img src='#' alt='Google Account' />
            </button>
            <ul className="dropdown-menu" aria-labelledby={dropdownId}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}

const Header: React.FC = () => {
    const HeaderStyle = {
        backgroundColor: '#291D36'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
                <div className="navbar-brand">
                  <BurgerBar /> 
                  <BrandIcon /> 
                </div>
                <ul className='navbar-nav ms-auto'>
                    <ProfileButton />
                </ul> 
            </nav>
        </>
    )
}

export default Header