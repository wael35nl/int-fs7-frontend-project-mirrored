import { Link, useLocation, useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Land = () => {
  const { name } = useParams();
  const { state } = useLocation();

  const {flags, continents, latlng, region, subregion, timezones, maps, name: officialName, independent, capital, currencies, languages, population, startOfWeek, car} = state;

  return (
      <div style={{fontSize: '1.5rem', backgroundColor: '#eee'}}>
        <h2 className='page__title'>{name}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', padding: '1em'}}>

          <div style={{borderLeft: '15px ridge #caccce'}}>
            <img style={{width: '30rem', height: '15rem'}} src={flags.png} alt={flags.alt} />
            <div style={{margin: '1rem', display: 'flex', flexDirection: 'column', gap: '1.1rem'}}>
              <h3 className='page__title'>Location</h3>
              <h4>Continents: {continents}</h4>
              <p> &nbsp; - Latitude: {latlng[0]} | - Longitude: {latlng[1]}</p>
              <p> &nbsp; - Region: {region}</p>
              <p> &nbsp; - Subregion: {subregion}</p>
              <p> &nbsp; - Timezones: {timezones}</p>
              <p> &nbsp; - Google Map: <Link to={maps.googleMaps} target='_blank'><FaMapMarkerAlt /></Link></p>
              <p> &nbsp; - Open Street Map: <Link to={maps.openStreetMaps} target='_blank'><FaMapMarkerAlt /></Link></p>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <h3 className='page__title'>Country</h3>
            <h4>Native name: {officialName.official}</h4>
            <p> &nbsp; - Independent: {independent ? 'yes' : 'no'}</p>
            <p> &nbsp; - Capital: {capital}</p>
            <p> &nbsp; - Currency: {`${Object.values<any>(currencies)[0].name} ${Object.values<any>(currencies)[0].symbol !== undefined ? `( ${Object.values<any>(currencies)[0].symbol} )` : ''}`}</p>
            <p> &nbsp; - Languages ({Object.values(languages).length}) : {Object.values(languages).join(', ')}</p>
            <p> &nbsp; - Population: {population}</p>
            <p> &nbsp; - Start of the week: {startOfWeek}</p>
            <p> &nbsp; - Car driving side: {car.side}</p>
          </div>

          <div style={{display: 'grid', placeItems: 'center'}}>
            <img style={{width: '30rem', height: '15rem'}} src={state.coatOfArms.svg} alt={state.flags.alt} />
          </div>

        </div>
      </div>
  );
}

export default Land;