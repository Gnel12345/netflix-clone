const API_KEY = "7d7d4e848e8817538c46aa27701d0cc6";


const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language-en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie&api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies:`/discover/movie&api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries:`/discover/movie&api_key=${API_KEY}&with_genres=99`,
}

export default requests;

