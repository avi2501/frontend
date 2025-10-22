import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa' 
import {Link} from 'react-router-dom';

import '../style/Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <Link to='/'>Task Creator</Link>
            <ul>
                <li>
                    <Link to='/login'>
                    <FaSignInAlt />Login
                    </Link>
                </li>

                <li>
                    <Link to ='/register'>
                    <FaSignOutAlt />Register
                    </Link>
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Header