import {useState, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllCountries, selectCountries } from '../../features/countries/countriesSlice';
import { search } from '../../features/countries/countriesSlice';
import Country from './Country';

const Countries = () => {
    const {countries} = useAppSelector(selectCountries);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch]);

    const [countryName, setCountryName] = useState('');

    useEffect(() => {
        dispatch(search(countryName));
    }, [countryName, dispatch]);

    return (<>
        <div className='nav__search'>
        <input type='text' name='name' placeholder="search..." value={countryName} onChange={(e) => setCountryName(e.target.value)} autoComplete="off" />
        <p>Found: {countries.length}</p>
        <button onClick={() => {window.location.reload()}}>Get all</button>
        <p>250</p>
      </div>
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
            <Country countries={countries}/>
        </table>
    </>);
}

export default Countries;