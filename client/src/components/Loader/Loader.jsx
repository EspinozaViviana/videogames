import React from "react";
import style from './Loader.module.css';

 const Loader = () => {
    return (
        <div className={style.container}>
            <div className={style.gifCont}></div>
              <h1 className={style.loading}> Loading...</h1>
        </div>
    )
 }

 export default Loader;