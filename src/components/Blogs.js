import React from 'react'
import {Link} from 'react-router-dom'
import queryString from 'query-string'

function Blogs(props) {
   const id = props.match.params.id ;
   const parsed = queryString.parse(props.location.search);
   console.log(parsed)

   

    return (
        <div>
            <p> blogNumber:{id}</p>
             <Link to="/blog">back to blog</Link>
             <br/>
             <Link to={`/blog/${parseInt(id) +1}`}>go to next Page</Link>
             
        </div>
    )
}

export default Blogs
