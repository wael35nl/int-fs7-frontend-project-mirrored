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
    <nav className={style.navbar}>
      <div className={style.navbar__drop}>
          <FaBars onClick={() => {
            !showList ? setShowList(!showList) : setShowList(!showList);
          }}/>
          {showList &&
            <ul className={style.navbar__drop_list}>
              <li onClick={() => {dispatch(getAllCountries()); setShowList(!showList)}}>All</li>
              <li onClick={() => handleRegionSearch('Americas')}>America</li>
              <li onClick={() => handleRegionSearch('Europe')}>Europe</li>
              <li onClick={() => handleRegionSearch('Asia')}>Asia</li>
              <li onClick={() => handleRegionSearch('Africa')}>Africa</li>
              <li onClick={() => handleRegionSearch('Oceania')}>Oceania</li>
              <li onClick={() => handleRegionSearch('Antarctic')}>Antarctica</li>
            </ul>
          }
        <h4>Regions</h4>
      </div>
      <ul className={style.nav__links}>
        <li><NavLink to='/'><FaHome/></NavLink></li>
        <li><NavLink to='/CountriesPage'><FaGlobeAmericas /></NavLink></li>
        <li><NavLink to='/favorite'><FaHeart /></NavLink></li>
        <li><NavLink to='/'><FaToggleOn /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;