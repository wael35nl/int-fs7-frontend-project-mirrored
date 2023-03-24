import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
import CountriesPage from '../components/pages/CountriesPage';
import Land from '../components/countries/Land';
import Favorites from '../components/pages/Favorites';
import Footer from '../components/layout/Footer';
import Error from '../components/pages/Error';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/CountriesPage' element={<CountriesPage />} />
                <Route path='/CountriesPage/:name' element={<Land />} />
                <Route path='/favorite' element={<Favorites />} />
                <Route path='/favorite/:name' element={<Land />} />
                <Route path='*' element={<Error />} />
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default Index;