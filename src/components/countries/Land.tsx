import { useLocation, useParams } from 'react-router-dom';

const Land = () => {
    const { name } = useParams();
    const { state } = useLocation();
  return (
    <div>
        <h2>{name}</h2>
        <p>{state.region}</p>
        <p>{state.population}</p>
    </div>
  )
}

export default Land;