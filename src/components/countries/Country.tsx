import {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import { FaHeart, FaAngleRight } from 'react-icons/fa';

import { CountriesT } from '../../types/Countries';

type TodoProps = {
  countries: CountriesT[]
}

const Country = ({countries}: TodoProps) => {

  const [favoriteObject, setFavoriteObject] = useState('');

  const handleFavorite = (name: string) => {
    !favoriteObject.includes(name) ? setFavoriteObject(previous => previous += name) : setFavoriteObject(previous => previous.replace(name, ''))
  }

  const country = countries.map((country, index) =>
    {const name = country.name.common;
    const {region, population, flags, languages} = country;
    return <tbody key={index}>
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
  </tbody>});

  return (
    <>{country}</>
  );
}

export default Country;