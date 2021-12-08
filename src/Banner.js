import React,{useState, useEffect} from 'react'
import axios from "./axios"
import requests from "./request"
import "./Banner.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
import Row from './Row';

function Banner() {
    const [movie,setMovies] = useState([]);
    //sets the default state for trailer 
const[trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovies(
        request.data.results[
    Math.floor(Math.random() * request.data.results.length - 1)
        ]);
        return request;

}
fetchData();
    },[]);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
// means if the banner content is longer than a certain amount of characters which is n then cut off the rest and put an elipsis in place of it
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    };

    const handleClick=(movie)=>{
        if(trailerUrl){
            //if trailer is already open and user clicks it then it clears it
            setTrailerUrl('')
        }else{
            //once movie is clicked it searchs through you tube and tries to find trailer
            //this is a promise
            movieTrailer(movie?.name || "")
            .then((url) =>{
        const urlParams =new URLSearchParams( new URL(url).search);
        
        setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        
            
        
        }
        }
    return (
        <header className = "banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/.${movie.backdrop_path}")`,
            backgroundPosition: "center ",
        }}
        
        >
            <div className = "banner_contents">
  {/*title*/}
  <h1 className = "banner_title" >
  {movie?.title || movie?.name || movie?.original_name}
  </h1>
  <div className="banner_buttons">
      <button className="banner_button" onClick={()=> handleClick(movie)}>Play </button>
      <button className="banner_button">My List</button>


  </div>
  <h1 className="banner_description">

    {truncate(movie?.overview, 150)}
  </h1>
            {/*div 2 button*/}
            {/*Content*/}


            </div>
          
<div className="banner--fadeBottom">
    
</div>
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </header>
    )
}

export default Banner
