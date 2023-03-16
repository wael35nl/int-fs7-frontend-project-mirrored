import { NavLink } from "react-router-dom";

import { FaBars, FaHome, FaGlobeAmericas, FaHeart, FaToggleOn } from 'react-icons/fa';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <h4><NavLink to='/'><FaBars/></NavLink> &nbsp; <span>Country</span></h4>
      <ul className='nav__links'>
        <li><NavLink to='/'><FaHome/></NavLink></li>
        <li><NavLink to='/about'><FaGlobeAmericas /></NavLink></li>
        <li><NavLink to='/favorite'><FaHeart /></NavLink></li>
        <li><NavLink to='/'><FaToggleOn /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;