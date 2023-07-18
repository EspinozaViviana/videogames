const {Videogame} = require ('../db')
const getVideogames = require ('../helpers/videogamesBase');
const getVideogameByName = require ('../helpers/videogamesByName')

const getVideogamesControl = async (req, res) => {
    try {
        let{name} = req.query;
        const videogames = name ? await getVideogameByName(name)
                                : await getVideogames()
        return res.status(200).json(videogames);                       
    } catch (error) {
        return res.status(400).json({error:error})
    }
}

module.exports = {getVideogamesControl};