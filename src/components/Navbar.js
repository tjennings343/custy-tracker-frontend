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

          <NavLink 
          style={{ marginRight: '10px' }} 
          to="/customers/new"
        >
          Add Customer
          </NavLink>

        </div>
    )
}

export default NavBar