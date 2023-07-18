const {getVideogameByName} = require ('../helpers/videogameByName')

const getVideogameByName = async (req, res) => {
    try {
        const videogames = await getVideogameByName()
        return res.status(200).json(videogames)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = {getVideogameByName};