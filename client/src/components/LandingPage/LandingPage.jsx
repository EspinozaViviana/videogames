import React from 'react';
import {useNavigate} from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage =() => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/home')
    }
    return(
        <div className={style.cont}>
           <button className={style.button} onClick={handleOnClick}>
            WELLCOME!
           </button> 
        </div>
    )

}

export default LandingPage;