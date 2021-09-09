import React from 'react'
import '../App.css'
import { NavLink, withRouter } from 'react-router-dom'
function Navigation(props) {
    const items=[
        {name:"Home" , to:"/" , exact:true} ,
        {name:"Aboutus" , to:"/about-us"},
        
    ]

    
    console.log(props)
    return (
        
            <nav>
                <ul>
                    {items.map(item=>{
                        return(
                            <li>
                                <NavLink to={item.to} activeClassName="activeLink" exact={item.exact}>
                                    {item.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        
    )
}

export default withRouter(Navigation)
