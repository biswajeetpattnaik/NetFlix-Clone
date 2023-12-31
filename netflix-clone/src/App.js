import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Request';


function App(){
    return(
        <div className="App">
            <h1>Hey Netflix</h1>
            <Row title = "NETFLIX ORIGINLS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}

export default App;