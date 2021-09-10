import React from 'react'
import {Link} from 'react-router-dom'

function Blogs(props) {
   const id = props.match.params.id ;

    return (
        <div>
            <p> blogNumber:{id}</p>
             <Link to="/blog">back to blog</Link>
             
        </div>
    )
}

export default Blogs
