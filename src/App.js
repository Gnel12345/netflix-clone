
import './App.css';
import Row from"./Row.js";
import requests from './request';



function App() {
  return (
    <div className="App">
     <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
     <Row title="TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
    </div>
  );
}

export default App;
