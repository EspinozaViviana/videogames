import React from "react";
import style from './About.module.css';

const About = () =>{
   return(
     <div className={style.wrapper}>
       <h1 className={style.tittles}>About The Proyect</h1>  
       <p className={style.txt}>This Project was born as a way to examine the knowledge of Web Development 
         of the SoyHenry academy.But at the same time is a theme that I liked, for that reason my plans are to 
         continue exploring what to do in it
       </p>
       <h3 className={style.tittles}>About Developer</h3>
       <span className={style.container}>
         <p className={style.txt}>I am Viviana Espinoza, I am from Posadas-Misiones-Argentina.
          I always seek to improve, expand my knowledge and get to work in this wonderful world 
          of programming and computing in general. For this reason, I attempted to dedicate to 
          get better at something I liked since a long time
         </p>
       </span>
      </div>
   )
}

export default About;