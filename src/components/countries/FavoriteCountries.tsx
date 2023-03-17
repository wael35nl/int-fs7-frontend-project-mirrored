import { useAppSelector } from '../../app/hooks';
import { selectCountries } from '../../features/countries/countriesSlice';

const FavoriteCountries = () => {
    const {favoriteCountries} = useAppSelector(selectCountries);
  return (
    <div>
        {favoriteCountries.map((country, index) => <h2 key={index} >{country.name.common}</h2>)}
    </div>
  )
}

export default FavoriteCountries;