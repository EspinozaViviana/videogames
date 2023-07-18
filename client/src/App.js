import './App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import LandingPage from './components/LandingPage/LadingPage';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import About from './components/About/About';

const App = ()=> {
  const location = useLocation();
  const navigate = useNavigate();

  const home = ()=>{
    navigate('/home')
  }

  return (
    <div className='App'>
    {location.pathname === '/' ? <LandingPage home={home} /> :<Nav /> }
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path= '/about' element={<About />}/>
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    </div>
    
  );
}


export default App;
