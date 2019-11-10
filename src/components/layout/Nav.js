import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return(
            <nav className='navbar-header'>
                <div className='nav-container'>
                    <ul className="navbar navbar-default">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/creatures">View All Creatures</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/creatures/new">Add New Creature</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav