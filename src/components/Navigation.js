import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navigation() {
    return (
        <header>
            <nav>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about-us'>AboutUs</Link>
                </li>
            </nav>
        </header>
    )
}

export default withRouter(Navigation)
