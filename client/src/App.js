import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
//import Nav from './components/Nav/Nav'
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import About from './components/About/About';

const App = ()=> {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/home' element={<Home />}/>
      <Route path= '/about' element={<About />}/>
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    </div>
    );
};

export default App;

//{location.pathname === '/' ? <LandingPage home={home} /> :<Nav /> }

/*const location = useLocation();
  const navigate = useNavigate();

  const home = ()=>{
    navigate('/home')
  }*/


