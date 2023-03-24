import {useState, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllCountries } from '../../services';
import { selectCountries, search } from '../../features/countries/countriesSlice';
import Countries from '../countries/Countries';

import style from '../../module.css/countries.module.css';

const CountriesPage = () => {
  const {countries, regionSearch, countrySearch, isLoading, isError, message} = useAppSelector(selectCountries);
  const dispatch = useAppDispatch();

  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getAllCountries());
    }
  }, [countries.length, dispatch]);

  useEffect(() => {
      dispatch(search(countryName));
  }, [countryName, dispatch]);

  return (
    <div className={style.countries__container}>
      {isLoading && <h2 className='page__title'>{message}</h2>}
      {isError && <h2 className='page__title'>{message}</h2>}
      {
        countries.length > 0 &&
        <>
          <div className={style.search}>
          <input type='text' name='name' placeholder="search country..." value={countryName} onChange={(e) => setCountryName(e.target.value)} autoComplete="off" />
          <p>Found: {countryName !== '' ? countrySearch.length : regionSearch.length !== 0 ? regionSearch.length : countries.length}</p>
          </div>
          <Countries countries={countryName !== '' ? countrySearch : regionSearch.length !== 0 ? regionSearch : countries} />
        </>
      }
    </div>
  );
}

export default CountriesPage;