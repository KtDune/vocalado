import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/Edit White Icon.svg'

const Navbar: React.FC<{children : ReactNode}> = ({children}) => {

    const NavbarStyle = {
        backgroundColor: "#00436C",
        margin: "0 -12px"
    }

    const ButtonStyle = {
        backgroundColor: "#00436C",
        borderRadius: "0",
        border: "none",
        fontWeight: '3'
    }

    return (
        <>
            <nav className="nav nav-tabs mt-3" style={NavbarStyle}>
                <Link className="nav-link text-white fs-4" to="/user/all">All</Link>
                <Link className="nav-link text-white fs-4" to="/user/popular">Popular</Link>
                <Link className="nav-link text-white fs-4" to="/user/repost">Repost</Link>
                <button className="btn btn-secondary navbar-item ms-auto" style={ButtonStyle}>
                    <img src={editIcon} alt="edit" className='img-fliud me-2' style={{width: '1rem', height: '1rem'}}/>Edit
                </button>
            </nav>
            {children}
        </>
    )
}

export default Navbar
