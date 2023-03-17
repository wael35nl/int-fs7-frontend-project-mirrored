import {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import { FaHeart, FaAngleRight } from 'react-icons/fa';

import { useAppDispatch } from '../../app/hooks';
import { CountriesT } from '../../types/Countries';
import { favorite } from '../../features/countries/countriesSlice';

type TodoProps = {
  countries: CountriesT[]
}

const Country = ({countries}: TodoProps) => {
  const dispatch = useAppDispatch();

  const [favoriteObject, setFavoriteObject] = useState('');

  const handleFavorite = (name: string) => {
    if (!favoriteObject.includes(name)) setFavoriteObject(previous => previous = previous + ',' + name);
    else setFavoriteObject(previous => previous.replace(name, ''));
    dispatch(favorite(name));
  }

  const country = countries.map((country, index) =>
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
                    Object.keys(languages).map(language => <li key={uuidv4()}># {language}</li>) : ''
                  }
                </ul>
            </td>
            <td onClick={() => {handleFavorite(name)}}><FaHeart className={favoriteObject.includes(name) ? 'is-favorite' : 'not-favorite'}/></td>
            <td><Link to={name} state={{region, population}}><FaAngleRight /></Link></td>
        </tr>
  </tbody>
      );
    });
  return (
    <>{country}</>
  );
}

export default Country;