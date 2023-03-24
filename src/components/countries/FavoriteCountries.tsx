import { Link } from 'react-router-dom';
import { FaHeart, FaAngleRight } from 'react-icons/fa';
import { v4 as uuidv4} from 'uuid';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { favorite, selectCountries } from '../../features/countries/countriesSlice';

import style from '../../module.css/countries.module.css';

const FavoriteCountries = () => {
    const {favoriteCountries} = useAppSelector(selectCountries);
    const dispatch = useAppDispatch();

    const country = favoriteCountries.map((country, index) =>
    {
      const name = country.name.common;
      const {region, population, flags, languages} = country;
      return (
        <tbody key={index}>
        <tr>
            <td><img src={flags.png} alt={flags.alt}/></td>
            <td>{name}</td>
            <td>{region}</td>
            <td>{population}</td>
            <td>
                <ul>
                  {
                    languages !== null && languages !== undefined ?
                    Object.values(languages).map(language => <li key={uuidv4()}># {language}</li>) : <li className={style.no__info}>Unknown</li>
                  }
                </ul>
            </td>
            <td onClick={() => {dispatch(favorite(name))}}><FaHeart className={favoriteCountries.includes(country) ? style.is__favorite : style.not__favorite}/></td>
            <td><Link to={name} state={country}><FaAngleRight /></Link></td>
        </tr>
  </tbody>
      );
    });
  return (
    <>
      {country}
    </>
  );
}

export default FavoriteCountries;