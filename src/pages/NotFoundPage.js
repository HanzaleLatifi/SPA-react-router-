import React from 'react'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <p>404</p>
            <p>Page Not Found</p>
            <Link to='/' >BACK TO HOME</Link>

        </div>
    )
}

export default NotFoundPage
