import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Footer from '../components/layout/Footer';
import Error from '../components/pages/Error';
import Favorites from '../components/pages/Favorites';
import Land from '../components/countries/Land';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/:name" element={<Land />} />
                <Route path='/about' element={<About />} />
                <Route path='/favorite' element={<Favorites />} />
                <Route path='*' element={<Error />} />
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default Index;