import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


const Navbar = () => {

  return(
    <nav className='nav-wrapper green darken-4'>
      <div className='container'>
        <Link to="/" className='brand-logo'>My APP</Link>
        <ul className='right'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
