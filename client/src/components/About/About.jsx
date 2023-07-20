import React from "react";
import style from './About.module.css';

const About = () =>{
   return(
     <div className={style.wrapper}>
       <h1 className={style.tittles}>About The Proyect</h1>  
       <p className={style.txt}>This project is part of the evaluation 
       of the knowledge of Web Development acquired in the bootcamp I'm Henry.       </p>
       <h3 className={style.tittles}>About Developer</h3>
       <span className={style.container}>
         <p className={style.txt}>I am Viviana Espinoza, I am from Posadas-Misiones-Argentina.
         I always seek to improve, expand my knowledge 
         and set goals in this wonderful world of programming and computing in general.
         </p>
       </span>
      </div>
   )
}

export default About;