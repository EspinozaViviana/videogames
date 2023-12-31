import axios from 'axios';
import {GET_GAMES, GET_GAMES_BY_ID, GET_GENRES, POST_GAMES, ORIGIN_FILTERED_GAMES, GENRE_FILTERED_GAMES, RATING_ORDERED_GAMES, LETTERS_ORDERED_GAMES, GET_GAMES_BY_NAME } from './action-types'

//URLS
const URL='http://localhost:3001/videogames'
const URL_Name = 'http://localhost:3001/videogames?name='
const URL_ID = 'http://localhost:3001/videogames/'
const URL_GENRES= 'http://localhost:3001/genres'


//rutas get
export const getGame = (name)=>{
    return async(dispatch) => {
        try{
            if(name){
                let info = await axios.get(`${URL_Name}${name}`);
                console.log(info)
                return dispatch({
                    type: GET_GAMES_BY_NAME,
                    payload:info.data
                })
            } else {
                let info = await axios.get(`${URL}`);   
                return dispatch({
                    type: GET_GAMES,
                    payload:info.data
                })
            }
        } catch(error){
            return ({error:error.message});   
        }
    }
}

export const getGamesById= (id)=>{
    const url=`${URL_ID}${id}`
    return async (dispatch)=>{
        try {
            const info= await axios.get(url)
            return dispatch({
                type:GET_GAMES_BY_ID,
                payload:info.data
            })
        } catch (error) {
            return {error:error.message}
        }
    }
    
}

export const getGenres=  ()=>{
        return async (dispatch)=>{
            try {
                const info= await axios.get(URL_GENRES)
                return dispatch({
                    type:GET_GENRES,
                    payload: info.data
                })
            } catch (error) {
                return {error:error.message}
            }
        }
}

//ruta post

export const postGames= (payload)=>{
    return async (dispatch)=>{
        try {
            let info = await axios.post(URL, payload)
            console.log(info);
            return dispatch({
                type:POST_GAMES,
                payload: info.data
            })
        } catch (error) {
            return {error:error.message}
        }
    }
    
}

//ordenamiento

export const filterGamesByGenre = (genre)=>{
    return  {type:GENRE_FILTERED_GAMES, payload:genre}
}

export const filterGamesByOrigin = (origin)=>{
    return  {type:ORIGIN_FILTERED_GAMES, payload:origin}
}

export const orderGamesByLetter = (letters)=>{
    return  {type:LETTERS_ORDERED_GAMES, payload: letters}
}

export const orderGamesByRating = (rating)=>{
    return {type:RATING_ORDERED_GAMES, payload: rating}
}