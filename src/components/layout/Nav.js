import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return(
            <nav className='blue darken-3'>
                <div className='container'>
                    <Link to="/"className="brand-logo">Home</Link>
                    <ul className="right">
                        <li>
                            <Link to="/creatures/new">Add New Creature</Link>
                        </li>
                        <li>
                            <Link to="/creatures">View All Creatures</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav