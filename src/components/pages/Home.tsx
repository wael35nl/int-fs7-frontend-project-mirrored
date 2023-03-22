import {useState, useEffect} from 'react';
import { maps } from '../../data';

const Home = () => {

  const [map, setMap] = useState<number>(0);
  
  useEffect(() => {
    setInterval(() => {
      setMap(Math.floor(Math.random() * maps.length));
  }, 10000);
  }, [map]);

  return (
    <iframe
      title="Europe Map"
      src={maps[map]}>
    </iframe>
  );
}

export default Home;