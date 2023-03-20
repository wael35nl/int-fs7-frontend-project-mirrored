import {useState} from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaGlobeAmericas, FaHeart, FaToggleOn } from 'react-icons/fa';

import { useAppDispatch } from '../../app/hooks';
import { region } from '../../features/countries/countriesSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [showList, setShow] = useState(false);

  return (
    <nav className='navbar'>
      <div style={{display: 'flex', gap: '1rem'}}>
        <div>
          <FaBars onClick={() => {
            !showList ? setShow(true) : setShow(false);
          }}/>
          {showList &&
            <div style={{position: 'fixed', top: '4.3rem', left: '0.5rem', border: '2px solid black', backgroundColor: 'white', color: 'black', padding: '0.5em', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <p onClick={() => {dispatch(region('Americas')); setShow(false)}}>America</p>
              <p onClick={() => {dispatch(region('Europe')); setShow(false)}}>Europe</p>
              <p onClick={() => {dispatch(region('Asia')); setShow(false)}}>Asia</p>
              <p onClick={() => {dispatch(region('Africa')); setShow(false)}}>Africa</p>
              <p onClick={() => {dispatch(region('Oceania')); setShow(false)}}>Oceania</p>
              <p onClick={() => {dispatch(region('Antarctic')); setShow(false)}}>Antarctica</p>
            </div>
          }
        </div>
        <h4>Region</h4>
      </div>
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