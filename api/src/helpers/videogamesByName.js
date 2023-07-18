const axios = require ('axios')
const {Videogame} = require ('../db')
const {API_KEY, URL_NAME} = process.env;
const {OP} =  require ('sequelize') //operador OP busca por letras de la db
const getVideogameByName = async (name) => {
const URL = `${URL_NAME}${name}&key=${API_KEY}` //axios usa la URL (.env) con la variable "game" () y devuelve todos los videjuegos
   try {
    let videogamesByNameDB = await Videogame.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`,
            },
        },
    })
    const {data} = await axios.get(URL) //trae informacion de la URL
    let foundedGames = [...videogamesByNameDB, ...data.results];
    if( foundedGames.length>15){
      foundedGames = foundedGames.slice(0, 15);
      }
    const allVideogames = foundedGames.map( (element) => {
      return {
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
    if(allVideogames.length !== 0) {
        return allVideogames;
    }
     return 'Not Found'

   } catch (error) {
    return {error: error.message}
   } 
}

module.exports = getVideogameByName;