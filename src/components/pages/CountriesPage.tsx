import {useState, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCountries, search } from '../../features/countries/countriesSlice';
import { getAllCountries } from '../../services';
import Countries from '../countries/Countries';

const CountriesPage = () => {
  const {countries, isLoading, isError, message} = useAppSelector(selectCountries);
  const dispatch = useAppDispatch();

  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    if (countryName !== '') {
      dispatch(search(countryName));
    } else {
      dispatch(getAllCountries());
    }
  }, [countryName, dispatch]);

  return (
    <>
      {isLoading && <h2 className='page__title'>{message}</h2>}
      {isError && <h2 className='page__title'>{message}</h2>}
      {countries.length > 0 && <div>
        <div className='nav__search'>
            <input type='text' name='name' placeholder="search country..." value={countryName} onChange={(e) => setCountryName(e.target.value)} autoComplete="off" />
            <p>Found: {countries.length}</p>
        </div>
        <Countries countries={countries} />
      </div>}
    </>
  );
}

export default CountriesPage;