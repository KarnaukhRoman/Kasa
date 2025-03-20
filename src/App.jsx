import { Routes, Route } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Page404 from './pages/Page404'
import About from './pages/About'


function App() {
  // const location = useLocation();
  // const bannerImage = location.pathname === '/propos'
  //   ? '/src/assets/banner2.svg' 
  //   : '/src/assets/banner1.svg' 
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/propos' element={<About />}/>
        <Route path="/logement/:id" element={<Logement />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    <Footer />
    </>
  );
}
export default App;