const axios = require ('axios');
const {Videogame , Genre} = require('../db');
const { API_KEY, URL} = process.env;

// función para buscar en la API o revisar la DB si existe dicho juego
const getVideogames = async () => {
const realURL = `${URL}?key=${API_KEY}&page_size=20`; // limita a 20 resultados
let allVideogames = []; // array guarda los videojuegos que no esten en la DB pero si en la API

try {
    let response = await axios.get(realURL);
    let info =  response.data.results; // info.data.results son los juegos que tiene la API  (while hasta llegar a 100)

    while (info.length < 100 && response.data.next) {
        realURL = response.data.next;
        response = await axios.get(realURL);
        info = [...info, ...response.data.results];
    }

    //instancia de los datos obtenidos 
    allVideogames = info.map((element) => {
        return{
            id: element.id,
            name: element.name,
            description: element.description,
            platforms: element.platforms,
            image: element.background_image,
            released: element.released,
            rating: element.rating,
            genres: element.genres,
        };
     });

     //se busca que existan en la DB y que estos se relacionen con la tabla de géneros
     const games =await Videogame.findAll({
        include: [
            {
              model: Genre,
              as: 'genres',
              through: {
                attributes:[],
              },  
            },
          ],
       });

       // si existen en la DB, se reemplaza el array de allVideogames
       if(games.length) allVideogames = [...games, ...allVideogames];
       return allVideogames;
} catch (error) {
    return {error: error.message};

}   
};

module.exports = getVideogames;