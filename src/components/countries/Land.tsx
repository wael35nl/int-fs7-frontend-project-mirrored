import { Link, useLocation, useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

import style from '../../module.css/countries.module.css';

const Land = () => {
  const { name } = useParams();
  const { state } = useLocation();

  const {flags, continents, latlng, region, subregion, timezones, maps, name: officialName, independent, capital, currencies, languages, population, startOfWeek, car} = state;

  return (
      <div className={style.detailed__info}>
        {name && <h2 className='page__title'>{name}</h2>}
        <div className={style.detailed__info_sections}>
          <div className={style.detailed__info_location}>
            {flags.png && <img className={style.detailed__info_img} src={flags.png} alt={flags.alt} />}
            <div className={style.detailed__info_location_info}>
              <h3 className='page__title'>Location</h3>
              {continents && <h4>Continents: {continents}</h4>}
              {latlng && <p> &nbsp; - Latitude: {latlng[0]} | - Longitude: {latlng[1]}</p>}
              {region && <p> &nbsp; - Region: {region}</p>}
              {subregion && <p> &nbsp; - Subregion: {subregion}</p>}
              {timezones && <p> &nbsp; - Timezones: | {timezones.join(' | ')}</p>}
              {maps.googleMaps && <p> &nbsp; - Google Map: <Link to={maps.googleMaps} target='_blank'><FaMapMarkerAlt /></Link></p>}
              {maps.openStreetMaps && <p> &nbsp; - Open Street Map: <Link to={maps.openStreetMaps} target='_blank'><FaMapMarkerAlt /></Link></p>}
            </div>
          </div>
          <div className={style.detailed__info_country}>
            <h3 className='page__title'>Country</h3>
            {officialName.official && <h4>Native name: {officialName.official}</h4>}
            <p> &nbsp; - Independent: {independent ? 'yes' : 'no'}</p>
            {capital && <p> &nbsp; - Capital: {capital}</p>}
            {currencies && <p> &nbsp; - Currency: {`${Object.values<any>(currencies)[0].name} ${Object.values<any>(currencies)[0].symbol !== undefined ? `( ${Object.values<any>(currencies)[0].symbol} )` : ''}`}</p>}
            {languages && <p> &nbsp; - Languages ({Object.values(languages).length}) : {Object.values(languages).join(', ')}</p>}
            {(population || population !== 0) && <p> &nbsp; - Population: {population}</p>}
            {startOfWeek && <p> &nbsp; - Start of the week: {startOfWeek}</p>}
            {car.side && <p> &nbsp; - Car driving side: {car.side}</p>}
          </div>
          {
            state.coatOfArms.svg &&
            <div className={style.detailed__info_coat}>
              <img className={style.detailed__info_img} src={state.coatOfArms.svg} alt={state.flags.alt} />
            </div>
          }
        </div>
      </div>
  );
}

export default Land;