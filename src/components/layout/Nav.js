import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return(
            <nav className='navbar-header'>
                <div className='nav-container'>
                    <ul className="navbar navbar-expand-lg">
                        <li className="nav-item">
                            <Link to="/"> <img src='https://fontmeme.com/permalink/191110/de41dbbeb5df541456c87146e2821edd.png' alt='home-font'/></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/creatures"><img src='https://fontmeme.com/permalink/191110/770006c0d82576417eb155a31edcfb21.png' alt='index-font' className='index-font'/></Link>
                        </li>
                       
                        <li className='nav-item'>
                            <Link to="/creatures/new"><img src='https://fontmeme.com/permalink/191110/72ef90984b0bc0b188f0769ff06c879a.png' alt='new-font' /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav