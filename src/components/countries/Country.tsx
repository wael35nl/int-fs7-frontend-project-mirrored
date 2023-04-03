import { Link } from 'react-router-dom';
import { FaHeart, FaAngleRight } from 'react-icons/fa';
import { v4 as uuidv4} from 'uuid';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CountriesT } from '../../types/Countries';
import { favorite, selectCountries } from '../../features/countries/countriesSlice';

import style from '../../module.css/countries.module.css';

type CountryProps = {
  countries: CountriesT[]
}

const Country = ({countries}: CountryProps) => {
  const {favoriteCountries} = useAppSelector(selectCountries);
  const dispatch = useAppDispatch();

  const country = countries.map((country, index) =>
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
                    languages ?
                    Object.values(languages).map(language => <li key={uuidv4()}># {language}</li>) : <li className={style.no__info}>Unknown</li>
                  }
                </ul>
            </td>
            <td><FaHeart onClick={() => {dispatch(favorite(name))}} className={favoriteCountries.includes(country) ? style.is__favorite : style.not__favorite}/></td>
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

export default Country;