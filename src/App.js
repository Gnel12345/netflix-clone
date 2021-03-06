
import './App.css';
import Row from"./Row.js";
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      
     <Row title="MYFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}
     isLargeRow/>
     <Row title="TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title="Romance Movies" fetchUrl = {requests.fetchComedyMovies}/>
     <Row title="Documentaries" fetchUrl = {requests.fetchTopRated}/>
     

    </div>
  );
}

export default App;
