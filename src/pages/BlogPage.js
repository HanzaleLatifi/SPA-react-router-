import React from 'react'
import {Link} from 'react-router-dom'
const items=[
    {name:"blogs1" , to:"/blog/1" } ,
    {name:"blogs2" , to:"/blog/2"},
    {name:"blogs3" , to:"/blog/3"}
    
]

function BlogPage(props) {
   
    return (
        <div>
            BlogPage 
            {items.map(item=>{
                        return(
                            <li key={item.to}>
                                
                                <Link to={item.to} >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })} 
        </div>
    )
}

export default BlogPage
