import { Link } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import { FaHeart, FaAngleRight } from 'react-icons/fa';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { favorite, selectCountries, setFavorites } from '../../features/countries/countriesSlice';

const FavoriteCountries = () => {
    const {favoriteCountries, favorites} = useAppSelector(selectCountries);
    const dispatch = useAppDispatch();

    const handleFavorite = (name: string) => {
      dispatch(setFavorites(name))
      dispatch(favorite(name));
    }

    const country = favoriteCountries.map((country, index) =>
    {
      const name = country.name.common;
      const {region, population, flags, languages} = country;
      return (
        <tbody key={index}>
        <tr>
            <td><img src={flags.png} alt='country flag'/></td>
            <td>{name}</td>
            <td>{region}</td>
            <td>{population}</td>
            <td>
                <ul>
                  {
                    languages !== null && languages !== undefined ?
                    Object.values(languages).map(language => <li key={uuidv4()}># {language}</li>) : ''
                  }
                </ul>
            </td>
            <td onClick={() => {handleFavorite(name)}}><FaHeart className={favorites.includes(name) ? 'is-favorite' : 'not-favorite'}/></td>
            <td><Link to={name} state={country}><FaAngleRight /></Link></td>
        </tr>
  </tbody>
      );
    });
  return (
        <>
          {
          favoriteCountries.length === 0 ?
          <h2 className='page__title'>Add favorites..</h2>
          :
          <table className='countries__table'>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Region</th>
                <th>Population</th>
                <th>Languages</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {country}
          </table>
          }
        </>
  );
}

export default FavoriteCountries;