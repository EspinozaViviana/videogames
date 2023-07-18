const axios = require ('axios')
const {Genre} = require ('../db')
const {API_KEY, URL_GENRES} = process.env

//funcion para guardar los generos de la Api en la DB

const savedGenres = async() => {
    try {
        const urlGenres = await axios.get(`${URL_GENRES}?key=${API_KEY}`)
        const allGenres = urlGenres.data.results;
        allGenres.forEach(element => {
            Genre.findOrCreate({
                where:{
                    name: element.name
                },
            });
        });
        const dbGenres = await Genre.findAll()
        return dbGenres

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = savedGenres;