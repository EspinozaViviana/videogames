const {Videogame} = require('../db')
const getVideogameById = require ('../helpers/videogameById')

const getGameById = async ( req, res) => {
    try {
        let {idVideogame} = req.params //--destructuro req para sacar la id.
        const videogame = await getVideogameById(idVideogame);
          return res.status(200).json(videogame)
    } catch (error) {
        return {error: error.message}
        
    }
};

module.exports = {getGameById};