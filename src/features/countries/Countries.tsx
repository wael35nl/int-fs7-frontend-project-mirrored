import {useEffect} from 'react';

import { v4 as uuidv4} from 'uuid';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllCountries, selectCountries } from './countriesSlice';
// import Country from './Country';

const Countries = () => {

    const {countries} = useAppSelector(selectCountries);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch]);

    const country = countries.map((country, countryIndex) =>
        <tbody key={countryIndex}>
            <tr>
                <td><img src={country.flags.png} alt='country flag'/></td>
                <td>{country.name.common}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>
                    <ul>
                        {countries.map((language, languageIndex) => {
                            if (languageIndex === countryIndex) {
                                if (language.languages !== null && language.languages !== undefined) {
                                    return Object.keys(language.languages).map(language => <li key={uuidv4()}>{language}</li>)
                                    }
                                }
                            return null;
                            })}
                    </ul>
                </td>
                <td>&hearts;</td>
                <td>▶️</td>
            </tr>
        </tbody>);

    return (
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
  )
}

export default Countries;