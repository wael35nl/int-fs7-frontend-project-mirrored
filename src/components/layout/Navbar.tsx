import {useState} from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaGlobeAmericas, FaHeart, FaToggleOn } from 'react-icons/fa';

import { useAppDispatch } from '../../app/hooks';
import { region } from '../../features/countries/countriesSlice';
import { getAllCountries } from '../../services';

import style from '../../module.css/layout.module.css';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [showList, setShowList] = useState(false);

  const handleRegionSearch = (regionName: string) => {
    dispatch(region(regionName));
    setShowList(!showList);
  }

  return (
    <nav className='navbar'>
      <div style={{display: 'flex', gap: '1rem'}}>
        <div>
          <FaBars onClick={() => {
            !showList ? setShowList(!showList) : setShowList(!showList);
          }}/>
          {showList &&
            <div style={{position: 'fixed', top: '4.3rem', left: '0.5rem', border: '2px solid black', backgroundColor: 'white', color: 'black', padding: '0.5em', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <p onClick={() => {dispatch(getAllCountries()); setShowList(!showList)}}>All</p>
              <p onClick={() => handleRegionSearch('Americas')}>America</p>
              <p onClick={() => handleRegionSearch('Europe')}>Europe</p>
              <p onClick={() => handleRegionSearch('Asia')}>Asia</p>
              <p onClick={() => handleRegionSearch('Africa')}>Africa</p>
              <p onClick={() => handleRegionSearch('Oceania')}>Oceania</p>
              <p onClick={() => handleRegionSearch('Antarctic')}>Antarctica</p>
            </div>
          }
        </div>
        <h4>Regions</h4>
      </div>
      <ul className='nav__links'>
        <li><NavLink to='/'><FaHome/></NavLink></li>
        <li><NavLink to='/CountriesPage'><FaGlobeAmericas /></NavLink></li>
        <li><NavLink to='/favorite'><FaHeart /></NavLink></li>
        <li><NavLink to='/'><FaToggleOn /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;