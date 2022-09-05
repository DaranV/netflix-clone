// Fichier d'appel API (https://www.themoviedb.org)

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.themoviedb.org/3/'

const fetchMovies = async (endpoint) => {
    return await fetch(`${API_URL}${endpoint}&language=fr-FR&api_key=${API_KEY}`)
    .then((response) => response.json())
}

export default{
    getHomeMovies: async ()=>{
        return [
             {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovies('movie/top_rated?')
             },
             {
                slug: "upcoming",
                title: "Prochainement",
                items: await fetchMovies('movie/upcoming?')
             },
             {
                slug: "action",
                title: "Action",
                items: await fetchMovies('discover/movie?with_genres=28')
             },
             {
                slug: "horror",
                title: "Horreur",
                items: await fetchMovies('discover/movie?with_genres=27')
             },
             {
                slug: "animation",
                title: "Animation",
                items: await fetchMovies('discover/movie?with_genres=16')
             },
             {
                slug: "mystery",
                title: "Mystery",
                items: await fetchMovies('discover/movie?with_genres=9648')
             },
             {
                slug: "thriller",
                title: "Thriller",
                items: await fetchMovies('discover/movie?with_genres=53')
             }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = []
        if(movieId){
            switch (type) {
                case 'movie':
                    info = fetchMovies(`movie/${movieId}?`)
                    break
                case 'tv':
                    info = fetchMovies(`tv/${movieId}?`)
                    break
            
                default:
                    break;
            }
        }
        return info
    }
}