import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './SearchBar.module.css';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disableForm, setDisableForm] = useState(false);
  const [disableHome, setDisableHome] = useState(false);
  const [disableAbout, setDisableAbout]= useState(false);

  useEffect(() => {
    setDisableForm(location.pathname === "/form" ? true: false);
    setDisableHome(location.pathname === "/home"? true: false);
    setDisableAbout(location.pathname === "/about"? true :false)
  }, [location.pathname]);

  const handleOnClickForm= (event)=>{
    event.preventDefault();
    navigate('/form');
  }
  const handleOnClickHome= (event)=>{
    event.preventDefault();
    navigate('/home');
  }

  const handleOnClickAbout= event=>{
    event.preventDefault();
    navigate('/about');
  }
  return (
    <nav className={style.nav}>
        <button className={style.navBtn1} onClick={handleOnClickForm} 
        disabled={disableForm}>Submit new Game</button>
      <SearchBar />
        <button className={style.navBtn2} onClick={handleOnClickHome} 
        disabled={disableHome}>Home</button>
        <button className={style.navBtn3} onClick={handleOnClickAbout} 
        disabled={disableAbout}>About</button>
    </nav>
  );
};

export default Nav;
