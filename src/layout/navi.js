import React from 'react';
import '../styles/navi.css'

const Nav = () => {
    return (
        <nav>
            <div className="nav_div"></div>
            <ul className="nav_list">
                <li className="nav_link">Home</li>
                <li className="nav_link">About</li>
                <li className="nav_link">Projects</li>
                <li className="nav_link">Skills</li>
                <li className="nav_link">Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;