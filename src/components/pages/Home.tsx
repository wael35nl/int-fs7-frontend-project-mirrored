import {useState, useEffect} from 'react';
import { maps } from '../../data';

const Home = () => {

  const [map, setMap] = useState<number>(0);
  
  useEffect(() => {
    setInterval(() => {
      setMap(Math.floor(Math.random() * maps.length));
  }, 25000);
  }, [map]);

  return (
    <iframe
      title="Europe Map"
      src={maps[map]}
      width="100%"
      height="780vh"
      loading="lazy">
    </iframe>
  );
}

export default Home;