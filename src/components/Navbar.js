import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return(
        <div className='navbar'>
            <NavLink 
          style={{ marginRight: '10px' }} 
          to="/customers"
        >
          My Customers
          </NavLink>
        </div>
    )
}

export default NavBar