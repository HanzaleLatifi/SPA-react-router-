import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import DownLoad from '../components/DownLoad'

function ProfilePage() {
    return (
        <>
            <div className="sideBar">
                <ul>
                    <li>
                        <NavLink to="/profile/dashboard" activeClassName="activeLink" >DashBoard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/download" activeClassName="activeLink">DownLoad</NavLink>
                    </li>
                </ul>
            </div>
            <Route path="/profile/dashboard" component={DownLoad} ></Route>
            <Route path="/profile/download" component={DashBoard}></Route>
        </>

    )
}

export default ProfilePage
