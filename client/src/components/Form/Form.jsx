import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGamesById } from '../../redux/action';
import { useParams } from "react-router-dom";
import style from './Form.module.css';
import Loader from "../Loader/Loader";

const Detail = () => {
  let z = 1;
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(getGamesById(id))
    .then(()=>setLoading(false))
  },[id, dispatch])

  const detail = useSelector(state => state.detail);
  console.log({detail});
  const descripcionSinEtiq = detail.description?.replace(/<[^>]+>/g, "");

  if(loading) return(<Loader/>)

  return (
    <div className={style.wrapper}>
      <h1 className={style.name}>{detail.name}</h1>
      <div className={style.details}>
          <h2 className={style.ArrayTittles}>Platforms</h2>
          <div className={style.arrayCont}>
          {
          !Array.isArray(detail.platforms)? <p className={style.platformCread}>{detail.platforms}</p>
          :(detail.platforms && detail.platforms.map(({platform}) => (
            <p key={'a' + z++} value={platform.name} className={style.arrays}>{platform.name}</p>
          )))
          }
        </div>
          <h1 className={style.ArrayTittles}>Genres</h1>
        <span className={style.arrayCont}>
          {detail.genres && detail.genres.map(genre => (
            <p key={'a' + z++} className={style.arrays}>{genre.name}</p>
          ))}
        </span>
          <div>
          <img src={detail.image} className={style.image} alt={`Img of ${detail.name} not found`} />
          <h1 className={style.descTittle}>Description</h1>
          <p className={style.descrip}>{descripcionSinEtiq}</p>
          </div>
          <span className={style.numbCont}>
          <h4 className={style.numbTittle}>Released</h4>
          <p className={style.numbers}>{detail.released}</p>
          <h4 className={style.numbTittle}>Rating</h4>
          <p className={style.numbers}>{detail.rating}</p>
          <h4 className={style.numbTittle}>Id: </h4>
          <p className={style.numbers}>{detail.id}</p>
          </span>
        </div> 
      </div>
  )  
}

export default Detail;
