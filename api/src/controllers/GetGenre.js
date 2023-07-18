const {Genre} = require ('../db')

const savedGenres = require ('../helpers/GenresToDb')
 savedGenres();
// guarda valores dados a genre en la api de la db 

const getGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll();
        res.status(200).json(genres);

    } catch (error) {
        res.status(400).json({error:error});
    
    }
}

module.exports = {getGenres};
