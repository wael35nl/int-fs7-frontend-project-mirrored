import { useAppSelector } from "../../app/hooks";
import { selectCountries } from "../../features/countries/countriesSlice";
import FavoriteCountries from "../countries/FavoriteCountries";

const Favorites = () => {
  const {favoriteCountries} = useAppSelector(selectCountries);
  return (
    <>
      {
        favoriteCountries.length === 0 ?
        <h2 className='page__title'>Add favorites..</h2> :
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
          <FavoriteCountries/>
        </table>
      }
    </>
  );
}

export default Favorites;