import React from "react";
import style from './Card.module.css';
import { NavLink } from "react-router-dom";

const Card = ({id, name, genres, image, rating }) => {
return (
    <div >
     <NavLink  className ={style.link} to = {`/detail/${id}`}>
        <div className={style.container}>
          <h3 className={style.name}>{name}</h3>
          <img className={style.image} src={image} alt={`Img of ${name}`}/>
          <h4 className={style.tittleGenres}>Genres</h4>
            {
             genres?.map(genre =>(
             <p className={style.genres}>{genre.name}</p>
             ))  
            }
          <h4 className={style.tRating}>Rating</h4>
          <p className ={style.rating}>{rating}</p>
        </div>  
     </NavLink>   
    </div>
  )
}

export default Card;